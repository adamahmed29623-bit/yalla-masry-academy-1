"use server";

import { z } from "zod";
// تأكدي من وجود هذا الملف في هذا المسار بالضبط
import { storytellerFlow } from "@/ai/flows/storyteller-flow";
import { generateSecurityRules } from "@/ai/flows/generate-security-rules";
import { suggestRuleImprovements } from "@/ai/flows/suggest-rule-improvements";
import { handleAdventure } from "@/ai/flows/smart-adventure-flow";
import { getAnimalSoundFlow } from "@/ai/flows/animal-sound-flow";
import { getDialogueEvaluationFlow, DialogueEvaluationInputSchema } from "@/ai/flows/dialogue-evaluation-flow";

// الوظيفة المسؤولة عن ربط المتحف بالمحرك
export async function handleGetStory(prompt: string) {
  try {
    const story = await storytellerFlow(prompt);
    return { success: true, text: story };
  } catch (error) {
    return { success: false, error: "حصلت مشكلة في استحضار السرد الملكي" };
  }
}

// تصحيح بقية الوظائف لضمان نجاح الـ Build
const generateRulesSchema = z.object({
  dataStructure: z.string().min(10),
  accessPatterns: z.string().min(10),
});

export async function handleGenerateRules(prevState: any, formData: FormData) {
  const validatedFields = generateRulesSchema.safeParse({
    dataStructure: formData.get('dataStructure'),
    accessPatterns: formData.get('accessPatterns'),
  });

  if (!validatedFields.success) return { message: "Validation failed" };

  try {
    const result = await generateSecurityRules({
      dataStructureDescription: validatedFields.data.dataStructure,
      accessPatternsDescription: validatedFields.data.accessPatterns,
    });
    return { message: "success", rules: result.securityRules };
  } catch (error) {
    return { message: "AI generation failed." };
  }
}

export async function handleSmartAdventure(prevState: any, formData: FormData) {
    const userInput = formData.get('userInput') as string;
    const taskType = formData.get('taskType') as 'challenge' | 'correction';
    try {
        const result = await handleAdventure({ userInput, taskType });
        return { message: "success", text: result.text };
    } catch (error) {
        return { message: "failed", text: "مشكلة في الاتصال بـ Gemini" };
    }
}
