import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink, yellow } from '@material-ui/core/colors';

export const theme = createTheme({
    palette: {
        primary: pink,
        secondary: yellow,
    },
});

export const withMaterialUI = (Component) =>
    function WithMaterialUI(props) {
        return (
            <>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <Component {...props} />
                </ThemeProvider>
            </>
        );
    };
