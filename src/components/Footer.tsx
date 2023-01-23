import React from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => (
    <footer>
        <hr />
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "9em",
                my: "2em",
            }}>
            <div>
                <Typography variant='subtitle1' color='text.secondary' py={2}>
                    chat
                </Typography>
                <Link
                    underline='none'
                    variant='h6'
                    color='text.primary'
                    component='a'
                    href='https://www.linkedin.com/in/adam-za%C5%82%C4%99ski-8a6430200/'>
                    LinkedIn
                </Link>
            </div>
            <div>
                <Typography variant='subtitle1' color='text.secondary' py={2}>
                    email
                </Typography>
                <Link
                    variant='h6'
                    underline='none'
                    color='text.primary'
                    component='a'
                    href='mailto:adamzaleski00@gmail.com?subject=Hello&body=Hello,%20how%20are%20you?'>
                    adamzaleski00@gmail.com
                </Link>
            </div>
        </Box>
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                my: "2.8em",
            }}>
            <Box sx={{ display: "flex", gap: "0.2em" }}>
                ©{new Date().getFullYear()}
                <Typography color='info.main'>Adam Załęski</Typography>. All
                rights reserved.
            </Box>
            <Box>
                <IconButton size='large' href='https://github.com/Ren0xx'>
                    <GitHubIcon fontSize='inherit' />
                </IconButton>
                <IconButton size='large'>
                    <LinkedInIcon fontSize='inherit' />
                </IconButton>
            </Box>
        </Box>
    </footer>
);

export default Footer;
