"use client"
import React from 'react'
import Head from "@/componets/Head/head";
import Foot from "@/componets/Footer/foot";
import Image from 'next/image';
import Mod from '@/componets/Mod/Mod';

export default function panier() {
    return (
    <>
        <Head/>
        <div className='remplissage'>
            <div className='panier'>
            <h1>Votre panier</h1>
                <div className='achat'>
                    <div className="description">
                        <h1>DETAILS</h1>
                        <div className='produit_panier'>
                            <Image src="/boeuf.jpg" alt="Home Image" width={200}  height={45} />
                            <div className='wham'>
                                <div className='d'>
                                    <h2>Cote de porc</h2>
                                    <Mod/>
                                    <h2>60€</h2>
                                </div>
                                <div className='delete'>
                                <Image src="/delete.png" alt="Home Image" width={35}  height={45} />
                                </div>
                            </div>
                        </div>
                        <div className="roundedgray"></div>
                        <div className='produit_panier'>
                            <Image src="/boeuf.jpg" alt="Home Image" width={200}  height={45} />
                            <div className='wham'>
                                <div className='d'>
                                    <h2>Cote de porc</h2>
                                    <Mod/>
                                    <h2>60€</h2>
                                </div>
                                <div className='delete'>
                                <Image src="/delete.png" alt="Home Image" width={35}  height={45} />
                                </div>
                            </div>
                        </div>
                        <div className="roundedgray"></div>
                        <div className='produit_panier'>
                            <Image src="/boeuf.jpg" alt="Home Image" width={200}  height={45} />
                            <div className='wham'>
                                <div className='d'>
                                    <h2>Cote de porc</h2>
                                    <Mod/>
                                    <h2>60€</h2>
                                </div>
                                <div className='delete'>
                                <Image src="/delete.png" alt="Home Image" width={35}  height={45} />
                                </div>
                            </div>
                        </div>
                        <div className="roundedgray"></div>
                    </div>
                </div>
            </div>
            <Foot/>
        </div>
    </>
    )
}
