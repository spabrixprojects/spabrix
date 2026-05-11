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
        title: `${post.title} | Spabrix Blog`,
        description: post.excerpt,
        keywords: post.tags,
        alternates: {
            canonical: `https://spabrix.in/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            authors: [post.author],
            publishedTime: post.date,
            url: `https://spabrix.in/blog/${post.slug}`,
            siteName: 'Spabrix Digital Agency',
            images: [
                {
                    url: 'https://spabrix.in/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: ['https://spabrix.in/og-image.png'],
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPostsData.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Article Schema for SEO/AEO
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        author: {
            '@type': 'Organization',
            name: post.author,
            url: 'https://spabrix.in',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Spabrix Digital Agency',
            url: 'https://spabrix.in',
            logo: {
                '@type': 'ImageObject',
                url: 'https://spabrix.in/logo.png',
            },
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://spabrix.in/blog/${post.slug}`,
        },
        image: 'https://spabrix.in/og-image.png',
        keywords: post.tags.join(', '),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <article className="min-h-screen py-32 bg-[#050505] text-slate-300 font-light">
                <div className="max-w-4xl mx-auto px-6 relative z-10 pt-10">
                    <Breadcrumbs />

                    <header className="mb-16 mt-8">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase hover:text-white transition-colors mb-12"
                        >
                            <ArrowLeft size={14} /> Return to Journal
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-outfit font-light leading-tight mb-8 text-white">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 text-xs font-mono uppercase tracking-widest text-slate-500 border-b border-white/10 pb-8">
                            <div className="flex items-center gap-2">
                                <User size={14} />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={14} />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag size={14} />
                                <span>{post.tags.join(', ')}</span>
                            </div>
                        </div>
                    </header>

                    <div
                        className="prose prose-lg prose-invert max-w-none 
                            prose-headings:font-outfit prose-headings:font-light prose-headings:text-white 
                            prose-p:text-slate-400 prose-p:leading-relaxed prose-li:text-slate-400
                            prose-strong:text-white prose-a:text-white hover:prose-a:text-slate-300 transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <h3 className="text-3xl font-outfit font-light text-white mb-2">Architect your vision.</h3>
                            <p className="text-slate-400">
                                Partner with Spabrix to build an uncompromising digital platform.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
                        >
                            Initiate Project
                        </Link>
                    </div>

                </div>
            </article>
        </>
    );
}
