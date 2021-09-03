import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function ApplicationContent({ children }) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
            {children}
        </Container>
    );
}
