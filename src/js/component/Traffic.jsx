import React, { useState } from "react";

const Traffic = () => {

    const [select, setSelect]   = useState("")
    const [green, setGreen]     = useState("cirGreen")
    const [yellow,setYellow]    = useState("cirYell")
    const [red, setRed]         = useState("cirRed")
    const [light, setLight]     = useState("lighted")

    return (
        <>     
            <div id="barra"></div>
            <div className="chassis">
                <div className={select === red? "cirRed lighted":red} onClick={()=>{select==red ? setSelect("") :setSelect(red)}}></div>
                <div className={select === yellow ? "cirYell lighted " : yellow} onClick={()=>{select==yellow?setSelect(""):setSelect(yellow)}}></div>
                <div className={select === green ? "cirGreen lighted" : green} onClick={() => {select== green ? setSelect(""):setSelect(green)}}></div>
            </div>
        </>
    )
}
                
export default Traffic