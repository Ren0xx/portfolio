import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
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
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia sx={{ height: 140 }} image={photo} title={projectName} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {projectName}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' variant='outlined' href={livePreview}>
                    Live preview
                </Button>
                <Button size='small' variant='outlined' href={sourceCode}>
                    Source Code
                </Button>
            </CardActions>
        </Card>
    );
};

export default Project;
