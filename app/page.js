"use client"
import Map from "@/componets/Map";
import React, { useState } from "react"

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
      </body>
    </>
  );
}
