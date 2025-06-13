import { IKImage } from "imagekitio-react";

export default function Image({className, src, alt, h , w}) {
  return <IKImage 
    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
    path={src}
    className={className}
    alt={alt}
    loading="lazy"
    lqip={{active : true, quality: 20}}
    width={w}
    height={h}
  />;
}
