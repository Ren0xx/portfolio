import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useTheme from "@/styles/theme/useTheme";

const ThemeSwitchButton = () => {
    const theme = useTheme((s:any) => s.theme);
    const setTheme = useTheme((s:any) => s.setTheme);
    return (
        <IconButton
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            color='inherit'>
            {theme === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
    );
};

export default ThemeSwitchButton;
