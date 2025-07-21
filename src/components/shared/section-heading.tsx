import ScrollAnimationWrapper from "./scroll-animation-wrapper";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <ScrollAnimationWrapper className={`text-center mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-primary text-glow">{title}</span>
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </ScrollAnimationWrapper>
  );
}
