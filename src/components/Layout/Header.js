import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { SlClose } from "react-icons/sl";


const Header = () => {

    const [open,setOpen] = useState(false)
    return (
        <header>

            <nav className={open ? "navclass" : ""}>
                <ul>
                    <li onClick={() => setOpen(false)} >
                        <Link to="/" >Home</Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className={open ? "open_close_new" : "open_close open_close"}>
                { open ? <SlClose onClick={() => setOpen(false)} /> :  <GiHamburgerMenu onClick={() => setOpen(true)} />  }
                
                
            </div>
            

        </header>
    )
}

export default Header
