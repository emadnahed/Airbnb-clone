import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import Footer from "./components/Footer"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const Cards = data.map(card => {
        return <Card 
        title={card.title} 
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        price={card.price}
        openSpots={card.openSpots}
        />
    })


    return (
        <>
        <Navbar />
        <Hero />
        <section className="cards-list">
            {Cards}
        </section>
        <Footer />
        </>
    )
}