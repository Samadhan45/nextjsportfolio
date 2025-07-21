import ScrollAnimationWrapper from "./scroll-animation-wrapper";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <ScrollAnimationWrapper className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title.split(" ").map((word, index) =>
          index === title.split(" ").length - 1 ? (
            <span key={index} className="text-primary text-glow">
              {word}
            </span>
          ) : (
            word + " "
          )
        )}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </ScrollAnimationWrapper>
  );
}
