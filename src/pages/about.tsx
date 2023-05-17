import type {GetServerSideProps, NextPage} from 'next';
import Image from 'next/image';
import {useContext, useEffect} from 'react';
import Stripe from 'stripe';
import { Inter } from 'next/font/google';
import ProductCard from "../components/ProductCard";
import Header from "../components/Header"

export default function AboutPage() {
    return (
      <>
        <Header />
        <main className="bg-gray-100 min-h-screen">
          <div className="max-w-5xl mx-auto py-8">
              <div className="flex items-center justify-between border-b pb-3">
                  <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl text-black">
                      Tufted Rug Store
                  </h1>
              </div>     
          </div>
      </main>
      </>
    )
};