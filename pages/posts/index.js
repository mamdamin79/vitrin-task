import axios from "axios";
import Post from "../../components/Post"
const Posts = (props) => {
    console.log(props)
    return (
        <div className="bg-gray-100">
            <h1 className="font-bold text-slate-800 text-center text-lg my-4">Articles</h1>
            <div className="grid grid-cols-1 w-full md:grid-cols-2 px-4 gap-2 lg:grid-cols-3">
               {
                props.posts.map((post) => <Post postInfo={post} key={post.id}/>)
               }
            </div>

        </div>
    );
}
 
export default Posts;



export async function getStaticProps() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")

    return {
      props: {
        posts : data
      }, // will be passed to the page component as props
    }
  }