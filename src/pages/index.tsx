import sampleImage from '@assets/sample-image.webp';
import { ImageWrapper } from '@components/ImageWrapper';
import { useState, useEffect } from 'react';

function Home() {
  const [title, setTitle] = useState('Your title here');
  const [image, setImage] = useState(sampleImage.src);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');

  useEffect(() => {
    setGeneratedImageUrl(
      `/api/ogimage?title=${title}&width=${width}&height=${height}&image=${image}`
    );
  }, [image, title, width, height]);

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 1200,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3rem auto',
        gap: '3rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 300
        }}
      >
        <input
          placeholder="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Image url"
          type="text"
          onBlur={(e) => setImage(e.target.value)}
        />
        <input
          placeholder="Width"
          type="text"
          onChange={(e) => setWidth(Number(e.target.value))}
        />
        <input
          placeholder="Height"
          type="text"
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <a href={generatedImageUrl} download="Image generated">
          Download Image
        </a>
      </div>

      <ImageWrapper width={width} height={height} image={image} title={title} />
    </div>
  );
}

export default Home;
