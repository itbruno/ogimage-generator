import { ImageResponse } from '@vercel/og';
import { OgImageWrapper } from '@components/OgImageWrapper';
import { NextRequest } from 'next/server';
import { NextApiResponse } from 'next';

export const config = {
  runtime: 'experimental-edge'
};

interface ScreenshotProps {
  title?: string;
  image?: string;
  width?: number;
  height?: number;
}

export default async function ogimage(req: NextRequest, res: NextApiResponse) {
  const defaultParams: ScreenshotProps = {
    title: '',
    image: '',
    width: 800,
    height: 600
  };

  let PARAMS: any = {};

  req.nextUrl.searchParams.forEach((val, key) => {
    return val !== ''
      ? (PARAMS[key] = val)
      : (PARAMS[key] = defaultParams[key]);
  });

  try {
    return new ImageResponse(
      (
        <OgImageWrapper
          width={PARAMS.width}
          height={PARAMS.height}
          image={PARAMS.image}
          title={PARAMS.title}
        />
      ),
      {
        width: PARAMS.width,
        height: PARAMS.height
      }
    );
  } catch {
    res.status(404).send('Route not found');
  }
}
