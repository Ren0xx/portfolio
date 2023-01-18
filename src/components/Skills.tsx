import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

//icons
import { IconBrandJavascript } from '@tabler/icons';
import { IconBrandTypescript } from "@tabler/icons";
import { IconBrandNextjs } from "@tabler/icons";
import { IconBrandGit } from "@tabler/icons";
import { IconBrandReact } from "@tabler/icons";
import { IconBrandFirebase } from "@tabler/icons";
const Skills = () => {
    return (
        <section id='Skills'>
            <Typography variant='h2'>Skills</Typography>
            <Typography variant='subtitle1' color='text.secondary'>
                I&apos;ve worked with multiple technologies as a developer to
                develop & maintain my projects.
            </Typography>
            <Grid container columns={{ xs: 1, md: 2, lg: 3 }} spacing={4}>
                <Grid item>
                    <IconBrandFirebase />Firebase
                </Grid>
                <Grid item>
                    <IconBrandReact /> React
                </Grid>
                <Grid item>
                    <IconBrandGit /> Git
                </Grid>
                <Grid item>
                    <IconBrandNextjs /> Next
                </Grid>
                <Grid item>
                    <IconBrandJavascript /> Javascript (ES6+)
                </Grid>
                <Grid item>
                     <IconBrandTypescript />Typescript
                </Grid>
            </Grid>
        </section>
    );
};

export default Skills;
