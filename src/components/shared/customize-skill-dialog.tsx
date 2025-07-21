'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { customizeSkillTone } from '@/ai/flows/customize-skill-tone';
import { Skeleton } from '../ui/skeleton';

interface CustomizeSkillDialogProps {
  skillDescription: string;
}

const tones = ['Professional', 'Enthusiastic', 'Witty', 'Formal', 'Confident'];

export default function CustomizeSkillDialog({ skillDescription }: CustomizeSkillDialogProps) {
  const [open, setOpen] = useState(false);
  const [selectedTone, setSelectedTone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rewrittenDescription, setRewrittenDescription] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!selectedTone) {
      toast({
        title: 'No tone selected',
        description: 'Please select a tone to rewrite the description.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setRewrittenDescription('');
    try {
      const result = await customizeSkillTone({ skillDescription, tone: selectedTone });
      setRewrittenDescription(result.rewrittenDescription);
    } catch (error) {
      console.error('Failed to rewrite skill:', error);
      toast({
        title: 'Error',
        description: 'Failed to rewrite skill description. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(rewrittenDescription);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary hover:bg-primary/10">
          <Wand2 className="mr-2 h-4 w-4" />
          Customize with AI
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Customize Skill Tone</DialogTitle>
          <DialogDescription>
            Rewrite this skill description to match the tone of your job application.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <h4 className="font-semibold mb-2">Original Description</h4>
            <p className="text-sm text-muted-foreground p-3 bg-card rounded-md">{skillDescription}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Select a Tone</h4>
            <Select onValueChange={setSelectedTone}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a tone..." />
              </SelectTrigger>
              <SelectContent>
                {tones.map((tone) => (
                  <SelectItem key={tone} value={tone}>
                    {tone}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {isLoading && (
             <div className="space-y-2">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-20 w-full" />
             </div>
          )}
          {rewrittenDescription && !isLoading && (
            <div>
              <h4 className="font-semibold mb-2">Rewritten Description</h4>
              <div className="relative">
                <Textarea readOnly value={rewrittenDescription} rows={5} />
                 <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={handleCopy}>
                    {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button onClick={handleGenerate} disabled={isLoading || !selectedTone}>
            <Wand2 className="mr-2 h-4 w-4" />
            {isLoading ? 'Generating...' : 'Generate'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
