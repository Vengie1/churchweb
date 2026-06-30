import Image from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const images: GalleryItem[] = [
  { id: 1, src: "/images/21 days.png", alt: "Image 5" },
  { id: 1, src: "/images/bts1.jpeg", alt: "Image 1" },
  { id: 2, src: "/images/bts2.jpeg", alt: "Image 2" },
  { id: 3, src: "/images/bts3.jpeg", alt: "Image 3" },
  { id: 4, src: "/images/bts5.jpeg", alt: "Image 4" },
  {id: 3, src: "/images/bts6.jpeg", alt: "Image 3" },
  { id: 4, src: "/images/bts8.jpeg", alt: "Image 4" },

];

export default function Gallery() {
  return (
    <section className="w-full px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md bg-gray-100"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
              priority={img.id === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}