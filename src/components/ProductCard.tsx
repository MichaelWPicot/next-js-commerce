import { FunctionComponent, useContext } from "react";
import Stripe from "stripe";
import CartContext from "./cartContext";
import { getPriceTotal, getProductDescription, getProductImage, getProductName } from "../utils/stripe-compute";
import Image from "next/image";
type CardProps = {
    price: Stripe.Price
}

const ProductCard: FunctionComponent<CardProps> = ({ price }) => {
    const { add } = useContext(CartContext)

    const addToCart = (p: Stripe.Price) => {
        if (add) {
            add(p)
        }
    }

    return (

        <div className="relative w-full grid grid-cols-1">
            <div><div className="w-full h-72 rounded-lg overflow-hidden">
                <Image
                    src={getProductImage(price.product)}
                    alt={getProductDescription(price.product)}
                    style={{objectFit:"cover"}}
                    fill
                />
            </div>
                <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{getProductName(price.product)}</h3>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                        ${getPriceTotal(price)}
                    </p>
                </div>
            </div>

            <div className="mt-6">
                <button
                    onClick={() => addToCart(price)}
                    className="relative w-full flex bg-gray-200 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                    Add to cart<span className="sr-only">, {getProductName(price.product)}</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;