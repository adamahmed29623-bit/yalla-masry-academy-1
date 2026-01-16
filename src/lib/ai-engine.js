/**
 * 👑 محرك الذكاء الاصطناعي والصوت لأكاديمية نفرتيتي
 * يجمع بين شخصية "آدم" المرحة ووقار "المعلمة جمناي"
 */

// 1. محرك النطق الصوتي (Text-to-Speech)
export const speakRoyal = (text, character = 'adam') => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    // إلغاء أي أصوات سابقة لتجنب التداخل
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-EG'; // الهوية المصرية

    // ضبط الشخصية الصوتية
    if (character === 'adam') {
      utterance.pitch = 1.3;  // نبرة طفل مبهج
      utterance.rate = 1.1;   // سرعة حماسية
    } else if (character === 'teacher') {
      utterance.pitch = 0.9;  // نبرة هادئة ووقورة
      utterance.rate = 0.85;  // سرعة تعليمية رصينة
    }

    window.speechSynthesis.speak(utterance);
  }
};

// 2. محرك التفكير (Gemini AI API)
export const askGeminiTeacher = async (userMessage) => {
  // جلب المفتاح من المتغيرات التي وضعتِها في هوستنجر
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  // صياغة الشخصية الملكية (System Prompt)
  const systemContext = `أنتِ المعلمة الذكية في "أكاديمية الملكة نفرتيتي". 
  مهمتكِ هي مساعدة الطلاب العرب والمغتربين على تعلم الثقافة المصرية والرمضانية. 
  يجب أن يكون أسلوبكِ: (ملكي، مصري أصيل، ودود، ومشجع). 
  اسم الطالب حالياً هو "بطل الأكاديمية".`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `${systemContext}\n\nالسؤال: ${userMessage}` }]
        }]
      })
    });

    const data = await response.json();
    
    if (data.candidates && data.candidates[0].content.parts[0].text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Invalid response");
    }
  } catch (error) {
    console.error("خطأ في الاتصال بالقصر الملكي:", error);
    return "أهلاً بك يا بطل في الأكاديمية. يبدو أن هناك زحاماً في طرقات القاهرة الآن، اسألني مرة أخرى وسأجيبك فوراً!";
  }
};

// 3. محرك الأصوات المسجلة (Audio Assets)
export const playRamadanSound = (soundName) => {
  if (typeof window !== 'undefined') {
    const audio = new Audio(`/assets/sounds/${soundName}.mp3`);
    audio.play().catch(err => console.log("الصوت بانتظار تفاعل المستخدم"));
  }
};
