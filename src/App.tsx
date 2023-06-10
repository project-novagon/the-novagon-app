import { useAuthState } from "react-firebase-hooks/auth";
import { SignIn, SignOut } from "./components/AuthSys";
import { ImageMenu } from "./components/mainMenu";
import { initializeApp } from "firebase/app";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"
import { getAuth, Auth } from "firebase/auth";
import { VideoMenu } from "./components/mainMenu";
import "firebase/firestore";
import "firebase/auth";
import React from "react";
import "./App.css";
//// import { ChatRoom } from "./components/chat/chatRoom";

const firebaseConfig = {
  apiKey: "AIzaSyB6YpcLlowvaCVSPUfpxrflvdi1wqzwdDs",
  authDomain: "polygon-social.firebaseapp.com",
  projectId: "polygon-social",
  storageBucket: "polygon-social.appspot.com",
  messagingSenderId: "1040413982197",
  appId: "1:1040413982197:web:d8b8a70509ec88c50274bc",
  measurementId: "G-3L8NZ3JVB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  return (
    <>
      <header className='sticky top-0 flex items-center justify-between gap-0 p-4 dark:bg-zinc-900 bg-zinc-50'>
        <div className="flex items-center space-x-4">
          <img src="https://novagoncdn.netlify.app/img/nvgweb/NovoChat%20Logo%402x.png" alt="" width="48px" />
          <h1 className='text-xl font-bold font-albertsans'>Novagon Social</h1>
        </div>
        <SignOut auth={auth} />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageUI />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/chat" element={<WorkInProgress/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function ImageUI() {
  const [user] = useAuthState(auth);

  return (
    <>
      <section className="p-6">
        {user ? <ImageMenu user={user} /> : <SignIn />}
      </section>
    </>
  );
}
function Videos() {
  const [user] = useAuthState(auth);
  return (
    <>
      <section className="p-6">
        {user ? <VideoUI /> : <SignIn />}
      </section>
    </>
  );
}
function VideoUI() {
  const [user] = useAuthState(auth);

  return (
    <>
      <section className="p-6">
        {user ? <VideoMenu user={user}/> : <SignIn/> }
      </section>
    </>
  )
}
function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center space-x-3 text-center">
          <div>
            <QuestionMarkCircleIcon className="w-9" />
          </div>
          <div>
            <h1 className="text-4xl font-bold transition-all hover:text-primaryBlue-primary">404</h1>
            <p>Not Found</p>
            <a href="/" className="transition hover:underline text-primaryBlue-primary">Go Back</a>
          </div>
        </div>
      </div>
    </>
  )
}
function WorkInProgress() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center space-x-3 text-center">
          <div>
            <QuestionMarkCircleIcon className="w-9" />
          </div>
          <div>
            <h1 className="text-4xl font-bold transition-all hover:text-primaryBlue-primary">501</h1>
            <p>Work in progress</p>
            <a href="/" className="transition hover:underline text-primaryBlue-primary">Go Back</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
