"use client";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
} from "@mui/material";
import { motion } from 'framer-motion';
import type Project from "@/utils/project";
const Project = (props: Project) => {
    const {
        projectName,
        description,
        techStack,
        livePreview,
        sourceCode,
        photo,
    } = props;
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >        <Card
            sx={{
                maxWidth: 400,
                textAlign: "center",
            }}
            variant='outlined'>
            <CardMedia sx={{ height: 180 }} image={photo} title={projectName} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {projectName}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {description}
                </Typography>
                <div>
                    <Typography variant='h6'> Tech stack </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                        }}>
                        {techStack.map((item) => (
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                key={item}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </div>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                }}>
                <Button size='large' variant='contained' color='secondary'  href={livePreview}>
                    Live preview
                </Button>
                <Button size='large' variant='contained' color='secondary' href={sourceCode}>
                    Source Code
                </Button>
            </CardActions>
        </Card>
    </motion.div>

    );
};

export default Project;
