interface ImageWrapperProps {
  title: string;
  image?: string;
  width?: number;
  height?: number;
}

function OgImageWrapper({ title, image, width, height }: ImageWrapperProps) {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '5rem',
        backgroundColor: '#e1ecf4',
        color: '#0b0810',
        width: width || 800,
        height: height || 600,
        boxSizing: 'border-box'
      }}
    >
      {!!image && <img src={image} alt={title} />}
      <div
        style={{
          fontSize: '45px',
          marginTop: '2rem'
        }}
      >
        {title}
      </div>
    </div>
  );
}

export { OgImageWrapper };
