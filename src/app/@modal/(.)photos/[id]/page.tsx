"use client";
import Image from "next/image";
import { photos } from "../../../data";
import { useRouter } from "next/navigation";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = photos.find((p) => p.id === id)!;
  const router = useRouter();
  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-slate-300/[.8]"
      onClick={router.back}
    >
      <Image
        className="rounded-lg shadow-lg"
        src={photo.src}
        alt={photo.alt}
        width={400}
        height={400}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
