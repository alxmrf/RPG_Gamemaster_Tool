"use client"


import { useState } from "react";


export default function Home() {


const [VidaPlayer1, setVidaPlayer1] = useState(100)
const [VidaPlayer2, setVidaPlayer2] = useState(100)
const [VidaPlayer3, setVidaPlayer3] = useState(100)
const [placeholder1, setPlaceholder1] = useState(100)
const [placeholder2, setPlaceholder2] = useState(100)
const [placeholder3, setPlaceholder3] = useState(100) 

const handleLifeChange = () => {
  setVidaPlayer1(() => {
    return placeholder1
  })	}
  const handleInput = (e) => {
    const inputValue = e.target.value

    setPlaceholder1((prevState) => {
      return inputValue
    })
  }

  return (
    <>
    <div className="flex justify-center gap-x-8 ">
        <h1>Player name</h1>
        <h1>health</h1> 
        <h1> -------------------</h1>
        <h1> -------------------</h1>
    </div>
    <div className="flex justify-center gap-x-8">
        <h1>Player 1</h1>
        <h1>{VidaPlayer1}</h1>
        <input type="text" value={placeholder1} 
        onChange={handleInput}
        />
        <button className="rounded" onClick={handleLifeChange}>submit</button>
    </div>
  </>)}