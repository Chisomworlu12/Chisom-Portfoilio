import { ImageResponse } from 'next/og';
import { hero, site } from '@/content';

// The preview card shown when the site is shared on LinkedIn, X, WhatsApp, Slack, etc.
export const alt = site.pageTitle;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#F7F7F2',
          color: '#1C1C1A',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 30, fontWeight: 700 }}>
          CW
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#008000', marginLeft: 6, marginTop: 14 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 28, color: '#2D5A4F', marginBottom: 20 }}>
            {`${site.jobTitle} • ${site.location}`}
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, marginBottom: 28 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.35, color: '#3D3D39', maxWidth: 1000 }}>{hero.tagline}</div>
        </div>
        <div style={{ display: 'flex', height: 6, width: 120, backgroundColor: '#2D5A4F' }} />
      </div>
    ),
    size,
  );
}
