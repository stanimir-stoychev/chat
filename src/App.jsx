import { makeStyles } from '@material-ui/core/styles';

import ApplicationBar from 'components/ApplicationBar';
import ApplicationContent from 'components/ApplicationContent';
import Chat from 'components/Chat';

import { withMaterialUI } from 'components/Base';
import { withUserProvider } from 'user';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
});

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ApplicationBar />
            <ApplicationContent>
                <Chat />
            </ApplicationContent>
        </div>
    );
}

export default withUserProvider(withMaterialUI(App));
