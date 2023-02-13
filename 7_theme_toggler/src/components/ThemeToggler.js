import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    
    return(
        <div
            onClick={() => {
                setThemeMode (themeMode === "light" ? "dark":"light");
            }}>
                <button style={{backgroundColor:"#E6425E",color:"#fff",fontSize:"20px",marginLeft:"46%",padding:"10px",borderRadius:"10px",marginBottom:"10px"}}>{themeMode === "light" ? "Lights Off" : "Lights On"}</button>
        </div>
    )
}

export default ThemeToggler;