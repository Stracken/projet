"use client"
import Head from "@/componets/Head/head"
import Foot from "@/componets/Footer/foot"
import Cardprod from "@/componets/Cardprod/Cardprod"
import Produit from "@/componets/Produit/Produit"

export default function produit() {

    return (
        <>
        <Head/>
        <div className="classic">
            <Produit/>
            <Cardprod/>
            <Foot/>
        </div>
        </>
    )
}