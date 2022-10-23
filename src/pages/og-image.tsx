import Error from 'next/error';
import { useRouter } from 'next/router';

function OgImage() {
  const { query } = useRouter();
  if (query.title) {
    return (
      <>
        <div
          style={{
            fontFamily: 'sans-serif',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            padding: '4rem',
            backgroundColor: '#333',
            height: '100vh',
            color: '#fff'
          }}
        >
          <h2>{query.title}</h2>
          <div style={{ position: 'relative', width: 200, height: 300 }}>
            {query.image && (
              <img
                style={{
                  maxWidth: '100%'
                }}
                src={query.image.toString()}
                alt={query.title.toString()}
              />
            )}
          </div>
        </div>
      </>
    );
  } else {
    return <Error statusCode={404} />;
  }
}

export default OgImage;
