import PostlistItem from "./PostListItem";

export default function Postlist(){
    return (
        <div className="flex flex-col gap-12 mb-8">
            <PostlistItem />
            <PostlistItem />
            <PostlistItem />
            <PostlistItem />
            <PostlistItem />
        </div>
    )
}