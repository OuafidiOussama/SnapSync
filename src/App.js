import { AddFrom } from "./components/AddFrom";
import { PostContainer } from "./components/PostContainer";

function App() {
  return (
    <div className="App">
      <div className="relative px-20 py-10">
        <div className="my-5 bg-white shadow-2xl py-3 rounded-2xl ">
          <h1 className='text-center text-5xl text-blue-500'>SnapSync</h1>
        </div>
        <AddFrom />
        <PostContainer/>
      </div>
    </div>
  );
}

export default App;
