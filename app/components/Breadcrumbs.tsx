'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Breadcrumbs() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter((segment) => segment);

    const breadcrumbList = [
        { name: 'Home', href: '/' },
        ...pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
            return { name, href };
        }),
    ];

    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <motion.ol
                className="flex items-center space-x-2 text-sm text-slate-500"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                {breadcrumbList.map((item, index) => {
                    const isLast = index === breadcrumbList.length - 1;

                    return (
                        <li key={item.href} className="flex items-center">
                            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />}
                            {isLast ? (
                                <span className="text-brand font-bold" aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="hover:text-brand transition-colors flex items-center gap-1 font-medium"
                                >
                                    {item.name === 'Home' && <Home className="w-4 h-4" />}
                                    <span className={item.name === 'Home' ? 'sr-only md:not-sr-only' : ''}>
                                        {item.name}
                                    </span>
                                </Link>
                            )}
                        </li>
                    );
                })}
            </motion.ol>

            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: breadcrumbList.map((item, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            name: item.name,
                            item: `https://spabrix.in${item.href}`,
                        })),
                    }),
                }}
            />
        </nav>
    );
}
