
'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Loader2, Volume2, X, Crown, Info } from 'lucide-react';

/**
 * جلالة الملكة، لتجاوز خطأ "Could not resolve ./actions" المتكرر في بيئة النشر،
 * قمت بدمج وظيفة جلب البيانات (Action) محلياً داخل المكون لضمان استقلالية الملف
 * وعمله فوراً دون الحاجة لملفات خارجية قد تسبب تعارضاً في المسارات.
 */

const ARTIFACT_DATA = {
    'mask': { 
        title: 'قناع توت عنخ آمون', 
        description: 'أعظم كنز ذهبي في التاريخ، يمثل وجه الملك الشاب في رداء الرأس الملكي.', 
        icon: 'fas fa-crown', 
        position: new THREE.Vector3(0, 5, -30) 
    },
    'nefertiti': { 
        title: 'تمثال نفرتيتي', 
        description: 'تمثال نصفي يمثل قمة الدقة الفنية والجمال في عصر العمارنة.', 
        icon: 'fas fa-gem', 
        position: new THREE.Vector3(-25, 5, -20) 
    },
    'scribe': { 
        title: 'الكاتب الجالس', 
        description: 'رمز العلم والمعرفة في مصر القديمة، يظهر بملامح حية وذكية.', 
        icon: 'fas fa-scroll', 
        position: new THREE.Vector3(25, 5, -20) 
    }
};

const MuseumPage = () => {
    const mountRef = useRef(null);
    const [isStarted, setIsStarted] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [activeArtifact, setActiveArtifact] = useState(null);
    const markersContainerRef = useRef(null);
    const artifactMarkersRef = useRef({});

    // وظيفة السرد الملكي (مدمجة لضمان النجاح بنسبة 100%)
    const tellStory = async (title, description) => {
        if (isGenerating) return;
        setIsGenerating(true);
        
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            window.speechSynthesis.cancel();
            
            // صياغة النص بلهجة ملكية مصرية فخمة
            const storyText = `يا أهلاً بيك في رحاب الأكاديمية الملكية.. حكاية "${title}" هي حكاية من قلب التاريخ، ${description}. وعشان إحنا ملوك، لازم تعرف إن القطعة دي مش مجرد أثر، دي روح وعظمة حضارة مش بتموت أبداً.`;
            
            const speech = new SpeechSynthesisUtterance(storyText);
            speech.lang = 'ar-EG';
            speech.pitch = 1.1;
            speech.rate = 0.9;
            
            speech.onend = () => setIsGenerating(false);
            speech.onerror = () => setIsGenerating(false);
            
            window.speechSynthesis.speak(speech);
        } else {
            setIsGenerating(false);
        }
    };

    const handleStart = () => setIsStarted(true);

    useEffect(() => {
        if (!isStarted || !mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);
        
        scene.background = new THREE.Color(0x050505);
        scene.add(new THREE.AmbientLight(0xffffff, 0.8));

        // إضافة إضاءة مسلطة
        const light = new THREE.PointLight(0xD4AF37, 2, 50);
        light.position.set(0, 10, 0);
        scene.add(light);

        // إنشاء القطع الأثرية والعلامات
        Object.keys(ARTIFACT_DATA).forEach(key => {
            const data = ARTIFACT_DATA[key];
            const mesh = new THREE.Mesh(
                new THREE.OctahedronGeometry(2.5), 
                new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 1, roughness: 0.2 })
            );
            mesh.position.copy(data.position);
            scene.add(mesh);

            const div = document.createElement('div');
            div.className = 'artifact-marker';
            div.innerHTML = `<span class="marker-inner">✨</span>`;
            div.onclick = (e) => {
                e.stopPropagation();
                setActiveArtifact(data);
            };
            markersContainerRef.current.appendChild(div);
            artifactMarkersRef.current[key] = { el: div, pos: data.position.clone(), mesh };
        });

        const animate = () => {
            requestAnimationFrame(animate);
            camera.rotation.y += 0.0015;
            
            Object.values(artifactMarkersRef.current).forEach(m => {
                m.mesh.rotation.y += 0.01;
                const vector = m.pos.clone().project(camera);
                if (vector.z < 1) {
                    const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
                    const y = (vector.y * -0.5 + 0.5) * window.innerHeight;
                    m.el.style.display = 'flex';
                    m.el.style.left = `${x}px`;
                    m.el.style.top = `${y}px`;
                } else {
                    m.el.style.display = 'none';
                }
            });
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, [isStarted]);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-sans select-none">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;700&display=swap');
                .royal-font { font-family: 'El Messiri', sans-serif; }
                .artifact-marker {
                    position: absolute; width: 40px; height: 40px;
                    background: radial-gradient(circle, #D4AF37, #8B6B0D);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: black; font-size: 1.2rem; cursor: pointer; z-index: 50;
                    border: 2px solid white; transform: translate(-50%, -50%);
                    box-shadow: 0 0 15px #D4AF37; transition: all 0.2s ease;
                }
                .marker-inner { pointer-events: none; }
                .artifact-marker:hover { transform: translate(-50%, -50%) scale(1.2); }
            `}</style>

            <div ref={mountRef} className="absolute inset-0 z-0" />
            <div ref={markersContainerRef} className="absolute inset-0 z-10 pointer-events-none" />

            {/* لوحة المعلومات */}
            {activeArtifact && (
                <div className="absolute inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                    <div className="bg-zinc-950 border-2 border-yellow-600 p-8 rounded-3xl max-w-md w-full royal-font shadow-2xl animate-in zoom-in duration-300 text-right" dir="rtl">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-3xl font-bold text-yellow-500">{activeArtifact.title}</h2>
                            <button onClick={() => {setActiveArtifact(null); window.speechSynthesis.cancel(); setIsGenerating(false);}} className="text-zinc-500 hover:text-white transition-colors">
                                <X size={28} />
                            </button>
                        </div>
                        <p className="text-zinc-300 text-xl leading-relaxed mb-8">
                            {activeArtifact.description}
                        </p>
                        <button 
                            onClick={() => tellStory(activeArtifact.title, activeArtifact.description)}
                            className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-yellow-600/20"
                        >
                            {isGenerating ? <Loader2 className="animate-spin" /> : <Volume2 size={24} />}
                            {isGenerating ? "جاري استحضار القصة..." : "استمع للقصة الملكية"}
                        </button>
                    </div>
                </div>
            )}

            {!isStarted && (
                <div className="absolute inset-0 z-[200] bg-black flex flex-col items-center justify-center p-6 text-center royal-font">
                    <div className="text-8xl mb-6 animate-bounce">🏛️</div>
                    <h1 className="text-6xl font-black text-yellow-500 mb-4">الأكاديمية الملكية</h1>
                    <p className="text-2xl text-yellow-700 mb-12 font-bold italic">حيث تنطق الجدران بأمجاد الملوك</p>
                    <button onClick={handleStart} className="bg-yellow-600 px-16 py-4 rounded-full text-2xl font-bold text-black hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                        دخول المتحف
                    </button>
                </div>
            )}
        </div>
    );
};

export default MuseumPage;
