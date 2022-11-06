import Head from 'next/head';
import { OgImageWrapper } from '@components/OgImageWrapper';
import { useState, useEffect } from 'react';

function Home() {
  const [title, setTitle] = useState('Your title here');
  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1667611209964-3e1ff3394a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80.png'
  );
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');

  useEffect(() => {
    setGeneratedImageUrl(
      `${window.location.origin}/api/ogimage?title=${title}&width=${width}&height=${height}&image=${image}`
    );
  }, [image, title, width, height]);

  return (
    <>
      <Head>
        <meta property="og:image" content={generatedImageUrl} />
        <meta property="og:title" content={title} />
      </Head>

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

        <OgImageWrapper
          width={width}
          height={height}
          image={image}
          title={title}
        />
      </div>
    </>
  );
}

export default Home;
