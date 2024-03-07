import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

import { useContext, useDebugValue } from 'react';
import { MainContext } from '../context';
import { Avatar, Button, IconButton } from '@mui/material';
import ligma from '../resources/ligma.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { deepOrange } from '@mui/material/colors';

const Navbar = () => {
    const { menuOpen, openMenu, setMenuOpen, cartItem, matches, user } = useContext(MainContext)

    return (
        <div className='bg-white absolute top-0 w-screen z-20 border-b-1 border-gray-200'>
            <div className='nav container m-auto'>
                <div className='w-full flex justify-between items-center'>
                    <div >
                        <Link to='/'>
                            <img className='ligma' src={ligma} alt="" />
                        </Link>
                    </div>


                    <div className={`gay absolute top-0 ${menuOpen ? 'right-2/4' : 'right-full'} border-2 border-black md:border-none md:static flex flex-col z-30 bg-white md:flex-row w-2/4 md:w-5/12 md:h-full justify-between`}>
                        <NavLink className='gay py-6  pl-4 md:p-0' to='/'>Home</NavLink>
                        <NavLink className='gay py-6 border-t-2 border-slate-200 md:border-none pl-4 md:p-0' to='/watches'>Watches</NavLink>
                        <NavLink className='gay py-6 border-t-2 border-slate-200 md:border-none pl-4 md:p-0' to='/glasses'>Glasses</NavLink>
                        <NavLink className='gay py-6 border-t-2 border-slate-200 md:border-none pl-4 md:p-0' to='/userpage'><Avatar sx={{height:25, width:25, bgcolor: user!== null && deepOrange[500], fontSize:16}}></Avatar></NavLink>
                    </div>

                    <div className='flex items-center'>
                    <NavLink className='mr-8 gay py-6 pl-4 md:p-0 relative' to='/cart'><ShoppingCartIcon fontSize={matches ? 'medium' : 'small'}></ShoppingCartIcon><p className='text-center absolute left-6 md:left-2/4 bottom-2/4 border-2 h-7 w-7 rounded-full'>{cartItem.length}</p></NavLink>
                        <div onClick={openMenu} className={menuOpen ? 'hidden' : 'block md:hidden ml-6 mr-4'}>
                            <MenuIcon fontSize={matches ? 'large' : 'medium'}></MenuIcon>
                        </div>

                        <div className={menuOpen ? 'block md:hidden mr-4' : 'hidden'}>
                            <IconButton onClick={() => setMenuOpen(false)}><p className='font-bold text-2xl'>x</p></IconButton>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;