import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page Not Found | Spabrix',
    description: 'The page you are looking for does not exist. Return to Spabrix homepage for web design, SEO, and digital marketing services in Kerala.',
};

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="max-w-md text-center">
                {/* 404 Number */}
                <h1 className="text-[150px] font-black leading-none bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-600">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-slate-600 mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let&apos;s get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand transition-colors"
                    >
                        Go to Homepage
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-brand hover:text-brand transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-4">You might be looking for:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/services" className="text-brand hover:underline">
                            Our Services
                        </Link>
                        <Link href="/projects" className="text-brand hover:underline">
                            Portfolio
                        </Link>
                        <Link href="/blog" className="text-brand hover:underline">
                            Blog
                        </Link>
                        <Link href="/faq" className="text-brand hover:underline">
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
