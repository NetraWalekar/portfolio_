import Hero from "./component/Hero/Hero";
import Skills from "./component/Skills/Skills";
import Navbar from "./component/Navbar/Navbar";

export default function App(){
  return(
    <div className="app_container">
         <Navbar></Navbar>
        <Hero></Hero>
        <Skills></Skills>
    </div>
  )
}