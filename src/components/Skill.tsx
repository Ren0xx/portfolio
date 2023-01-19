import { Typography } from "@mui/material";
import { TablerIcon } from "@tabler/icons";
import { ReactNode } from "react";
import styles from "@/styles/skills.module.css";
type SkillData = {
    icon: TablerIcon;
    title: string;
    description: string;
};
const Skill: React.FC<SkillData> = ({ icon, title, description }) => {
    const Icon = icon;
    return (
        <div className={styles.skills__card}>
            <Typography variant='h4' className={styles.skills__card__title}>
                {title}
            </Typography>
            <Typography variant='body2' color='text.secondary' className={styles.skills__card__desc}>
                {description}
            </Typography>
            <div className={styles.skills__card__icon}>
                <Icon size={34} />
            </div>
        </div>
    );
};

export default Skill;
