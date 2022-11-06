import { NextApiRequest, NextApiResponse } from 'next';
import screenshot from '@lib/screenshot';

interface ScreenshotProps {
  title?: string;
  image?: string;
  width?: number | null;
  height?: number | null;
}

export default async function ogimage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, image, width, height }: ScreenshotProps = req.query;

  const imageEncoded = encodeURIComponent(String(image));

  try {
    // TO-DO: Change this hardcoded url
    const url = `http://localhost:3000/og-image?title=${title ?? ''}&image=${
      imageEncoded ?? ''
    }`;

    const file = await screenshot(
      url,
      Number(width ?? 1200),
      Number(height ?? 600)
    );

    res.setHeader('Content-Type', 'image/png');
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.statusCode = 200;
    res.end(file);
  } catch {
    res.status(404).send('Route not found');
  }
}
