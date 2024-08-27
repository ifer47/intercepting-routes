import Image from "next/image";
import { photos } from "../../data";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = photos.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto text-gray-500">
      <Image
        className="block w-1/4 mx-auto mt-10 rounded-lg"
        src={photo.src}
        alt={photo.alt}
        width={300}
        height={300}
      />
      <div className="leading-loose border-2 border-dashed p-5 mt-5 rounded-lg border-gray-500">
        <p><strong className="font-bold">Title:</strong> {photo.alt}</p>
        <p><strong className="font-bold">Price:</strong> {photo.price}</p>
        <p>
          <strong className="font-bold">Desc:</strong> Ut non occaecat incididunt laboris. Aliquip laboris anim dolore
          in officia id commodo nostrud non adipisicing. Elit consectetur dolor
          deserunt Lorem mollit qui irure tempor. Id aute nostrud laborum
          pariatur incididunt duis ea. Culpa excepteur consectetur proident
          mollit esse excepteur in ad eiusmod dolor do amet tempor.Irure sunt
          aute aliquip fugiat consectetur consequat cillum ad esse in aute ipsum
          veniam. Dolor ut aute sit qui qui ipsum et adipisicing ex consectetur
          ullamco nulla. Elit magna et ex ipsum elit non ad ex culpa nostrud
          quis est.
        </p>
      </div>

      <div className="mt-8">下面也可以像 unsplash.com 一样，再放一些其他图片，供用户继续浏览 ...</div>
    </div>
  );
}
