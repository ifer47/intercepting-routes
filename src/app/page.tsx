import Link from "next/link";
import { photos } from "./data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-3xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {photos.map(({ id, src, alt }) => (
            <Link href={`/photos/${id}`} className="group" key={id}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={src}
                  alt={alt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
