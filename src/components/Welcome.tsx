"use client";
import { Box, Button, Typography } from "@mui/material";

const Welcome = () => {
    return (
        <section>
            <Box sx={{ m: "0.4em" }}>
                <Typography sx={{ letterSpacing: 2 }} variant='h2'>
                    Hey there,
                </Typography>
                <Typography
                    sx={{ fontSize: "1.5em" }}
                    variant='body1'
                    color='text.secondary'>
                    I&apos;m a full stack developer who uses Typescript in most
                    of the projects.
                </Typography>
                <Button>My resume</Button>
            </Box>
            <div>Some 3d object from three.js</div>
        </section>
    );
};

export default Welcome;
