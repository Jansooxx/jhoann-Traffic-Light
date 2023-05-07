import React, { useState } from "react";

const Traffic = () => {

    const [select, setSelect] = useState("")
    const [green, setGreen] = useState("cirGreen")
    const [yellow,setYellow] = useState("cirYell")
    const [red, setRed] = useState("cirRed")
    const [light, setLight] = useState("lighted")

    return (
        <>     
            <div className="chassis">
                <div className={select === red? light:red} onClick={()=>{select==red ? setSelect("") :setSelect(red)}}></div>
                <div className={select === yellow ? light : yellow} onClick={()=>{select==yellow?setSelect(""):setSelect(yellow)}}></div>
                <div className={select === green ? light : green} onClick={() => {select == green ? setSelect(""):setSelect(green)}}></div>
            </div>
        </>
    )
}
                
export default Traffic