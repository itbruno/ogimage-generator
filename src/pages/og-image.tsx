import Error from 'next/error';
import { ImageWrapper } from '@components/OgImageWrapper';
import { useRouter } from 'next/router';

interface OgImageProps {
  query: {
    title?: string;
    image?: string;
  };
}

function OgImage() {
  const { query }: OgImageProps = useRouter();

  query.title && <ImageWrapper title={query.title} image={query.image} />;
  return <Error statusCode={404} />;
}

export default OgImage;
