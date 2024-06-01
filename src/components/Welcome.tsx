"use client";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery";
import ResumeButton from "@/components/ResumeButton";
import Image from "next/image";
const Welcome = () => {
    
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <section>
            <Box sx={{ display: "flex" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "0.9em",
                        padding: "0.5em",
                    }}>
                    <Typography
                        sx={{ letterSpacing: 2, mt: "0.8em" }}
                        variant='h2'>
                        Hey there!
                    </Typography>
                    <Typography
                        sx={{ fontSize: "1.5em" }}
                        variant='body1'
                        color='text.secondary'>
                        &apos;&apos;Welcome to my portfolio site! I specialize in
                        full-stack web development using technologies such as
                        Next.js, TypeScript, and more. Feel free to browse my
                        projects and contact me if you&apos;re interested in working
                        together.
                        <br />
                        <br />
                        Thank you for visiting!&apos;&apos;
                    </Typography>
                    <ResumeButton />
                </Box>
                <Image
                    src='/images/computer.png'
                    alt='...'
                    width={isSmallScreen ? 400 : 0}
                    height={isSmallScreen ? 400 : 0}
                />
            </Box>
        </section>
    );
};

export default Welcome;
