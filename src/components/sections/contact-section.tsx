'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import SectionHeading from '../shared/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Mail, Phone, Send } from 'lucide-react';
import SocialIcons from '../shared/social-icons';
import { useToast } from '@/hooks/use-toast';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setIsLoading(false);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get in Touch" subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions." />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
              <div className="space-y-2">
                <a href="mailto:samadhankadam002@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Mail className="w-5 h-5" />
                  <span>samadhankadam002@gmail.com</span>
                </a>
                <a href="tel:+918010792529" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Phone className="w-5 h-5" />
                  <span>+91 8010792529</span>
                </a>
              </div>
            </div>
             <div>
              <h3 className="text-lg font-semibold mb-2">Connect with Me</h3>
               <SocialIcons />
             </div>
          </div>
          <div className="md:col-span-2">
            <Card className="bg-background border-border/50">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input {...register('name')} placeholder="Your Name" required />
                  <Input {...register('email')} type="email" placeholder="Your Email" required />
                  <Input {...register('subject')} placeholder="Subject" required />
                  <Textarea {...register('message')} placeholder="Your Message" rows={5} required />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? 'Sending...' : 'Send Message'}
                    {!isLoading && <Send className="ml-2 w-4 h-4" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
