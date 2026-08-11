// Renders a small grid of reference photos for a specific device model.
// Images are fetched via scripts/genDeviceGallery.mjs and listed in data/deviceGallery.js.
// Renders nothing if no images exist for the model yet.
import Image from "next/image";
import { deviceGallery } from "@/data/deviceGallery";

export default function DeviceGallery({ brand, slug, name, heading }) {
  const images = deviceGallery[`${brand}/${slug}`] || [];
  if (images.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
        {heading || `${name} — device reference photos`}
      </h3>
      <p className="text-gray-500 text-[15px] mb-4">
        What the {name} looks like, so you know we work on your exact model.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-lg border bg-gray-50"
          >
            <Image
              src={src}
              alt={`${name} — reference photo ${i + 1}`}
              fill
              sizes="(max-width: 768px) 45vw, 22vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
