import SectionHeading from '../shared/section-heading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
    {
        question: "What is your main area of expertise?",
        answer: "I specialize in full-stack development, with a strong focus on backend systems using Java and Spring Boot, and modern frontend development with React and Next.js."
    },
    {
        question: "Are you available for freelance projects?",
        answer: "Yes, I am currently open to freelance opportunities. Feel free to reach out with your project details, and we can discuss if it's a good fit."
    },
    {
        question: "What kind of projects are you most interested in?",
        answer: "I'm particularly interested in projects that involve building scalable and impactful applications, especially those that solve real-world problems. I enjoy working on complex backend architectures and creating seamless user experiences."
    },
    {
        question: "How do we start working together?",
        answer: "The best way to start is by sending me an email or filling out the contact form with a brief description of your project or opportunity. From there, we can schedule a call to discuss it in more detail."
    },
    {
        question: "Can you provide references from previous clients?",
        answer: "Absolutely. I can provide references from past projects and employers upon request."
    },
    {
        question: "What are your salary expectations?",
        answer: "My salary expectations are negotiable and depend on the role, responsibilities, and the overall compensation package. I'm happy to discuss this further once I have a better understanding of the opportunity."
    },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Frequently Asked Questions" subtitle="Here are some common questions I get. Feel free to reach out if you have more."/>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </section>
  )
}
