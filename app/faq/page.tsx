import { Metadata } from 'next';
import FAQClient from './FAQClient';

// SEO Metadata for FAQ Page
export const metadata: Metadata = {
    title: 'FAQ - Frequently Asked Questions | Web Design & SEO in Kerala',
    description: 'Get answers to common questions about web design, SEO services, pricing, and digital marketing in Malappuram, Kerala. Learn about Spabrix services, turnaround time, and more.',
    keywords: [
        'web design FAQ Kerala',
        'website cost Malappuram',
        'SEO services FAQ',
        'digital marketing questions',
        'web development pricing India',
    ],
    alternates: {
        canonical: 'https://spabrix.in/faq',
    },
};

// FAQ Items for Schema
const faqItems = [
    {
        question: 'What services does Spabrix offer?',
        answer: 'Spabrix is a full-service web development and digital marketing agency based in Malappuram, Kerala. We specialize in custom website design, Next.js web development, SEO (Search Engine Optimization), branding, logo design, and social media marketing.',
    },
    {
        question: 'How much does a website cost in Kerala?',
        answer: 'The cost of a website depends on its complexity, features, and number of pages. A basic business website starts at an affordable rate, while custom e-commerce or web applications depend on specific requirements. Contact us for a free, transparent quote.',
    },
    {
        question: 'How long does it take to build a website?',
        answer: 'For a standard professional business website, our turnaround time is typically 3 to 7 business days. More complex projects like e-commerce stores or custom web applications may take 2 to 4 weeks.',
    },
    {
        question: 'What is SEO and why is it important?',
        answer: 'SEO (Search Engine Optimization) is the process of improving your website to rank higher on Google search results. It helps potential customers find you when they search for relevant keywords, leading to organic, free traffic and more sales.',
    },
    {
        question: 'Do you work with businesses outside of Kerala?',
        answer: 'Yes! While we are proud to be a top web design agency in Malappuram, we work with clients across India and globally. Our digital communication tools allow us to effectively manage projects remotely.',
    },
    {
        question: 'Will my website work on mobile phones?',
        answer: 'Absolutely. We adopt a mobile-first approach. Every website we build is fully responsive, meaning it adapts perfectly to smartphones, tablets, and desktops. This is crucial for user experience and Google SEO rankings.',
    },
];

// JSON-LD FAQ Schema for AEO
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

export default function FAQPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <FAQClient />
        </>
    );
}
