import './App.css';

// import Posts from './posts/PostList';
// import ReactMarkdownExample from './posts/ReactMarkdown';
import PostsList from './posts/PostSorting';
import AppRoutingExample from './components/AppRouting';
// import Timer from './components/Timer';
import ImgDropCrop from './components/ImgDropCrop';

function App() {
  const md = `Just a link: [here](https://reactjs.com). <br/> <p>Hello world </p>`
  return (
    <div className="App">
      <AppRoutingExample />
      <ImgDropCrop />
      {/* <Timer startCount={5} /> */}
      {/* <PostsList /> */}
      {/* <Posts /> */}
      {/* <ReactMarkdownExample markdown={md} /> */}
    </div>
  );
}

export default App;
