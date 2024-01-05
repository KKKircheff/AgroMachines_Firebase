import {defineConfig, loadEnv, splitVendorChunkPlugin} from 'vite';
import Sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react';

export default defineConfig(({command, mode}) => {
    const paths = ['home', 'offers', 'gallery', 'contact'];
    const dynamicRoutes = [
        // ...paths.map((path) => `/gallery/${path}`),
        // ...paths.map((path) => `/bg/${path}`),
        // ...paths.map((path) => `/nl/${path}`),
    ];

    return {
        plugins: [
            splitVendorChunkPlugin(),
            react(),
            Sitemap({
                // dynamicRoutes,
                hostname: 'https://agro-machines.nl',
                readable: true,
                robots: [
                    {
                        userAgent: '*',
                        allow: '/',
                    },
                ],
            }),
        ],
        build: {
            minify: 'terser',
            sourcemap: true,
            manifest: true,

            rollupOptions: {
                output: {
                    manualChunks(id: string) {
                        // creating a chunk to @open-ish deps. Reducing the vendor chunk size
                        if (id.includes('@open-ish') || id.includes('tslib')) {
                            return '@open-ish';
                        }
                        // creating a chunk to react routes deps. Reducing the vendor chunk size
                        if (
                            id.includes('react-router-dom') ||
                            id.includes('@remix-run') ||
                            id.includes('react-router')
                        ) {
                            return '@react-router';
                        }
                    },
                },
            },
        },
    };
});
