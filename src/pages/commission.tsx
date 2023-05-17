import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import Stripe from 'stripe';
import { Inter } from 'next/font/google';
import ProductCard from "../components/ProductCard";


export default function AboutPage() {
    return (
        <>
    
            <main className="light-mode min-h-screen flex justify-center ">
                <div className='dark-mode-shaded rounded content-center w-5/6  py-8 space-y-8'>
                    <div className="max-w-5xl mx-auto py-8 flex-col">
                        <div className="items-center justify-center min-w-full py-4">
                            <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl text-black">
                                Commission Form
                            </h1>
                        </div>
                        <div className="items-center justify-center py-2">
                            <h1 className="font-semibold tracking-wide leading-10 lg:text-1xl text-black">
                                Commissions Are Currently Open
                            </h1>
                        </div>
                        <form>
                            <div className='py-2'>
                                <label htmlFor="style" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">What style would you like your rug </label>
                                <select id="style" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="null">Choose a style</option>
                                    <option value="fanart">Recreate my design</option>
                                    <option value="custom">Create a custom design for me</option>
                                </select>
                            </div>
                            <div className='py-2'>
                                <label htmlFor="email" className='pr-5'> Email:</label>
                                <input id="email" name="email" type="email" required />
                            </div>
                            <div className='py-2'>
                            <label htmlFor="width" className='pr-5'> Width:</label>
                                <input id="width" name="width" type="number" required />
                               
                            </div>
                            <div className='py-2'>
                            <label htmlFor="length" className='pr-5'> Length:</label>
                                <input id="length" name="length" type="number" required />
                            </div>
                            <div className='py-2'>
                            <label htmlFor="images" className='pr-5'> Link to images:</label>
                                <input id="limages" name="images" type="text" required />
                            </div>
                        </form>
                        {/** Add additional info  pop up if custom design is selected, 
               * Custom designs will increase cost of commission depending upon design complexity and 
              */}
                    </div>
                </div>
            </main>
        </>
    )
};