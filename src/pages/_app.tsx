import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, {useState} from 'react';
import Stripe from 'stripe';
import _ from 'lodash';
import CartContext, { CartContextProps } from '@/components/cartContext';
import { SessionProvider } from 'next-auth/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function App({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState<Stripe.Price[]>([]);
  const remove = (id:string) => {
    let i = _.reject(items, (item)=>{
      return item.id===id
    });
    setItems(i)
  }
  const add = (p:Stripe.Price)=> {
    let i=_.union(items,[p]);
    setItems(i);
  }

  const cartContext: CartContextProps = {
    items: items,
    add:add,
    remove:remove
  }
  return (
    <SessionProvider session={pageProps.session}>
  <CartContext.Provider value={cartContext}>
    <div className='grid grid-cols-1 min-w-full'>
    <Header {...pageProps} />
    <Component {...pageProps} />
    <Footer />
    </div>
  </CartContext.Provider>
  </SessionProvider>)
}
