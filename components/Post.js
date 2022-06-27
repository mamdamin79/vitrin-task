import Link from "next/link";

const Post = ({postInfo}) => {
    return (
        <article className="bg-white shadow-md rounded-md p-2 flex flex-col justify-between gap-y-6">
            <h1 className="text-center font-medium text-slate-800">{postInfo.title}</h1>
            <div className="flex justify-between items-center">
                <Link href={`/posts/${postInfo.id}`}>
                    <a className="font-medium text-gray-600 hover:text-gray-800 transition-all duration-300">details</a>
                </Link>
                <span className="font-medium text-gray-600">date</span>
            </div>
        </article>
    );
}
 
export default Post;