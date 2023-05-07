import React, { useCallback, useEffect, useState } from 'react'
import NavbarItem from './NavbarItem';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const TOP_OFFSET = 66;

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY >= TOP_OFFSET) return setShowBackground(true);
            setShowBackground(false);
        }
        window.addEventListener('scroll', handleScroll);

        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    const toggleMobileMenu = useCallback(()=>{
        setShowMobileMenu(current=>!current);
    }, []);

    const toggleAccountMenu = useCallback(()=>{
        setShowAccountMenu(current=>!current);
    }, [])

  return (
    <nav className='w-full z-40 fixed'>
        <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90': ''}`}>
            <img src="/images/logo.png" alt="logo" className='h-4 lg:h-7' />
            <div className='flex-row gap-7 hidden lg:flex px-6'>
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Series'} />
                <NavbarItem label={'Films'} />
                <NavbarItem label={'New & Popular'} />
                <NavbarItem label={'My List'} />
                <NavbarItem label={'Browse By Languages'} />
            </div>
            <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                <p className='text-white text-sm'>Browse</p>
                <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                <MobileMenu visible={showMobileMenu} />
            </div>

            <div className='flex flex-row gap-7 ml-auto items-center'>
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                    <BsSearch />
                </div>
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                    <BsBell />
                </div>

                <div onClick={toggleAccountMenu} className='flex flex-row gap-2 items-center relative cursor-pointer'>
                    <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                        <img src="/images/default-blue.png" alt="avatar" />
                    </div>
                    <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <AccountMenu visible={showAccountMenu} />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;