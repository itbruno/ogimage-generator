import Head from 'next/head';
import { useState, useEffect } from 'react';

function Home() {
  const themes = ['blog', 'default'];

  const [title, setTitle] = useState('Your title here');
  const [image, setImage] = useState('');
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(600);
  const [selectedTheme, setTheme] = useState(themes[0]);
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');


  const [params, setParams] = useState({ title, image, width, height, theme: selectedTheme });

  useEffect(() => {
    setGeneratedImageUrl(
      `${window.location.origin}/api/ogimage?title=${title}&width=${width}&height=${height}&image=${image}&theme=${selectedTheme}`
    );
    setParams({ title, image, width, height, theme: selectedTheme });
  }, [image, title, width, height, selectedTheme]);

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
          width: '100%',
          flexShrink: 0,
          justifyContent: 'space-between',
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
            onChange={(e) => setHeight((e.target.value && Number(e.target.value) > 700) ? Number(e.target.value) : 800)}
          />
          <input
            placeholder="Height"
            type="text"
            onChange={(e) => setHeight((e.target.value && Number(e.target.value) > 100) ? Number(e.target.value) : 600)}
          />

          <select onChange={(e) => setTheme(e.target.value)} name="theme" id="theme">
            {themes?.map((theme) => (
              <option key={theme} id={theme}>{theme}</option>
            ))}
          </select>
          <a href={generatedImageUrl} download="Image generated">
            Download Image
          </a>
        </div>

        <div style={{
          background: '#eee'
        }}>
        <img src={generatedImageUrl} style={{
          border: '1px solid #eee',
          borderRadius: '8px',
          width: width,
          maxWidth: '100%',
          objectFit: 'contain',
          height,
        }} />
        </div>
      </div>
    </>
  );
}

export default Home;
