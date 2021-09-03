import { useEffect, useRef } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { makeStyles } from '@material-ui/core/styles';

import { useUser } from 'user';

import { FieldValue, firestore } from '../../firebase';
import { Message } from './Message';
import { TextInput } from './TextInput';

const useStyles = makeStyles({
    messages: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'auto',
    },
    lastMessage: {
        alignSelf: 'flex-end',
    },
});

export default function Chat() {
    const classes = useStyles();
    const { user } = useUser();

    const dummy = useRef(null);
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });

    const handleSendMessage = (message) => {
        if (!user) return;
        messagesRef.add({
            message,
            createdAt: FieldValue.serverTimestamp(),
            uid: user.uid,
            photoURL: user.photoURL,
        });
    };

    useEffect(
        function scrollToLastMessage() {
            dummy.current?.scrollIntoView({ behavior: 'smooth' });
        },
        [messages],
    );

    if (!user) return 'You need to be sign in to use our chat';

    return (
        <>
            <aside className={classes.messages}>
                {messages?.map((msg) => (
                    <Message key={msg.id} {...msg} />
                ))}
                <span ref={dummy} className={classes.lastMessage} />
            </aside>
            <TextInput onSend={handleSendMessage} />
        </>
    );
}
