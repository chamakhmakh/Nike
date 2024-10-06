import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    if (open) {
      setOpen(false);
      enablePageScroll();
    } else {
      setOpen(true);
      disablePageScroll();
    }
  }

  const handleClick = () => {
    if (!open) return;
    
    enablePageScroll();

    setOpen(false)
  }

  return (
    <header className='padding-x py-8 fixed z-10 w-full border-b-2 border-slate-gray bg-white'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img 
            src={hamburger}
            alt='hamburger icon'
            width={25} 
            height={25}
            className="cursor-pointer"
            open={open}
            onClick={openMenu}
          />
          <div className={`${open ? 'flex' : 'hidden'} fixed top-[5rem] bottom-0 right-0 left-0 bg-white`}>
            <ul className='flex items-center justify-center flex-col gap-16 flex-1'>
              {navLinks.map((item) => (
                <li key={item.label} className="">
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                    onClick={handleClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;