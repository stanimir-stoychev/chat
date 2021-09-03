import { createContext, useCallback, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Don't use the absolute import for local firebase since the project also has a `firebase` package!
import { auth, GoogleAuthProvider } from './firebase';

export const defaultState = {
    user: null,
    signOut() {},
    signIn() {},
};

const Context = createContext(defaultState);
Context.displayName = 'User Context';

export const Provider = ({ children }) => {
    const [user] = useAuthState(auth);
    const signOut = useCallback(() => auth.signOut(), []);
    const signIn = useCallback((provider = 'google') => {
        switch (provider) {
            case 'google':
                auth.signInWithPopup(GoogleAuthProvider);
                break;

            default:
                throw new Error('Invalid provider selected!');
        }
    }, []);

    return <Context.Provider value={{ user, signIn, signOut }}>{children}</Context.Provider>;
};

export const withUserProvider = (Component) =>
    function WithUserProvider(props) {
        return (
            <Provider>
                <Component {...props} />
            </Provider>
        );
    };

export const useUser = () => useContext(Context);
