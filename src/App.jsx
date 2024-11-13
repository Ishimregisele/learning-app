import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solar from "./components/Solar";


const App = () =>{
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="font-bold text-2xl">
    <Solar text="Solar Panels"/>
    </div>
    </>
  )
}

export default App;