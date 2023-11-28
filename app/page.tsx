  "use client"


import { parse } from "path";
import { useState } from "react";


export default function Home() {


const [VidaPlayer1, setVidaPlayer1] = useState("100")
const [VidaPlayer2, setVidaPlayer2] = useState("100")
const [VidaPlayer3, setVidaPlayer3] = useState("100")
const [placeholder1, setPlaceholder1] = useState("")
const [placeholder2, setPlaceholder2] = useState("")
const [placeholder3, setPlaceholder3] = useState("") 

const handleLifeChange1 = () => {
  if (placeholder1[0] ==  "+"){
    setPlaceholder1(()=>{
      return placeholder1.substring(1,placeholder1.length)})
    setVidaPlayer1(() => {
      let placeholderNumber = parseInt(placeholder1,10)
      let VidaPlayer1Number = parseInt(VidaPlayer1,10)
      let result =  VidaPlayer1Number + placeholderNumber
      let resultString = result.toString()
      return resultString
    })
    setPlaceholder1(()=>{
      return ""
    })
  }
  else if( placeholder1[0] == "-"){
    setPlaceholder1(()=>{
      return placeholder1.substring(1,placeholder1.length)})
    setVidaPlayer1(() => {
      let placeholderNumber = parseInt(placeholder1,10)
      let VidaPlayer1Number = parseInt(VidaPlayer1,10)
      let result =  VidaPlayer1Number - placeholderNumber
      let resultString = result.toString()
      return resultString
    })
    setPlaceholder1(()=>{
      return ""
    })
  }
}
const handleLifeChange2 = () => {
  if (placeholder2 !== ""){
    setVidaPlayer2(() => {
      return placeholder2
    }
  )}
}
const handleLifeChange3 = () => {
  if (placeholder3 !== ""){
    setVidaPlayer3(() => {
      return placeholder3
    }
  )}
}
const handleInput1 = (e:any) => {
  const inputValue = e.target.value

  setPlaceholder1((prevState) => {
    return inputValue
  })
}
const handleInput2 = (e:any) => {
  const inputValue = e.target.value

  setPlaceholder2((prevState) => {
    return inputValue
  })
}
const handleInput3 = (e:any) => {
  const inputValue = e.target.value

  setPlaceholder3((prevState) => {
    return inputValue
  })
}

  return (
    <>
    <div className="flex justify-center gap-x-8 ">
          <div> 
            <div className="h-5  mb-10"><h1>Player name</h1></div>
                <h1>player 1</h1>
                <h1>player 2</h1>
                <h1>player 3</h1>
          </div>
          <div> 
              <div className="h-5 w-8 mb-10"><h1>Vida</h1></div>
              <div className="gap-y-3">
              <div className="h-6"><h1>{VidaPlayer1}</h1></div>
              <div className="h-6"><h1>{VidaPlayer2}</h1></div>
              <div className="h-6"><h1>{VidaPlayer3}</h1></div>
              </div>
          </div>
          <div className="h-5 w-8">
            <div className="h-full w-full mb-10"></div>
            <input type="text" value={placeholder1} onChange={handleInput1} className="outline outline-2 rounded-sm outline-white bg-slate-600 w-full h-full "/>
            <input type="text" value={placeholder2} onChange={handleInput2} className="outline outline-2 rounded-sm outline-white bg-slate-600 w-full h-full "/>
            <input type="text" value={placeholder3} onChange={handleInput3} className="outline outline-2 rounded-sm outline-white bg-slate-600 w-full h-full "/>
          </div>
          <div>
          <div className="">
              <div className="mb-10 h-5"></div>
              <div><button onClick={handleLifeChange1}>hello</button></div>
              <div><button onClick={handleLifeChange2}>hello</button></div>
              <div><button onClick={handleLifeChange3}>hello</button></div>
          </div>
          </div>
        </div>
  </>)}