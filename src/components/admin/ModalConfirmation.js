import {Box, Button, Modal, Typography} from "@mui/material";
import React from "react";

const ModalConfirmation = ({isOpen, setIsOpen, deleteConfirm, text}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '16px',
        width: '20rem',
        height: '11rem',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        zIndex: 1001
    };

    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2">
                    Confirmer la suppression
                </Typography>
                <Typography id="modal-description" sx={{mt: 2}}>
                    {text}
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 3}}>
                    <Button color="primary" onClick={() => deleteConfirm()}>
                        Je confirme
                    </Button>
                    <Button onClick={() => setIsOpen(false)} sx={{ml: 2}}>
                        Annuler
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ModalConfirmation;