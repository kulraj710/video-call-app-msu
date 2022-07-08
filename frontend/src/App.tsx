import {BrowserRouter, Routes, Route} from "react-router-dom";
import  HomePage from "./components/homepage/HomePage";
import Video from "./components/video/Video";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<Video />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
