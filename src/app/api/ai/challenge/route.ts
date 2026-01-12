import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { studentSpeech, originalSentence } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      أنتِ المعلمة "نفرتيتي الذكية" في أكاديمية "يلا مصري".
      الطالبة تحاول نطق هذه الجملة: "${originalSentence}"
      ما سمعناه منها هو: "${studentSpeech}"
      
      بأسلوب ملكي، مرح، ومشجع جداً للأطفال:
      1. قيمي دقة النطق (من 10).
      2. إذا كان هناك خطأ، وضحي لها كيف تنطق الكلمة بشكل أصح بلكنة مصرية فصيحة.
      3. أعطيها مكافأة معنوية (مثلاً: لقب "أميرة الحروف").
      
      اجعلي الرد قصيراً ومليئاً بالإيموجي العربية.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return NextResponse.json({ feedback: response.text() });
  } catch (error) {
    return NextResponse.json({ error: "عذراً يا ملكة، حدث ارتباك في التواصل" }, { status: 500 });
  }
}
