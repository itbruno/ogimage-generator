import { ImageResponse } from '@vercel/og';
import { ImageWrapperProps, OgImageWrapper } from '@components/OgImageWrapper';
import { NextRequest } from 'next/server';
import { NextApiResponse } from 'next';

export const config = {
  runtime: 'experimental-edge'
};

export default async function ogimage(req: NextRequest, res: NextApiResponse) {
  const defaultParams: ImageWrapperProps = {
    title: '',
    image: '',
    width: 800,
    height: 600
  };

  let PARAMS: any = {};

  req.nextUrl.searchParams.forEach((val, key) => {
    return val !== ''
      ? (PARAMS[key] = val)
      : defaultParams[key as keyof typeof defaultParams];
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
