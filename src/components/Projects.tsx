"use client";
import projects from "@/utils/projects.json";
import Project from "@/components/Project";

import { Box, Typography, Grid } from "@mui/material";

const Projects = () => {
    return (
        <section
            id='Projects'
            style={{
                marginTop: "1em",
                marginBottom: "1em",
            }}>
            <Typography variant='h2' sx={{ my: "0.5em" }}>
                Projects
            </Typography>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                columnSpacing={12}
                rowSpacing={4}
                columns={{ xs: 1, sm: 1, md: 2 }}>
                {projects.map((item) => (
                    <Grid key={item.projectName} item>
                        <Project {...item} />
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default Projects;
