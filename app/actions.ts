"use server";

import { z } from "zod";
// تأكدي أن هذا المسار مطابق لمكان ملف storyteller-flow.ts في مشروعك
import { storytellerFlow } from "@/ai/flows/storyteller-flow";
import { generateSecurityRules } from "@/ai/flows/generate-security-rules";
import { suggestRuleImprovements } from "@/ai/flows/suggest-rule-improvements";
import { handleAdventure } from "@/ai/flows/smart-adventure-flow";
import { getAnimalSoundFlow } from "@/ai/flows/animal-sound-flow";
import { getDialogueEvaluationFlow, DialogueEvaluationInputSchema } from "@/ai/flows/dialogue-evaluation-flow";

/**
 * وظيفة جلب قصة الأثر وتحويلها لصوت.
 * مصممة لتعمل كـ Server Action متوافق مع Next.js 14/15.
 */
export async function handleGetStory(title: string, description: string) {
  try {
    // استدعاء محرك السرد
    const storyText = await storytellerFlow(title, description);
    
    return { 
      success: true, 
      text: storyText 
    };
  } catch (error) {
    console.error("Storyteller Action Error:", error);
    // إرجاع رد آمن في حالة الفشل لضمان عدم توقف الموقع
    return { 
      success: false, 
      error: "عذراً يا بطل، حصل ضغط على محرك السرد، حاول مرة تانية." 
    };
  }
}

// --- تصحيح بقية الأفعال لضمان نجاح الـ Build على Vercel ---

const generateRulesSchema = z.object({
  dataStructure: z.string().min(10),
  accessPatterns: z.string().min(10),
});

export async function handleGenerateRules(prevState: any, formData: FormData) {
  const dataStructure = formData.get('dataStructure') as string;
  const accessPatterns = formData.get('accessPatterns') as string;

  const validatedFields = generateRulesSchema.safeParse({ dataStructure, accessPatterns });

  if (!validatedFields.success) {
    return { message: "Validation failed", errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const result = await generateSecurityRules({
      dataStructureDescription: validatedFields.data.dataStructure,
      accessPatternsDescription: validatedFields.data.accessPatterns,
    });
    return { message: "success", rules: result.securityRules };
  } catch (error) {
    return { message: "AI generation failed.", errors: {} };
  }
}

export async function handleSmartAdventure(prevState: any, formData: FormData) {
    const userInput = formData.get('userInput') as string;
    const taskType = formData.get('taskType') as 'challenge' | 'correction';

    try {
        const result = await handleAdventure({ userInput, taskType });
        return { message: "success", text: result.text };
    } catch (error) {
        return { message: "failed", text: "حصلت مشكلة في الاتصال بـ Gemini، حاول تاني يا بطل!" };
    }
}
