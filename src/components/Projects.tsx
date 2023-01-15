import projects from "@/utils/projects.json";
import Project from "@/components/Project";

import { Box, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box id='Projects'>
            <Typography variant='h2'>Projects </Typography>
            {projects.map((item) => (
                <Project {...item} key={item.projectName} />
            ))}
        </Box>
    );
};

export default Projects;
