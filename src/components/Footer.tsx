import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
    return (
        <footer>
            <hr />
            <div>
                <Typography variant='h6'> chat</Typography>
                <Typography variant='h6'> email</Typography>
            </div>
            <div>
                ©{new Date().getFullYear()} All rights reserved.
                <Box>
                    <IconButton size='large' href='https://github.com/Ren0xx'>
                        <GitHubIcon fontSize='inherit' />
                    </IconButton>
                    <IconButton size='large'>
                        <LinkedInIcon fontSize='inherit' />
                    </IconButton>
                </Box>
            </div>
        </footer>
    );
};

export default Footer;
