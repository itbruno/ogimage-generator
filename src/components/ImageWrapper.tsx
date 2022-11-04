import Image from 'next/image';

interface ImageWrapperProps {
  title: string;
  image?: string;
  width?: number;
  height?: number;
}

function ImageWrapper({ title, image, width, height }: ImageWrapperProps) {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        padding: '4rem',
        backgroundColor: '#333',
        color: '#fff',
        width: width || 800,
        height: height || 600,
        boxSizing: 'border-box'
      }}
    >
      <h2>{title}</h2>
      <div style={{ position: 'relative', width: 200, height: 300 }}>
        {!!image && <Image fill={true} src={image} alt={title} />}
      </div>
    </div>
  );
}

export { ImageWrapper };
