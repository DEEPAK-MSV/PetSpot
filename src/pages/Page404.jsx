import React from 'react'
import Header from './Header'

function Page404() {
    return (
        <div className='flex-1 flex'>
            <div>
                <Header />
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <p className="font-bold text-indigo-600 text-5xl">404</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Page not found</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                        
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Page404