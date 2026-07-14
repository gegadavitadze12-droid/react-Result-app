import React from "react";
import './Result.css'

function Result() {
    return(
      
        <div class="card">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
      <div class="Result">
        <div class="text">
          <h1 class="your-result">Your Result</h1>
          <div class="oval">
            <span>76</span>
            <p class="of-100">of 100</p>
          </div>
          <h2 class="great">Great</h2>
          <p class="info">Your performance exceed 65% of the people conducting the test here!</p>
        </div>
      </div>
      <div class="summary">
        <div class="summ">
          <h1 class="Summ">Summary</h1>
        </div>
        <div class="groupSum">
          <div class="react">
            <img class="rct-icon" src="./images/icon-reaction.svg" alt="Reaction" />
            <p class="rct">Reaction</p>
            <p class="num">80 <span class="num2"> / 100</span></p>
          </div>
          <div class="memory">
            <img class="mmry-icon" src="./images/icon-memory.svg" alt="Memory" />
            <p class="mmry">Memory</p>
            <p class="num">92 <span class="num2"> / 100</span></p>
          </div>
          <div class="verbal">
            <img class="vrbl-icon" src="./images/icon-verbal.svg" alt="Verbal" />
            <p class="vrbl">Verbal</p>
            <p class="numbr">61 <span class="num2"> / 100</span></p>
          </div>
          <div class="visual">
            <img class="vis-icon" src="./images/icon-visual.svg" alt="visual" />
            <p class="vis">Visual</p>
            <p class="numbr">73 <span class="num2"> / 100</span></p>
          </div>
          <button class="continue">Continue</button>
        </div>
      </div>
    </div>
    )
}

export default Result;