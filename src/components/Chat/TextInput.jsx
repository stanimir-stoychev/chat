import { useState } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapForm: {
            display: 'flex',
            justifyContent: 'center',
        },
        wrapText: {
            width: '100%',
        },
    }),
);

export const TextInput = ({ onSend }) => {
    const classes = useStyles();
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event?.target?.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        onSend?.(message);
        setMessage('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={classes.wrapForm} noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    label="Message"
                    className={classes.wrapText}
                    value={message}
                    onChange={handleMessageChange}
                />
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    <SendIcon />
                </Button>
            </form>
        </>
    );
};
