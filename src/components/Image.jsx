export default function Image({ image, alt, className, lazy }) {
  return <img src={image} alt={alt} className={className} lazy={lazy} />;
}
