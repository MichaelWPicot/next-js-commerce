import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import Stripe from 'stripe';
import { Inter } from 'next/font/google';
import ProductCard from "../components/ProductCard";
import Header from "../components/Header"
import React, { useState } from "react";
import emailjs from '@emailjs/browser';


export default function ContactPage() {
    const [formData, setFormdata] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormdata({ ...formData, loading: true });

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: process.env.EMAIL_ADDRESS,
            message: formData.message,
        };
        console.log(process.env.SERVICE_ID!,
            process.env.TEMPLATE_ID!,
            templateParams,
            process.env.USER_ID!)
        emailjs
            .send(
                process.env.SERVICE_ID!,
                process.env.TEMPLATE_ID!,
                templateParams,
                process.env.USER_ID!
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormdata({
                        ...formData,
                        loading: false,
                        alertmessage: "SUCCESS! ,Thankyou for your messege",
                        variant: "success",
                        show: true,
                    });
                },
                (error) => {
                    console.log(error.text);
                    setFormdata({
                        ...formData,
                        alertmessage: `Failed to send!,${error.text}`,
                        variant: "danger",
                        show: true,
                    });
                    document.getElementsByClassName("co_alert")[0].scrollIntoView();
                }
            );
    };

    const handleChange = (e: React.ChangeEvent<any>) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <>
        
            <main className="min-h-screen dark-mode-shaded">
                <div className="max-w-5xl mx-auto py-8 ">
                    <div className=" flex items-center justify-between border-b pb-3">
                        <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl">
                            TUFTED RUG STORE CUSTOMER SERVICE.
                        </h1>
                    </div>
                    <br></br>
                    <div>
                        <h2 className="font-semibold tracking-wide leading-10 text-l lg:text-2xl">
                            Please email us at tuftedrugstore@example.com or submit a web ticket below
                        </h2>
                    </div>
                </div>
<div className="max-w-5xl mx-auto  content-start">
                <div className="max-w-xl py-2 dark-mode rounded-lg p-4 content-start">
                    <div >
                        <div>
                            <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl">
                                Contact Form
                            </h1>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto py-2">
                        <div className="">
                            <div className="py-2 flex">
                                <input
                                    className="p-1 grow text-black flex grow max-w-1xl rounded-lg light-mode-shaded"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name || ""}
                                    type="text"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="py-2 flex  grow self-center	">
                                <input
                                    className="p-1 rounded-lg text-black flex grow max-w-3xl self-center light-mode-shaded"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    value={formData.email || ""}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className ="py-2 flex">
                        <textarea
                            className="p-1 rounded-lg text-black flex grow max-w-3xl light-mode-shaded"
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        </div>
                            <div className=" flex justify-end">
                                <button className="light-mode-shaded hover:light-mode font-bold py-2 px-4 border-b-4 border-dark-mode hover:border-light-mode rounded-full self-end" type="submit">
                                    {formData.loading ? "Sending..." : "Send"}
                                </button>
                            </div>
                    </form>
                </div>
                </div>
            </main>
        </>
    )

}