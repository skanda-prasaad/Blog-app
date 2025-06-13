import Search from "./Search"
import { Link } from "react-router-dom"
export default function Sidemenu(){
    return (
        <div className="px-4 h-max sticky top-8">
            <h1 className="mb-3 text-sm font-medium">Search</h1>
            <Search />
            <h1 className="mt-6 mb-3 text-sm font-medium">Filter</h1>
            <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="newest" className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-600 cursor-pointer rounded-sm checked:bg-blue-600"/>
                    Newest
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="most-popular" className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-600 cursor-pointer rounded-sm checked:bg-blue-600"/>
                    Most Popular
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="trending" className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-600 cursor-pointer rounded-sm checked:bg-blue-600"/>
                    Trending
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="oldest" className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-600 cursor-pointer rounded-sm checked:bg-blue-600"/>
                    Oldest
                </label>
            </div>
            <h1 className="mt-6 mb-3 text-sm font-medium">categories</h1>
            <div className="flex flex-col gap-2  text-sm">
                <Link className="underline" to="/posts">All</Link>
                <Link className="underline" to="/posts?cat=web-design">Web design</Link>
                <Link className="underline" to="/posts?cat=web-design">Development</Link>
                <Link className="underline" to="/posts?cat=databases">Databases</Link>
                <Link className="underline" to="/posts?cat=seo">Search Engine</Link>
                <Link className="underline" to="/posts?cat=marketing">Marketing</Link>
            </div>
        </div>
    )
}