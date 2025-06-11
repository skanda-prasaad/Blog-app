import { Link } from "react-router-dom";
import Image from "./Image";

export default function FeaturedPost() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-3">
        <Image src="featured1.jpeg" classname="rounded-3xl object-cover" />
        <div className="flex items-center gap-4">
          <h1>01.</h1>
          <Link className="text-blue-600 lg:text-lg">web design</Link>
          <span className="text-gray-400">2 days ago</span>
        </div>
        <Link
          to="/test"
          className="text-xl lg:font-bold lg:text-3xl font-semibold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Second Post */}
        <div className="flex gap-4 justify-between lg:h-1/3">
          <Image
            src="featured2.jpeg"
            alt="Featured"
            className="w-1/3 rounded-3xl object-cover aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4 text-gray-600">
              <span className="font-semibold">02.</span>
              <Link to="/category/web-design" className="text-blue-700">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* Additional post slots */}
        <div className="flex gap-4 justify-between lg:h-1/3">
          <Image
            src="featured3.jpeg"
            alt="Featured"
            className="w-1/3 rounded-3xl object-cover aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4 text-gray-600">
              <span className="font-semibold">03.</span>
              <Link to="/category/web-design" className="text-blue-700">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        <div className="flex gap-4 justify-between lg:h-1/3">
          <Image
            src="featured4.jpeg"
            alt="Featured"
            className="w-1/3 rounded-3xl object-cover aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4 text-gray-600">
              <span className="font-semibold">04.</span>
              <Link to="/category/web-design" className="text-blue-700">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
