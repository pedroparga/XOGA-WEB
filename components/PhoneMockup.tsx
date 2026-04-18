import Image from "next/image";

export default function PhoneMockup({
  image,
  className,
  priority = false
}: {
  image: { src: string; alt: string };
  className: string;
  priority?: boolean;
}) {
  return (
    <div className={`iphone-mockup ${className}`}>
      <div className="iphone-body">
        <div className="iphone-notch" />
        <div className="iphone-speaker" />
        <div className="iphone-screen">
          <div className="iphone-content">
            <Image
              alt={image.alt}
              className="app-image"
              fill
              priority={priority}
              sizes="(max-width: 768px) 260px, 320px"
              src={image.src}
            />
          </div>
        </div>
        <div className="iphone-home-button" />
      </div>
    </div>
  );
}
