import { useState } from "react";
import { NavLink } from "react-router-dom"
import logo from "/logo.jpg"

const HAMBURGUER: string = "https://icongr.am/clarity/bars.svg?size=35&color=currentColor";
const CLOSE: string = "https://icongr.am/clarity/close.svg?size=35&color=currentColor";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="container flex items-center justify-between px-3 py-2 md:p-5 md:px-0">
      <div>
        <NavLink to="/"><img src={logo} alt="logo" className="w-16 rounded-md md:w-20" /></NavLink>
      </div>


      <ul className="hidden gap-5 font-semibold capitalize sm:flex">
        <NavLink to="/habitaciones">habitaciones</NavLink>
        <NavLink to="/about">sobre nosotros</NavLink>
        <NavLink to="/contacto">contáctanos</NavLink>
      </ul>

      <div className={`sm:hidden flex flex-1 justify-end`}>
        <img
          src={toggle ? CLOSE : HAMBURGUER}
          alt="menu"
          className="cursor-pointer md:hidden"
          onClick={() => setToggle(prev => !prev)}
        />
        <div>
          <ul className={`${toggle ? 'flex' : 'hidden'} shadow-2xl flex-col gap-5 capitalize font-semibold absolute top-20 right-0  p-5 h-80 bg-white`}>
            <NavLink to="/habitaciones">habitaciones</NavLink>
            <NavLink to="/about">sobre nosotros</NavLink>
            <NavLink to="/contacto">contáctanos</NavLink>
          </ul>
        </div>
      </div>

    </div >
  )
}

export default Navbar