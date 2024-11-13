const Navbar = () =>{
    return (
        <nav className="text-white bg-[#30336b]">
            <div className=" flex justify-between w-11/12 mx-auto" >
                <h1 className="font-extrabold text-3xl">Smart<span className="text-[#22a6b3]">Learn</span></h1>
            <div className="flex gap-3 text-white py-">
                <a className="hover:underline text-[#22a6b3]" href="">Home</a>
                <a className="hover:underline text-[#22a6b3]" href="">Courses</a>
                <a className="hover:underline text-[#22a6b3]" href="">Add Course</a>
            </div>
            </div>
        </nav>
    )
}
export default Navbar;