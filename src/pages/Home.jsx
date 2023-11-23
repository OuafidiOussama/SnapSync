import { AddFrom } from "../components/AddFrom";
import { PostContainer } from "../components/PostContainer";
import Navbar from "../components/partials/Navbar";

function Home() {
    return(
    <div className="relative px-20 py-10">
        <Navbar />
        <AddFrom />
        <PostContainer/>
    </div>
    ) 
}

export default Home