import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';

// iOS home-screen icon (Apple needs a PNG, so this renders public/chisom-icon.svg onto a square tile).
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const svg = await readFile(path.join(process.cwd(), 'public', 'chisom-icon.svg'));
  const src = `data:image/svg+xml;base64,${svg.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F7F7F2',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={136} height={42} alt="" />
      </div>
    ),
    size,
  );
}
