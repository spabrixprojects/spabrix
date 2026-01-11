import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Enhanced response logic with Fozecode-specific information
    const response = getFozecodeResponse(message);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// Enhanced response generator with Spabrix information
function getFozecodeResponse(query: string): string {
  const normalizedQuery = query.toLowerCase();

  // Greetings
  if (normalizedQuery.includes('hello') || normalizedQuery.includes('hi') || normalizedQuery.includes('hey')) {
    return 'Hello! **I am Spabrix AI.** I\'m optimized to assist you with your web development needs. How can I elevate your project today?';
  }

  // Who are you
  if (normalizedQuery.includes('who are you') || normalizedQuery.includes('what are you')) {
    return 'I am the **Spabrix Neural Assistant**, a specialized AI designed to help you explore our digital services and solutions.';
  }

  // Services related queries
  if (normalizedQuery.includes('service') || normalizedQuery.includes('offer') || normalizedQuery.includes('provide')) {
    return 'At **Spabrix**, we deliver high-performance digital solutions: \n\n**1. Frontend Development** (React, Next.js)\n**2. Backend Systems** (Node.js, Python)\n**3. E-commerce Platforms** (Shopify, Custom)\n**4. UI/UX Design**\n**5. SEO Optimization**\n\nWhich area are you interested in?';
  }

  // Frontend development
  if (normalizedQuery.includes('frontend') || normalizedQuery.includes('front-end') || normalizedQuery.includes('front end') ||
    normalizedQuery.includes('ui') || normalizedQuery.includes('interface')) {
    return 'Our **Frontend Engineering** team builds pixel-perfect, responsive interfaces using **React**, **Next.js**, and **Tailwind CSS**. We prioritize speed, accessibility, and fluid animations to create immersive user experiences.';
  }

  // Backend development
  if (normalizedQuery.includes('backend') || normalizedQuery.includes('back-end') || normalizedQuery.includes('back end') ||
    normalizedQuery.includes('server') || normalizedQuery.includes('database')) {
    return 'We engineer robust **Backend Architectures** using **Node.js** and **Python**. Our systems are secure, scalable, and built to handle high data loads with minimal latency.';
  }

  // E-commerce
  if (normalizedQuery.includes('ecommerce') || normalizedQuery.includes('e-commerce') || normalizedQuery.includes('shop') ||
    normalizedQuery.includes('store') || normalizedQuery.includes('sell')) {
    return 'We build **High-Conversion E-commerce Stores**. Whether using Shopify or custom Next.js solutions, we ensure secure payments, fast checkout flows, and seamless inventory management.';
  }

  // UI/UX Design
  if (normalizedQuery.includes('design') || normalizedQuery.includes('ux') || normalizedQuery.includes('ui/ux') ||
    normalizedQuery.includes('user experience')) {
    return 'Our **Design Philosophy** marries aesthetics with functionality. We create **Glassmorphism**, **Neomorphism**, and **Flat** designs that not only look stunning but drive user engagement and retention.';
  }

  // SEO
  if (normalizedQuery.includes('seo') || normalizedQuery.includes('search engine') || normalizedQuery.includes('ranking') ||
    normalizedQuery.includes('google')) {
    return 'Our **SEO Strategies** are data-driven. We optimize technical structure, content, and backlinks to ensure your brand dominates search results and attracts organic traffic.';
  }

  // Custom Software
  if (normalizedQuery.includes('custom') || normalizedQuery.includes('bespoke') || normalizedQuery.includes('software') ||
    normalizedQuery.includes('application') || normalizedQuery.includes('app')) {
    return 'Need something unique? We build **Custom Software Solutions** tailored to your specific business logic. From internal dashboards to SaaS platforms, we engineer efficiency.';
  }

  // Portfolio/Past work
  if (normalizedQuery.includes('portfolio') || normalizedQuery.includes('examples') || normalizedQuery.includes('past work') ||
    normalizedQuery.includes('projects') || normalizedQuery.includes('clients')) {
    return 'We have successfully deployed solutions for **Healthcare**, **E-commerce**, and **Corporate** sectors. Check our **Projects** section for case studies. Should I schedule a demo for you?';
  }

  // Pricing
  if (normalizedQuery.includes('price') || normalizedQuery.includes('cost') || normalizedQuery.includes('fee') ||
    normalizedQuery.includes('budget') || normalizedQuery.includes('quote')) {
    return 'We offer **Flexible Pricing Models** based on project complexity. \n\n- Fixed Price for defined scopes\n- Hourly for ongoing support\n\n**Contact us** for a precise, no-obligation quote.';
  }

  // Timeline
  if (normalizedQuery.includes('timeline') || normalizedQuery.includes('time') || normalizedQuery.includes('duration') ||
    normalizedQuery.includes('how long') || normalizedQuery.includes('deadline')) {
    return 'Timelines vary by scope. \n\n- **Landing Pages:** 1-2 weeks\n- **Full Websites:** 2-4 weeks\n- **Custom Apps:** 4-12 weeks\n\nWe adhere to strict Agile sprints to ensure timely delivery.';
  }

  // Contact/Consultation
  if (normalizedQuery.includes('contact') || normalizedQuery.includes('call') || normalizedQuery.includes('email') ||
    normalizedQuery.includes('consultation') || normalizedQuery.includes('talk') || normalizedQuery.includes('meet')) {
    return 'Ready to start? \n\n- **Email:** spabrix@gmail.com\n- **Phone:** +91 9946972210\n\nOr simply browse to our **Contact Page** to leave a message.';
  }

  // Support/Maintenance
  if (normalizedQuery.includes('support') || normalizedQuery.includes('maintenance') || normalizedQuery.includes('update') ||
    normalizedQuery.includes('after') || normalizedQuery.includes('warranty')) {
    return 'We don\'t just launch and leave. **Spabrix Care** packages ensure your site remains secure, updated, and fast specifically for the long term.';
  }

  // Technologies
  if (normalizedQuery.includes('technology') || normalizedQuery.includes('tech stack') || normalizedQuery.includes('programming') ||
    normalizedQuery.includes('framework') || normalizedQuery.includes('language')) {
    return 'Our stack is future-proof: **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS**, **Node.js**, **Supabase**, and **AWS**. We choose the best tool for the job.';
  }

  // Functionality
  if (normalizedQuery.includes('help') || normalizedQuery.includes('can you')) {
    return 'I can explain our **Services**, detail our **technologies**, discuss **Pricing**, or guide you to **Contact** us. Just ask!';
  }

  // Default response
  return "I am processing that... Could you please accept my apologies? I am trained on Spabrix services. Ask me about **Web Development**, **SEO**, **E-commerce**, or **Pricing** to get started.";
} 