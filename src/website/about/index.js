import React from "react";
import Pages from "../../components/pages/Pages"
import "./about.scss"
export default function About(props){
    return(
        <Pages>
        <h1>About</h1>
        <span>IMAGE BACKGROUND THAT WILL HAVE A FIXED BG</span>
        <section>
        <article>
            <h3>How was the game was made?</h3>
            <p>This project was put together through a combination of Javascript React and Redux. This was done as my first voyage into the world of Redux.
                I came into this project a week and a half ago with no knowledge of state management system and was able to find my way around Redux! However
                as all first projects go, looking back, I have learned a lot and look forward to making an even more spectacular product next time around!
            </p>
        </article>
        <span>IMAGE BACKGROUND THAT WILL HAVE A FIXED BG</span>
        <article>
            <h3>How are the maps are generated?</h3>
            <p>So to generate maps I used a method I found from <a href="https://github.com/ASteinheiser/react-rpg.com">Andrew Steinheiser</a> of creating a matrix of arrays each holding a different value. I then created a algorithm that would search for my specific tile and 
                match said tile to a sprite of my choosing. A digit above a certain value would act as an impassable tile while everything below that digit the player would be able to pass through.
            </p>
        </article>
        <span>SPAN OF AN ARRAY MATRIX</span>
        <article>
            <h3>How do the fights work?</h3>
            <p>Each component has an individual check to see if the component can fight. Upon getting to the end of that components dialogue a fight is initiated. Basically there are two function being past back and forth on the player attack.
                As soon as either the player or enemies health turn to 0 the fight is over.
            </p>
        </article>
        </section>
        </Pages>
    )
}