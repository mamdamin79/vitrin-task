import Link from "next/Link";
import Head from "next/Head";

const Navbar = () => {
    return (
        <div className="px-4">
            <Head>
                <title>users information app</title>
                <meta name="description" content="this is vitrin task"/>
            </Head>
            <nav className="bg-white shadow-md rounded-md font-medium flex justify-between items-center">
                <Link href="/" >
                    <a className="p-2 text-slate-700 hover:text-slate-900 transition-all duration-300">Home</a>
                </Link>
                <Link href="/posts">
                    <a  className="p-2 text-slate-700 hover:text-slate-900 transition-all duration-300">Posts</a>
                </Link>
            </nav>
        </div>
    );
}
 
export default Navbar;