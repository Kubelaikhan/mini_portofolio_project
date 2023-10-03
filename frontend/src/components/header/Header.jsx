import {useEffect, useRef} from "react";
import {NavLink, Link} from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';


const navLinks =[
    {
        path:'/',
        display: 'Home'
    },
    {
        path:'/About',
        display: 'About'
    },
    {
        path:'/Services',
        display: 'Services'
    }, 
    {
        path:'/Skills',
        display: 'Skills'
    }, 
    {
        path:'/Blog',
        display: 'Blog'
    },
]

const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = () => {
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop> 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
        handleStickyHeader()

        return() => window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
    return (
    
    <header className="header flex items-center" ref={headerRef}>
        <div className="container">
            <div className="flex items-center justify-between">
                {/* ============== NAMA ============== */}
                <div>
                    <h2 className="font-[700] ml-5 pl-6">krish<span className="color-red font-[700]">4lex</span></h2>
                </div>

                {/* ============== MENU ============== */}
                <div className="navigation pt-4 mt-5 pr-4" ref={menuRef} onClick={toggleMenu}>     
                    <ul className="menu flex items-center gap-[2.7rem] ">
                        {
                            navLinks.map((link, index) => <li key={index}>
                                <NavLink to={link.path} className={navClass=> navClass.isActive ?
                                    'text-black text-[16px] leading-7 font-[600]  hover:text-red-500' : 
                                    'text-textColor text-[16px] leading-7 font-[600] hover:text-red-500'} >
                                    {link.display}
                                </NavLink>
                            </li>
                            )
                        }
                    </ul>
                </div>

                <span className="md:hidden" onClick={toggleMenu}>
                    <BiMenu className="w-6 h-6 cursor-pointer" />
                </span>
            </div>
        </div>
    </header>

    );
}

export default Header