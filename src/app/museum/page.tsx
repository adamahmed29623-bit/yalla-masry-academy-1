'use client';

import React, { useState, Suspense, useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, useTexture, PositionalAudio } from '@react-three/drei';
import * as THREE from 'three';
import { ARTIFACT_DATA, type ArtifactData, type Artifacts } from 'lib/artifacts';
import { Button } from 'components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'components/ui/card';
import { Loader2, Volume2, X, VolumeX } from 'lucide-react';
import { getStorytellerAudioFlow } from 'ai/flows/storyteller-flow';

// == R3F Components ==

const MuseumRoom = () => {
    const wallTexture = useTexture('https://www.transparenttextures.com/patterns/concrete-wall.png');
    wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
    wallTexture.repeat.set(10, 10);
    
    return (
        <>
            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -50, 0]}>
                <planeGeometry args={[500, 500]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            {/* Ceiling */}
            <mesh position={[0, 50, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <planeGeometry args={[500, 500]} />
                <meshStandardMaterial color="#f0f0f0" />
            </mesh>
            {/* Walls */}
            <mesh position={[-250, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[500, 100]} />
                <meshStandardMaterial map={wallTexture} color="#d3d3d3" />
            </mesh>
            <mesh position={[250, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[500, 100]} />
                <meshStandardMaterial map={wallTexture} color="#d3d3d3" />
            </mesh>
            <mesh position={[0, 0, -250]}>
                <planeGeometry args={[500, 100]} />
                <meshStandardMaterial map={wallTexture} color="#d3d3d3" />
            </mesh>
            <mesh position={[0, 0, 250]} rotation={[0, Math.PI, 0]}>
                <planeGeometry args={[500, 100]} />
                <meshStandardMaterial map={wallTexture} color="#d3d3d3" />
            </mesh>
        </>
    );
};

const Artifact = ({ data, onSelect }: { data: ArtifactData, onSelect: (data: ArtifactData) => void }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const audioRef = useRef<THREE.PositionalAudio>(null!);

  useFrame((state, delta) => (meshRef.current.rotation.y += delta * 0.2));

  useEffect(() => {
    if (audioRef.current) {
        if (data.isPlaying) {
            if (!audioRef.current.isPlaying) {
                audioRef.current.play();
            }
        } else {
            if (audioRef.current.isPlaying) {
                audioRef.current.stop();
            }
        }
    }
  }, [data.isPlaying]);

  return (
    <group
      position={data.position}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(data);
      }}
      onPointerOver={(e) => (e.object.scale.set(1.2, 1.2, 1.2), document.body.style.cursor = 'pointer')}
      onPointerOut={(e) => (e.object.scale.set(1, 1, 1), document.body.style.cursor = 'auto')}
    >
      <mesh ref={meshRef}>
        <boxGeometry args={[20, 20, 20]} />
        <meshStandardMaterial color="gold" emissive="gold" emissiveIntensity={0.2} />
        <Html distanceFactor={150} zIndexRange={[10, 0]}>
          <div className="bg-black/50 text-white p-2 rounded-md text-center pointer-events-none w-48">
            <p className="text-lg font-bold">{data.title}</p>
          </div>
        </Html>
      </mesh>
      {data.audioUrl && (
        <PositionalAudio ref={audioRef} url={data.audioUrl} distance={50} loop={false} />
      )}
    </group>
  );
};


// == React Components ==

const ArtifactDetails = ({ artifact, onClose, onPlayPause, isPlaying, isLoading }: { artifact: ArtifactData, onClose: () => void, onPlayPause: () => void, isPlaying: boolean, isLoading: boolean }) => {
    
    return (
        <div className="absolute top-0 right-0 m-4 md:m-8 z-10 w-full max-w-sm">
            <Card className="bg-card/80 backdrop-blur-lg border-primary/50">
                 <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl font-bold text-primary">{artifact.title}</CardTitle>
                            <CardDescription className="text-muted-foreground">{artifact.isExplored ? "Explored" : "Newly Discovered"}</CardDescription>
                        </div>
                        <Button variant="ghost" size="icon" onClick={onClose}>
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">{artifact.description}</p>
                    <div className="bg-black/20 p-3 rounded-md">
                        <p className="font-semibold text-sand-ochre">Curator's Challenge:</p>
                        <p className="italic">{artifact.puzzle}</p>
                    </div>
                     <Button onClick={onPlayPause} className="w-full mt-4" disabled={!artifact.audioUrl && isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : (isPlaying ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />)}
                        {isLoading ? 'Generating Story...' : (isPlaying ? 'Pause Story' : 'Play Story')}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

const MuseumPage = () => {
    const [artifacts, setArtifacts] = useState<Artifacts>(ARTIFACT_DATA);
    const [selectedArtifact, setSelectedArtifact] = useState<ArtifactData | null>(null);
    const [loadingArtifact, setLoadingArtifact] = useState<string | null>(null);
    const listenerRef = useRef<THREE.AudioListener>();

    useEffect(() => {
      listenerRef.current = new THREE.AudioListener();
    }, []);

    const handleSelectArtifact = async (artifact: ArtifactData) => {
        setSelectedArtifact(artifact);
        setArtifacts(prev => ({
            ...prev,
            [artifact.id]: { ...prev[artifact.id], isExplored: true }
        }));

        if (!artifact.audioUrl) {
            setLoadingArtifact(artifact.id);
            try {
                const { media } = await getStorytellerAudioFlow({ title: artifact.title, description: artifact.description });
                setArtifacts(prev => ({
                    ...prev,
                    [artifact.id]: { ...prev[artifact.id], audioUrl: media }
                }));
            } catch (error) {
                console.error("Failed to generate audio:", error);
            } finally {
                setLoadingArtifact(null);
            }
        }
    };
    
    const handlePlayPause = () => {
        if (!selectedArtifact) return;

        setArtifacts(prev => {
            const currentArtifact = prev[selectedArtifact.id];
            const isPlaying = currentArtifact.isPlaying;
            
            // Pause all other artifacts
            Object.keys(prev).forEach(key => {
                if (key !== selectedArtifact.id) {
                    prev[key].isPlaying = false;
                }
            });

            return {
                ...prev,
                [selectedArtifact.id]: { ...currentArtifact, isPlaying: !isPlaying }
            };
        });
    };

    const handleCloseDetails = () => {
        // Pause audio when closing details panel
        if (selectedArtifact) {
             setArtifacts(prev => ({
                ...prev,
                [selectedArtifact.id]: { ...prev[selectedArtifact.id], isPlaying: false }
            }));
        }
        setSelectedArtifact(null);
    };

    const artifactList = useMemo(() => Object.values(artifacts), [artifacts]);

    const AudioListenerComponent = () => {
        const { camera } = useThree();
        useEffect(() => {
            if (listenerRef.current) {
                camera.add(listenerRef.current);
                return () => {
                    camera.remove(listenerRef.current!);
                }
            }
        }, [camera]);
        return null;
    }

    return (
        <div className="h-screen w-full relative">
            <div className="absolute top-0 left-0 m-4 md:m-8 z-10">
                 <Card className="bg-card/80 backdrop-blur-lg border-primary/50">
                    <CardHeader>
                        <CardTitle className="text-2xl royal-title">The Virtual Museum</CardTitle>
                        <CardDescription>Click on an artifact to learn its story.</CardDescription>
                    </CardHeader>
                 </Card>
            </div>
            
            {selectedArtifact && (
                <ArtifactDetails 
                    artifact={selectedArtifact} 
                    onClose={handleCloseDetails} 
                    onPlayPause={handlePlayPause}
                    isPlaying={artifacts[selectedArtifact.id]?.isPlaying || false}
                    isLoading={loadingArtifact === selectedArtifact.id}
                />
            )}

            <Canvas camera={{ position: [0, 0, 200], fov: 75 }}>
                <AudioListenerComponent />
                <Suspense fallback={null}>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[0, 20, 100]} intensity={1.5} />
                    <MuseumRoom />
                    {artifactList.map((data) => (
                        <Artifact 
                          key={data.id} 
                          data={data}
                          onSelect={handleSelectArtifact}
                        />
                    ))}
                    <OrbitControls
                        enablePan={false}
                        minDistance={50}
                        maxDistance={300}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 1.5}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default MuseumPage;
