import {
    Backdrop,
    Box,
    Button,
    Fade,
    Modal,
    Typography,
} from "@mui/material";
import { useState } from "react";
const ResumeButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<>
        <Button
            variant='contained'
            color='secondary'
            size='large'
            onClick={handleOpen}
            sx={{
                minWidth: 200,
                alignSelf: "center",
                borderRadius: "3em",
                p: "1em",
            }}>
            <Typography variant='h5'>My Resume</Typography>
        </Button>
        <ResumesModal open={open} handleClose={handleClose} />
    </>
    );
};
type ResumesModalProps = {
    open: boolean;
    handleClose: () => void;
};
const ResumesModal = (props: ResumesModalProps) => {
    const style = {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "2em",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 300,
                },
            }}>
            <Fade in={props.open}>
                <Box sx={style}>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        Select a resume language
                    </Typography>
                    <Box>
                        <LinkButton href='https://drive.google.com/file/d/1khG4jrHLPVDk77FWePLsirAzmjJRmDV-/view?usp=drive_link' text='ENG' />
                        <LinkButton href='https://drive.google.com/file/d/1BW7J3TndunVZpxDnbbjBV2zcCkXFmqMB/view?usp=drive_link' text='PL' />
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};
type LinkButtonProps = {
    href: string;
    text: string;
};
const LinkButton = (props: LinkButtonProps) => {
    const style = {
        borderRadius: "1em",
        m: 2
    };

    return (
        <Button variant='contained' color='secondary' href={props.href} sx={style} target="_">
            {props.text}
        </Button>
    );

};
export default ResumeButton;
