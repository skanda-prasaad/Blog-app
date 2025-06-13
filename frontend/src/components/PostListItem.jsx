import { Link } from "react-router-dom";
import Image from "./Image";

export default function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <span>Written by</span>
          <Link className="text-blue-500">Skanda</Link>
          <span>on</span>
          <Link className="text-blue-500">Web design</Link>
          <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita officia saepe error!</p>
        <Link to="/test" className="underline text-blue-500 text-sm">Read more</Link>
      </div>
    </div>
  );
}
