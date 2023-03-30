import React from 'react';
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className='w-full flex fixed z-20 justify-between p-4 border-b border-black-900 bg-white'>
            <button>
                <Link to={"/"}>
                    <div className='flex flex-row cursor-default'>
                        <img className='h-10 w-10 mr-2 cursor-default' src="https://www.transparentpng.com/thumb/dog/dog-amazing-image-download-27.png" alt="dog amazing image download 27 @transparentpng.com" />
                        <h1 className='text-3xl font-bold font-cursive pr-4 cursor-default'>PetSpot</h1>
                    </div>
                </Link>
            </button>
            <div className='text-1xl font-bold ml-4'>
                <ul className="flex cursor-pointer text-center">
                    <li className='hover:text-xl ' >
                        <button>
                            <Link to="/home" className='pr-7 '>Home</Link>
                        </button>
                    </li>
                    <li className='hover:text-xl' >
                        <button>
                            <Link to="dogs" className='pr-7 '>Dogs</Link>
                        </button>
                    </li>
                    <li className='hover:text-xl'>
                        <button>
                            <Link to="cats" className='pr-7 '>Cats</Link>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
