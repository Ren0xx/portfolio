import { Typography } from "@mui/material";
import { TablerIcon } from "@tabler/icons";
import styles from "@/styles/skills.module.css";
type SkillData = {
    icon: TablerIcon;
    title: string;
    description: string;
};
const Technology: React.FC<SkillData> = ({ icon, title, description }) => {
    const Icon = icon;
    return (
        <div className={styles.skills__card}>
            <Typography variant='h4' className={styles.skills__card__title}>
                {title}
            </Typography>
            <Typography
                variant='body2'
                color='text.secondary'
                className={styles.skills__card__desc}>
                {description}
            </Typography>
            <div className={styles.skills__card__icon}>
                <Icon size={40} />
            </div>
        </div>
    );
};

export default Technology;
