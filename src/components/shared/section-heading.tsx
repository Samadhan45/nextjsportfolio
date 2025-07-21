import ScrollAnimationWrapper from "./scroll-animation-wrapper";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <ScrollAnimationWrapper className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {firstPart} <span className="text-primary">{lastWord}</span>
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </ScrollAnimationWrapper>
  );
}
