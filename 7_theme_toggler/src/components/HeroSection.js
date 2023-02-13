import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import ThemeToggler from "./ThemeToggler";
import AppTheme from "../colors";

const HeroSection = () =>{
    const theme = useContext(ThemeContext)[0]
    const CurrentTheme = AppTheme[theme]

    return(
        <div style={{height:"500px", width: "1000px", backgroundColor:`${CurrentTheme.backgroundColor}`, color:`${CurrentTheme.textColor}`, border:`${CurrentTheme.border}`,margin:"auto"}}>
            <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* <button onClick={ThemeToggler.setThemeMode} style={{backgroundColor:"#E6425E",color:"#fff",fontSize:"20px",marginLeft:"45%",padding:"10px",borderRadius:"10px"}}>Toggle Me</button> */}
        </div>
    )
}

export default HeroSection;