import React from 'react';

const images = [
    {
        url: "https://images.squarespace-cdn.com/content/v1/55db9c83e4b0b6b2ad7e4b7d/1600459237193-LS5SBF6QJC2FIY26LBVI/IMG_3182+copy.jpg?format=2500w",
        name: "German Shepherd",
        price: "3000",
        dprice: "6000"
    },
    {
        url: "https://crazyrichpets.com/wp-content/uploads/2019/08/american-curl-cat.jpg",
        name: "American Curl",
        price: "4500",
        dprice: "8000"
    },
    {
        url: "https://urban-paws.s3.eu-west-2.amazonaws.com/app/uploads/2021/06/30144633/Pangpangthepug16312-684-scaled.jpg",
        name: "Pug",
        price: "3500",
        dprice: "6000"
    },
    {
        url: "https://crazyrichpets.com/wp-content/uploads/2019/08/EGYPTIAN-MAUcute-pet-fur-portrait-fluffy-cat-947886-pxhere.com_.jpg",
        name: "Egyptian Mau",
        price: "6600",
        dprice: "13000"
    },
    {
        url: "https://www.omlet.us/images/cache/512/341/Patterdale-Terrier-Black.jpg",
        name: "Patterdale Terrier",
        price: "6000",
        dprice: "12000"
    },
    {
        url: "https://crazyrichpets.com/wp-content/uploads/2019/08/SELKIRK-REXcat-3143295_1920.jpg",
        name: "Selkirk Rex",
        price: "5000",
        dprice: "10000"
    }
];

function Content() {
    return (
        <div>
            <div>
                <h1 className='font-bold text-3xl text-center mt-10'>Deal Of The Day</h1>
            </div>
            <div className="w-full h-full pl-10 align-center justify-center flex flex-wrap mt-10">
                {images.map((image, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
                        <button onClick={()=>alert("please vist store")}>
                        <div className="bg-white overflow-hidden">
                            <img src={image.url} alt={image.name} className="w-4/3 rounded-md scale-105 hover:scale-100  transform-all duration-200" />
                            <div className="pt-4 bg-white flex-row">
                                <div className='flex left-0 pb-3'>
                                    <h3 className="text-gray-800 font-bold text-xl text-center">{image.name}</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path style={{ stroke: 'green' }} strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <h3>{image.price}</h3>
                                    <h5 className='opacity-50 pl-2'><strike>{image.dprice}</strike></h5>
                                </div>
                            </div>
                        </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;
