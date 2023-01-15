import Logo from "../../public/logo.png";
import styles from "@/styles/components.module.css";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import Image from "next/image";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
//mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Header = () => {
    const sections = ["Projects", "Skills", "About"];
    return (
        <header>
            <AppBar position='static' color='transparent'>
                <Toolbar>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            gap: "5em",
                            justifyContent: "space-between",
                        }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ThemeSwitchButton />
                            <Image
                                src={Logo}
                                width={50}
                                height={40}
                                alt='...'
                            />
                            <Typography variant='h6'>Adam Załęski</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                gap: "3.5em",
                            }}>
                            {sections.map((section) => (
                                <Button
                                    key={section}
                                    color='secondary'
                                    href={`#${section}`}>
                                    <Typography textAlign='center' variant='h6'>
                                        {section}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>
                        <Box
                        // sx={{ ml: "auto" }}
                        >
                            <IconButton size='large' href='#'>
                                <GitHubIcon fontSize='inherit' />
                            </IconButton>
                            <IconButton size='large'>
                                <LinkedInIcon fontSize='inherit' />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
