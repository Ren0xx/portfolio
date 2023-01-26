"use client";
import { Box, Button, Typography, Link } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
const Welcome = () => {
    const smallSc: boolean = useMediaQuery((theme: any) =>
        theme.breakpoints.up("sm")
    );
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
                        href='https://rxresu.me/r/xIqRVlTz'
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
                    width={smallSc ? 400 : 0}
                    height={smallSc ? 400 : 0}
                />
            </Box>
        </section>
    );
};

export default Welcome;
