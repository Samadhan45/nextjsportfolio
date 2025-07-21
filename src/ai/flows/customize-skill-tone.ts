'use server';

/**
 * @fileOverview AI agent to rewrite skill descriptions in different tones.
 *
 * - customizeSkillTone - A function that rewrites skill descriptions.
 * - CustomizeSkillToneInput - The input type for the customizeSkillTone function.
 * - CustomizeSkillToneOutput - The return type for the customizeSkillTone function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomizeSkillToneInputSchema = z.object({
  skillDescription: z
    .string()
    .describe('The original description of the skill.'),
  tone: z.string().describe('The desired tone for the skill description.'),
});
export type CustomizeSkillToneInput = z.infer<typeof CustomizeSkillToneInputSchema>;

const CustomizeSkillToneOutputSchema = z.object({
  rewrittenDescription: z
    .string()
    .describe('The rewritten skill description in the specified tone.'),
});
export type CustomizeSkillToneOutput = z.infer<typeof CustomizeSkillToneOutputSchema>;

export async function customizeSkillTone(
  input: CustomizeSkillToneInput
): Promise<CustomizeSkillToneOutput> {
  return customizeSkillToneFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customizeSkillTonePrompt',
  input: {schema: CustomizeSkillToneInputSchema},
  output: {schema: CustomizeSkillToneOutputSchema},
  prompt: `Rewrite the following skill description in a {{{tone}}} tone.\n\nSkill Description: {{{skillDescription}}}`,
});

const customizeSkillToneFlow = ai.defineFlow(
  {
    name: 'customizeSkillToneFlow',
    inputSchema: CustomizeSkillToneInputSchema,
    outputSchema: CustomizeSkillToneOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
