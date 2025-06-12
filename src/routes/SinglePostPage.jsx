import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

export default function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8 mt-4">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-3xl 2xl:text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.
          </h1>
          <div className="flex  items-center gap-2 text-gray-500 tet-sm">
            <span>Written by</span>
            <Link className="text-blue-500">Shane watson</Link>
            <span>on</span>
            <Link className="text-blue-500">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            culpa, molestiae tenetur earum eum harum natus alias molestias
            quisquam eius!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex lg:text-lg flex-col gap-6 text-justify ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            neque error in voluptatibus delectus praesentium ducimus atque
            recusandae expedita odit. Quo, quisquam. Ipsam cum molestiae, magni,
            quo placeat temporibus accusamus vitae natus sit ducimus architecto
            facere repudiandae necessitatibus est a sint totam sequi et dicta
            ratione ab aliquam nihil. Dolores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam, asperiores. Id aut fuga ipsum
            minima debitis, iusto qui maiores et, eligendi corrupti similique
            odit a, iste eos corporis cupiditate exercitationem voluptatibus
            accusamus! Pariatur sint rem quibusdam consequatur facilis?
            Reprehenderit totam, rerum consequuntur optio accusamus laudantium
            architecto laborum alias deserunt perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            neque error in voluptatibus delectus praesentium ducimus atque
            recusandae expedita odit. Quo, quisquam. Ipsam cum molestiae, magni,
            quo placeat temporibus accusamus vitae natus sit ducimus architecto
            facere repudiandae necessitatibus est a sint totam sequi et dicta
            ratione ab aliquam nihil. Dolores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam, asperiores. Id aut fuga ipsum
            minima debitis, iusto qui maiores et, eligendi corrupti similique
            odit a, iste eos corporis cupiditate exercitationem voluptatibus
            accusamus! Pariatur sint rem quibusdam consequatur facilis?
            Reprehenderit totam, rerum consequuntur optio accusamus laudantium
            architecto laborum alias deserunt perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            neque error in voluptatibus delectus praesentium ducimus atque
            recusandae expedita odit. Quo, quisquam. Ipsam cum molestiae, magni,
            quo placeat temporibus accusamus vitae natus sit ducimus architecto
            facere repudiandae necessitatibus est a sint totam sequi et dicta
            ratione ab aliquam nihil. Dolores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam, asperiores. Id aut fuga ipsum
            minima debitis, iusto qui maiores et, eligendi corrupti similique
            odit a, iste eos corporis cupiditate exercitationem voluptatibus
            accusamus! Pariatur sint rem quibusdam consequatur facilis?
            Reprehenderit totam, rerum consequuntur optio accusamus laudantium
            architecto laborum alias deserunt perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            neque error in voluptatibus delectus praesentium ducimus atque
            recusandae expedita odit. Quo, quisquam. Ipsam cum molestiae, magni,
            quo placeat temporibus accusamus vitae natus sit ducimus architecto
            facere repudiandae necessitatibus est a sint totam sequi et dicta
            ratione ab aliquam nihil. Dolores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam, asperiores. Id aut fuga ipsum
            minima debitis, iusto qui maiores et, eligendi corrupti similique
            odit a, iste eos corporis cupiditate exercitationem voluptatibus
            accusamus! Pariatur sint rem quibusdam consequatur facilis?
            Reprehenderit totam, rerum consequuntur optio accusamus laudantium
            architecto laborum alias deserunt perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            neque error in voluptatibus delectus praesentium ducimus atque
            recusandae expedita odit. Quo, quisquam. Ipsam cum molestiae, magni,
            quo placeat temporibus accusamus vitae natus sit ducimus architecto
            facere repudiandae necessitatibus est a sint totam sequi et dicta
            ratione ab aliquam nihil. Dolores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam, asperiores. Id aut fuga ipsum
            minima debitis, iusto qui maiores et, eligendi corrupti similique
            odit a, iste eos corporis cupiditate exercitationem voluptatibus
            accusamus! Pariatur sint rem quibusdam consequatur facilis?
            Reprehenderit totam, rerum consequuntur optio accusamus laudantium
            architecto laborum alias deserunt perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            neque error in voluptatibus delectus praesentium ducimus atque
            recusandae expedita odit. Quo, quisquam. Ipsam cum molestiae, magni,
            quo placeat temporibus accusamus vitae natus sit ducimus architecto
            facere repudiandae necessitatibus est a sint totam sequi et dicta
            ratione ab aliquam nihil. Dolores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam, asperiores. Id aut fuga ipsum
            minima debitis, iusto qui maiores et, eligendi corrupti similique
            odit a, iste eos corporis cupiditate exercitationem voluptatibus
            accusamus! Pariatur sint rem quibusdam consequatur facilis?
            Reprehenderit totam, rerum consequuntur optio accusamus laudantium
            architecto laborum alias deserunt perferendis.
          </p>
        </div>
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-3 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-7">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-600">Shane watson</Link>
            </div>
            <p className="tex-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-7 mb-3 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engine
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-7 mb-3 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
}
