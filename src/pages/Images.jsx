import React, { useState, useEffect } from 'react';

const images = [
    'https://petshopindia.com/image/cache/catalog/banner1/petshopindia%20cat-1450x400.jpg',
    'https://petshopindia.com/image/cache/catalog/banner1/petshopindia%20%20tick-1450x400.jpg',
    'https://petshopindia.com/image/cache/catalog/banner1/fekrix%20petshopindia-1450x400.jpg'
];

function Images() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextIndex);
        }, 2599);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <div className='h-96'>
            <div className='h-20'></div>
            <div className='w-full flex justify-center pt-8 relative scroll-smooth transition-all duration-3900 ease-in-out'>
                <img className='w-4/5 h-2/4 transform duration-300 rounded-xl transition-opacity' src={images[currentImageIndex]} alt='Pet' />
            </div>
        </div>
    );
}

export default Images;
