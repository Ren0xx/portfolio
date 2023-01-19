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
        <Card
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
                <Button size='large' variant='outlined' href={livePreview}>
                    Live preview
                </Button>
                <Button size='large' variant='outlined' href={sourceCode}>
                    Source Code
                </Button>
            </CardActions>
        </Card>
    );
};

export default Project;
