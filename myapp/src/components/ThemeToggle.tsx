import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

export default function ThemeToggle(){
    const {theme , toggleTheme} = useTheme();

    return(
        <Button
            text={theme}
            onclick={toggleTheme}
            variant="secondary"    
            type="button"
        />
    )
}