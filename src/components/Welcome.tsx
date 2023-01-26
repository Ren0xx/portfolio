"use client";
import { Box, Button, Typography, Link } from "@mui/material";
import Image from "next/image";
const Welcome = () => {
    return (
        <section>
            <Box sx={{ display: "flex" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "0.9em",
                    }}>
                    <Typography sx={{ letterSpacing: 2 }} variant='h2'>
                        Hey there!
                    </Typography>
                    <Typography
                        sx={{ fontSize: "1.5em" }}
                        variant='body1'
                        color='text.secondary'>
                        I&apos;m a full stack developer who uses Typescript in
                        most of the projects.
                    </Typography>
                    <Button
                        component={Link}
                        variant='contained'
                        color='secondary'
                        size='large'
                        target='_blank'
                        href='#'
                        sx={{
                            minWidth: 200,
                            alignSelf: "center",
                            borderRadius: "3em",
                            p: "1em",
                        }}>
                        <Typography variant='h5'>My Resume</Typography>
                    </Button>
                </Box>
                <Image
                    src='/images/computer.png'
                    alt='...'
                    width={400}
                    height={400}
                />
            </Box>
        </section>
    );
};

export default Welcome;
