import type {GetServerSideProps, NextPage} from 'next';
import Image from 'next/image';
import {useContext, useEffect} from 'react';
import Stripe from 'stripe';
import { Inter } from 'next/font/google';
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { useSession, signIn, signOut} from 'next-auth/react';
import SignInButton from '../components/signInButton'
import NextAuth from '../pages/api/auth/[...nextauth]';
export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2022-11-15',
  });
  const res = await stripe.prices.list({
    limit: 10,
    expand: ['data.product']
});

const prices = res.data.filter(price => {
    return price.active;
})

return {
    props: {
        prices
    },
}
}
type Props = {
  prices: Stripe.Price[]
}

  const inter = Inter({ subsets: ['latin'] })
  const Home: NextPage<Props> = ({prices}) => {
    
    return (
      <main className="dark-mode-shaded min-h-screen">
        <div className='min-w-full justify-center'>
          <SignInButton/>
        </div>
          <div className="max-w-7xl mx-auto py-8 flex-col">
              <div className="w-max justify-center align-center">
                  <h1 className="justify-center align-center font-semibold tracking-wide leading-10 text-xl lg:text-3xl text-black">
                      Tufted Rug Store
                  </h1>
              </div>
       
              <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                  {
                      prices.map(p => (   
                          <ProductCard key={p.id} price={p}/>
                      ))
                  }
              </div>
          </div>
      </main>
  );
  };
  export default Home