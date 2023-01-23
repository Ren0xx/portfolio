import { Typography } from "@mui/material";
const About = () => {
    return (
        <section id='About'>
            <Typography variant='h2'>
                About Me
                <hr />
                </Typography>
            <Typography variant='subtitle1' component='p'>
            I am a full-stack developer who is always eager to learn and try new things.<br/> <br/>
            Currently, I am focusing on mastering technologies such as Next.js, TypeScript and Firebase to build dynamic web applications.<br/>
            I am also diving into Node.js to expand my knowledge and skills in back-end development. <br/> <br/>
            Thank you for visiting and please check back soon to see my progress!<br/>
            </Typography>
        </section>
    );
};

export default About;
