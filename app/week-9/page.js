"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { list } from "postcss";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const linkStyles = "text-cyan-600 hover:text-cyan-300";

  async function signIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.dir(error);
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.dir(error);
    }
  }

  return (
    <main>
      {user ? (
        <div className="text-lg">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <Link href="./week-9/shopping-list/" className={linkStyles}>Continue to Shopping List </Link>
          <br></br>
          <button onClick={signOut} className="text-lg m-2 hover:underline">Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={signIn} className="text-lg m-2 hover:underline">Sign In with GitHub</button>
        </div>
      )}
    </main>
  );
}