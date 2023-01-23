import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
//card data
import cards from "@/utils/skillsData";
import Skill from "@/components/Skill";
const Skills = () => {
    return (
        <section id='Skills'>
            <Typography variant='h2'>
                Skills
                <hr />
            </Typography>
            <Typography
                variant='subtitle1'
                color='text.secondary'
                sx={{ my: "0.7em" }}>
                I&apos;ve worked with multiple technologies as a developer to
                develop & maintain my projects.
            </Typography>
            <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 6 }}
                sx={{ mt: "1em" }}>
                {cards.map((card, index) => {
                    return (
                        <Grid key={index} item xs={12} md={6} lg={4}>
                            <Skill
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};

export default Skills;
