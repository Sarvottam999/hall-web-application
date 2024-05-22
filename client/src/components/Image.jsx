export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    : 'http://localhost:4000/uploads/'+src;
  return (
    <img {...rest}  className=" w-full" src={src} alt={''} />
  );
}