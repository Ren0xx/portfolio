"use client";
import { useState, useEffect } from "react";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    IconButton,
} from "@mui/material";
//mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
    const sections = ["Projects", "Technologies", "About"];
    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    //scrolling into section
    useEffect(() => {
        if (!selectedSection) return;
        const element = document.getElementById(selectedSection);
        element?.scrollIntoView({ behavior: "smooth" });
        setSelectedSection(null);
    }, [selectedSection]);
    return (
        <header>
            <AppBar position='static' color='transparent'>
                <Toolbar>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mr: "auto",
                            }}>
                            <ThemeSwitchButton />

                            <Typography variant='h6'>Adam Załęski</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "3.5em",
                            }}>
                            {sections.map((section) => (
                                <Button
                                    key={section}
                                    color='secondary'
                                    href={`#${section}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedSection(section);
                                    }}>
                                    <Typography textAlign='center' variant='h6'>
                                        {section}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ ml: "auto" }}>
                            <IconButton
                                size='large'
                                href='https://github.com/Ren0xx'>
                                <GitHubIcon fontSize='inherit' />
                            </IconButton>
                            <IconButton
                                size='large'
                                href='https://www.linkedin.com/in/adam-za%C5%82%C4%99ski-8a6430200/'>
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
