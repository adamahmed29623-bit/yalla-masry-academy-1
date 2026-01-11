import { z } from 'zod';
import { ai } from '@/ai/genkit';

export const DialogueEvaluationInputSchema = z.object({
  studentResponse: z.string(),
  context: z.string(),
});

export const dialogueEvaluationFlow = ai.defineFlow(
  {
    name: 'dialogueEvaluationFlow',
    inputSchema: DialogueEvaluationInputSchema,
    outputSchema: z.object({
      score: z.number(),
      feedback: z.string(),
    }),
  },
  async (input) => {
    return {
      score: 100,
      feedback: "إجابة ممتازة تليق بطلاب الأكاديمية الملكية.",
    };
  }
);
