import sampleImage from '@assets/sample-image.webp';

export default function Home() {
  const title =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet, aliquam eaque magni quas ipsam recusandae dignissimos explicabo inventore maxime quisquam. Doloribus, animi sequi? Et, consequuntur? Officia quis reprehenderit assumenda.';

  return (
    <>
      {/* Return image from API */}
      <img
        src={`/api/ogimage?title=${title}&width=800&height=400&image=${sampleImage.src}`}
        alt=""
      />
    </>
  );
}
