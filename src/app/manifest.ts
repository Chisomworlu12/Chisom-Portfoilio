import type { MetadataRoute } from 'next';
import { site } from '@/content';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.pageTitle,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'browser',
    background_color: '#F7F7F2',
    theme_color: '#F7F7F2',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
