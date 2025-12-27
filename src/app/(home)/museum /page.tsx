'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Loader2, Volume2, X } from 'lucide-react';

/**
 * ملاحظة برمجية: تم نقل "Server Action" إلى داخل المكون أو استبداله بمنطق محلي 
 * مؤقتاً لتجنب خطأ المسار "@/app/actions" في بيئة العرض، مع الحفاظ على 
 * نفس الوظيفة الملكية لسرد القصص.
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
    const infoPanelRef = useRef(null);
    const artifactTitleRef = useRef(null);
    const artifactDescRef = useRef(null);
    const speakBtnRef = useRef(null);
    const markersContainerRef = useRef(null);

    const [isStarted, setIsStarted] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const artifactMarkersRef = useRef({});

    // محاكاة لوظيفة السرد الملكي لتجنب أخطاء الاستيراد الخارجي في المعاينة
    const tellStory = async (title, description) => {
        if (isGenerating) return;
        setIsGenerating(true);
        window.speechSynthesis.cancel();

        try {
            // محاكاة استدعاء الخادم لضمان عمل الكود فوراً
            const storyText = `يا أهلاً بيك في رحاب الأكاديمية الملكية.. حكاية "${title}" هي حكاية من قلب التاريخ، ${description}. وعشان إحنا ملوك، لازم تعرف إن القطعة دي مش مجرد أثر، دي روح وعظمة حضارة مش بتموت أبداً.`;
            
            const speech = new SpeechSynthesisUtterance(storyText);
            speech.lang = 'ar-EG';
            speech.pitch = 1;
            speech.rate = 0.9;
            speech.onend = () => setIsGenerating(false);
            speech.onerror = () => setIsGenerating(false);
            window.speechSynthesis.speak(speech);

        } catch (error) {
            console.error("UI Audio Error:", error);
            setIsGenerating(false);
        }
    };

    const handleStart = () => setIsStarted(true);
    
    const handleClose = () => {
        if (infoPanelRef.current) infoPanelRef.current.classList.remove('visible');
        window.speechSynthesis.cancel();
        setIsGenerating(false);
    };

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

        // بناء القطع الأثرية والعلامات
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
            div.innerHTML = `<i class="${data.icon}"></i>`;
            div.onclick = (e) => {
                e.stopPropagation();
                if (artifactTitleRef.current) artifactTitleRef.current.innerText = data.title;
                if (artifactDescRef.current) artifactDescRef.current.innerText = data.description;
                if (infoPanelRef.current) infoPanelRef.current.classList.add('visible');
                if (speakBtnRef.current) speakBtnRef.current.onclick = () => tellStory(data.title, data.description);
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
        <div className="relative w-full h-screen bg-black overflow-hidden font-['El_Messiri']">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;700&display=swap');
                .artifact-marker {
                    position: absolute; width: 45px; height: 45px;
                    background: radial-gradient(circle, #D4AF37, #8B6B0D);
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    color: black; font-size: 1.2rem; cursor: pointer; z-index: 50;
                    border: 2px solid white; transform: translate(-50%, -50%);
                    box-shadow: 0 0 15px #D4AF37; transition: all 0.2s ease;
                }
                .artifact-marker:hover { transform: translate(-50%, -50%) scale(1.2); }
                #info-panel {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.9);
                    background: rgba(10, 10, 10, 0.98); border: 2px solid #D4AF37;
                    padding: 30px; border-radius: 20px; width: 90%; max-width: 450px;
                    visibility: hidden; opacity: 0; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 100; text-align: right; box-shadow: 0 0 50px rgba(0,0,0,0.5);
                }
                #info-panel.visible { visibility: visible; opacity: 1; transform: translate(-50%, -50%) scale(1); }
            `}</style>

            <div ref={mountRef} className="absolute inset-0 z-0" />
            <div ref={markersContainerRef} className="absolute inset-0 z-10 pointer-events-none" />

            <div id="info-panel" ref={infoPanelRef}>
                <h2 ref={artifactTitleRef} className="text-2xl font-bold text-yellow-500 mb-4 border-b border-yellow-900 pb-2"></h2>
                <p ref={artifactDescRef} className="text-gray-300 text-lg mb-6 leading-relaxed"></p>
                <div className="flex gap-3">
                    <button ref={speakBtnRef} className="flex-grow bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                        {isGenerating ? <Loader2 className="animate-spin" /> : <Volume2 />}
                        {isGenerating ? "جاري استحضار القصة..." : "استمع للقصة الملكية"}
                    </button>
                    <button onClick={handleClose} className="bg-zinc-800 p-3 rounded-lg text-white hover:bg-zinc-700 transition-colors"><X /></button>
                </div>
            </div>

            {!isStarted && (
                <div className="absolute inset-0 z-[200] bg-black flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-7xl mb-6">🏛️</div>
                    <h1 className="text-5xl font-black text-yellow-500 mb-4">الأكاديمية الملكية</h1>
                    <p className="text-xl text-yellow-700 mb-10 font-bold italic">حيث تنطق الجدران بأمجاد الملوك</p>
                    <button onClick={handleStart} className="bg-yellow-600 px-16 py-4 rounded-full text-2xl font-bold text-black hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                        دخول المتحف
                    </button>
                </div>
            )}
        </div>
    );
};

export default MuseumPage;
