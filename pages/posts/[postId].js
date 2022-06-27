import axios from "axios";
const Post = (props) => {
    console.log(props)
    return (
        <div className="flex justify-center items-center bg-gray-100 w-full h-screen">
            <div className="bg-white shadow-md rounded-md w-2/3 mx-auto p-2">
                <h1 className="text-slate-800 font-bold text-center mb-6 ">{props.data.title}</h1>
                <p className="text-gray-600 font-medium mx-auto text-center">{props.data.body}</p>
            </div>
        </div>
    );
}
 
export default Post;


export async function getStaticPaths() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    const paths = data.map(post =>{
        return {
            params: { postId : `${post.id}`}
        }
    })
    return {
      paths: paths,
      fallback: false // false or 'blocking'
    };
}


export async function getStaticProps(context) {
    const { params } = context;
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
}