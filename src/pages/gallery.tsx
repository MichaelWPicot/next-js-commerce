import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import Stripe from 'stripe';
import { Inter } from 'next/font/google';
import ProductCard from "../components/ProductCard";


export default function GalleryPage() {
    return (
        <>

            <main className="light-mode min-h-screen flex justify-center">
                <div className='dark-mode-shaded rounded content-center w-5/6 flex  '>
                    <div className='w-max text-center align-center justify-center'>
                        <p>Previous work</p>
                    </div>


                    {/* Add gallery features */}
                </div>
            </main>
        </>
    )
};