import { Box,Typography } from "@mui/material";
import { TablerIcon } from "@tabler/icons";
import styles from "@/styles/technologies.module.css";
type SkillData = {
    icon: TablerIcon;
    title: string;
    description: string;
};
const Technology: React.FC<SkillData> = ({ icon, title, description }) => {
    const Icon = icon;
    return (
        <Box className={styles.technologies__card} > 
            <Typography variant='h4' sx={{gridRow: "1/2", gridColumn:'2/3'}}>
                {title}
            </Typography>
            <Typography
                variant='body2'
                color='text.secondary'
                sx={{gridRow: "2/3", gridColumn: "2/3", fontSize: "1.2em"}}>
                {description}
            </Typography>
            <div className={styles.technologies__card__icon}>
                <Icon size={40} />
            </div>
        </Box>
    );
};

export default Technology;
