import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { NextApiResponse } from 'next';
import { BlogTheme, DefaultTheme } from '@themes/index';
import { ReactElement } from 'react';

export const config = {
  runtime: 'experimental-edge'
};

export default async function ogimage(req: NextRequest, res: NextApiResponse) {
  let PARAMS: any = {};
  let selectedTheme: ReactElement;

  // Add all dynamic url params to PARAMS
  req.nextUrl.searchParams.forEach((val, key) => {
    return !!val ? (PARAMS[key] = val) : null;
  });

  // Switch OG Image style by themes created
  switch (PARAMS.theme) {
    case 'blog':
      selectedTheme = <BlogTheme params={PARAMS} />;
      break;
    default:
      selectedTheme = <DefaultTheme params={PARAMS} />;
      break;
  }

  try {
    return new ImageResponse(selectedTheme, {
      width: PARAMS.width,
      height: PARAMS.height
    });
  } catch {
    res.status(500).send('Server error');
  }
}
