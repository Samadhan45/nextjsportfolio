'use server';

/**
 * @fileOverview A flow to handle sending an email from the contact form.
 *
 * - sendContactForm - A function that handles the contact form submission.
 * - ContactFormInput - The input type for the sendContactForm function.
 * - ContactFormOutput - The return type for the sendContactForm function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  success: z.boolean(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function sendContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return sendContactFormFlow(input);
}

const sendContactFormFlow = ai.defineFlow(
  {
    name: 'sendContactFormFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: 'samadhankadam002@gmail.com',
        subject: `New message from ${input.name}: ${input.subject}`,
        reply_to: input.email,
        html: `
          <p>You have a new contact form submission from your portfolio:</p>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Subject:</strong> ${input.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false };
    }
  }
);
