/*
import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


firebase.initializeApp({
  // Your Firebase config
});

interface Message {
  id: string;
  text: string;
  createdAt: firebase.firestore.Timestamp | Date;
  uid: string;
  photoURL: string;
  displayName: string;
}

interface ChatMessageProps {
  message: Message;
  currentUser: firebase.User | null;
}

const auth = firebase.auth();
const firestore = firebase.firestore();

function ChatMessage(props: ChatMessageProps) {
  const { message, currentUser } = props;
  const { text, uid, photoURL, displayName } = message;
  const messageClass = uid === currentUser?.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="User Avatar" />
      <div>
        <span className="display-name">{displayName}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(1000);

  const [messages] = useCollectionData<Message>(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser || {};

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setFormValue('');
  };

  return (
    <div>
      <main>
        {messages &&
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              currentUser={auth.currentUser}
            />
          ))}
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">
          <PaperAirplaneIcon className="send-icon" />
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;
*/