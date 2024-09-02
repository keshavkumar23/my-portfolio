import {Route, Routes} from "react-router-dom";
import "./index.css";
import Home from "./routes/Home"
import Project from "./routes/Project"
import Skills from "./routes/Skills"
import About from "./routes/About"
import Contact from "./routes/Contact"
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Skills' element={<Skills/>}></Route>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
