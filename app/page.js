"use client"
import Map from "@/componets/Map";
import Head from "@/componets/Head/head";
import React, { useState } from "react"
import Image from "next/image";

export default function Home() {
  var [search,  setSearch] = React.useState("");

  function research(){
    let s = document.getElementById("place");
    setSearch(s.value);
  }
  console.log(search);
  return (
    <>
      <body>
        <Head/>
        <Map/>
        <div className="search">
          <input id="place" type="text" placeholder="Search..." />
          <button onClick={() => research()}>ok</button>
        </div>
        <div className="sug">
          <div className="section">
            <h1>Pièce de viande</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu felis, rutrum a venenatis eu, auctor at lorem.</p>
          </div>
          <div className="rounded"></div>
          <div className="section">
            <h1>Pièce de viande</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu felis, rutrum a venenatis eu, auctor at lorem.</p>
          </div>
          <div className="rounded"></div>
          <div className="section">
            <h1>Pièce de viande</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu felis, rutrum a venenatis eu, auctor at lorem.</p>
          </div>
          <div className="rounded"></div>
          <div className="section">
            <h1>Pièce de viande</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu felis, rutrum a venenatis eu, auctor at lorem.</p>
          </div>
          <div className="rounded"></div>
          <div className="section">
            <h1>Pièce de viande</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum arcu felis, rutrum a venenatis eu, auctor at lorem.</p>
          </div>
        </div>
        <div className="main">
          <Image className="img" src="/menu.png" alt="Home Image" width={50}  height={45} />
          <div className="roundedgray"></div>
          <div className="article">
            <h1>Pour vous</h1>
            <div className="prop">
              <Image src="/random.png" alt="Home Image" width={200}  height={45} />
              <Image src="/random.png" alt="Home Image" width={200}  height={45} />
              <Image src="/random.png" alt="Home Image" width={200}  height={45} />
              <Image src="/random.png" alt="Home Image" width={200}  height={45} />
              <Image src="/random.png" alt="Home Image" width={200}  height={45} />
              <Image src="/random.png" alt="Home Image" width={200}  height={45} />
              <Image src="/random.png" alt="Home Image" width={200}  height={45} />
            </div>
          </div>
            <div className="roundedgray"></div>
            <div className="article">
              <h1>À proximité</h1>
              <div className="prop">
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
              </div>
              <div className="roundedgray"></div>
            </div>
            <div className="article">
              <h1>À proximité</h1>
              <div className="prop">
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
                <Image src="/random.png" alt="Home Image" width={200}  height={45} />
              </div>
            </div>
        </div>
      </body>
    </>
  );
}
