import { useMemo } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { useUser } from 'user';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: theme.spacing(1),
    },
    userMessage: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: theme.spacing(1),
    },
    message: {
        padding: theme.spacing(1),
        margin: theme.spacing(0, 1),
    },
}));

export function Message({ createdAt, message, photoURL, uid }) {
    const classes = useStyles();
    const { user } = useUser();
    const timestamp = useMemo(() => {
        if (!createdAt?.toDate) return null;
        return createdAt.toDate().toLocaleDateString('de-DE');
    }, [createdAt]);

    return (
        <div className={uid === user?.uid ? classes.userMessage : classes.foreign}>
            <Card className={classes.message}>
                {timestamp && (
                    <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                        {timestamp}
                    </Typography>
                )}
                <Typography>{message}</Typography>
            </Card>
            <Avatar src={photoURL} alt="Sender" />
        </div>
    );
}
