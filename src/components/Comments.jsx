import Comment from "./Comment"

export default function Comments(){
    return (
        <div className="flex flex-col gap-6 lg:w-3/5">
            <h1 className="underline text-xl text-gray-600">Comments</h1>
            <div className="flex items-center justify-between gap-6 w-full">
                <textarea className="bg-white px-2 py-1 w-full gap-4 rounded-xl" placeholder="write comment ..." />
                <button className="text-white font-medium rounded-2xl bg-blue-700 px-4 py-3">Send</button>
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}