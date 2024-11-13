import Name from "./Name";

const Hero = () =>{
    return(

        <section className="text-gray-200 border-t-2 border-gray-300 py-10 bg-[#30336b]">
            <div className="  text-center w-11/12 mx-auto">
            <h2 className="text-xl font-semibold mb-4">Take your skills to the next level</h2>
            <p>Choose the right course to make your dream come true</p>
            </div>
            <hr/>
            <div className="bg-pink-400  grid grid-cols-3 flex justify-around">
            <Name name="Gisele"/>
            <Name name="jesca"/>
            <Name name="jolly"/>
            </div>
        </section>
    )
}
export default Hero;