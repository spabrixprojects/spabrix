import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPostsData } from '../../lib/blogData';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

// Generate static params for all posts at build time (SSG)
export async function generateStaticParams() {
    return blogPostsData.map((post) => ({
        slug: post.slug,
    }));
}

// Generate global search metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPostsData.find((p) => p.slug === slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            authors: [post.author],
            publishedTime: post.date,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPostsData.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen py-24 bg-slate-50 text-slate-800">
            {/* Scroll Progress Bar (Optional - could be added in a client wrapper) */}

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <Breadcrumbs />

                {/* Header */}
                <header className="mb-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 mb-6 transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-b border-slate-200 pb-8">
                        <div className="flex items-center gap-2">
                            <User size={16} className="text-cyan-600" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-cyan-600" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag size={16} className="text-cyan-600" />
                            <span>{post.tags.join(', ')}</span>
                        </div>
                    </div>
                </header>

                {/* Content Body */}
                <div
                    className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700
            prose-strong:text-slate-900 prose-a:text-cyan-600 hover:prose-a:text-cyan-700 transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer/CTA */}
                <div className="mt-16 pt-10 border-t border-slate-200">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">Want to grow your business?</h3>
                    <p className="text-slate-600 mb-6">
                        Spabrix helps businesses like yours build professional websites and reach more customers online.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full font-bold text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
                    >
                        Get a Free Consultation
                    </Link>
                </div>

            </div>
        </article>
    );
}
