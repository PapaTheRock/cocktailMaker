import React from "react"
import { ReactDOM } from "react-dom"
import cocktailCode from "./cocktailCode"
const functionName = () => {
    window.location.reload(true);
    console.log("button clicked");
  }

export default function Home() {
    return (
        <div class="parent" className="Parent">
            <title>Cocktail Maker</title>
            <div id="cocktail"></div>
            <div id="overlay"></div>
            <script src = "cocktailCode.js"></script>
            <button onClick={() => functionName()}>New Drink</button> 
        </div>
    
    
    
    
    
    
    
    )
}