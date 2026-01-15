import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Spabrix Digital Agency',
        short_name: 'Spabrix',
        description: 'Best Web Design & Digital Marketing Agency in Malappuram, Kerala',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        icons: [
            {
                src: '/spabrix-logo-new.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/spabrix-logo-new.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
