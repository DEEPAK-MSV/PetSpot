import React from 'react';

function Base() {
    return (
        <div className='w-full h-full bg-black border-white mt-10'>
            <div className='w-full border-b flex flex-row justify-between'>
                <div className='pt-20 pl-20  flex flex-row'>
                    <img className='h-10 w-10' src="https://www.transparentpng.com/thumb/dog/dog-amazing-image-download-27.png" alt="dog amazing image download 27 @transparentpng.com" />
                    <h1 className='text-yellow-500 text-3xl font-bold pb-4 pl-2'>PetSpot</h1>
                </div>

            </div>
            <div className='justify-between align-center flex flex-row ml-20 mr-28 mt-5'>
                <h1 className='text-yellow-500 font-bold'>Contact Us</h1>
                <h1 className='text-yellow-500 font-bold'>Download</h1>
            </div>
            <div className='justify-between align-center flex flex-row ml-20 mr-16 mt-5'>
                <div>
                    <ul className='flex flex-col text-white font-small'>
                        <li className='py-2'>Annapurna Complex DSNR</li>
                        <li className='py-2'>Hydreabad</li>
                        <li className='py-2'>Email: info@petSpot.com</li>
                        <li className='py-2'>Phone: +91-9848022338</li>
                    </ul>
                </div>
                <div className='pl-30'>
                    <a><img className='h-25 w-40 pb-5 pt-5 cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png?20220907104002' /></a>
                    <a><img className='h-25 w-40 cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/203px-Download_on_the_App_Store_Badge.svg.png?20170219160111' /></a>
                </div>
            </div>
            <div className='pt-10 pl-20 pb-4'>
                <h className='text-white pr-14 '>Copyright reserved © 2023 - 2033.</h>
            </div>
        </div>
    );
}

export default Base;
