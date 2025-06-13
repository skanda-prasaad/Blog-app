import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

export default function WritePage() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="p-6 text-lg text-gray-600">Loading...</div>;
  }

  if (!isSignedIn) {
    return <div className="p-6 text-lg text-red-600">You should login</div>;
  }

  return (
    <div className="min-h-screen bg-[#f1f2ff] p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Create a New Post
        </h1>

        <form className="flex flex-col gap-5">
          {/* Cover image button */}
          <button
            type="button"
            className="px-4 py-2 shadow-md rounded-xl text-sm text-gray-700 bg-white border border-gray-200 hover:bg-gray-100 w-max"
          >
            Add cover image
          </button>

          {/* Title input */}
          <input
            type="text"
            placeholder="My Awesome Story"
            className="text-3xl font-bold bg-white outline-none border border-gray-200 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200"
          />

          {/* Category dropdown */}
          <div className="flex items-center gap-3">
            <label htmlFor="cat" className="text-sm font-medium text-gray-700">
              Choose a category:
            </label>
            <select
              name="cat"
              id="cat"
              className="p-2 rounded-xl bg-white border border-gray-200 shadow-sm"
            >
              <option value="general">General</option>
              <option value="web-design">Web Design</option>
              <option value="development">Development</option>
              <option value="databases">Databases</option>
              <option value="seo">Search Engines</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          {/* Short description */}
          <textarea
            name="desc"
            placeholder="A short description"
            className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm min-h-[100px] resize-none"
          />

          {/* Rich text editor */}
          <ReactQuill
            theme="snow"
            className="min-h-[300px] rounded-xl bg-white shadow-sm"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-700 text-white font-medium rounded-xl mt-3 px-6 py-2 w-max hover:bg-blue-800 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
