"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!user ? (
        <button
          onClick={async () => await gitHubSignIn()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Login with GitHub
        </button>
      ) : (
        <div className="text-center">
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={async () => await firebaseSignOut()} className="px-4 py-2 bg-red-600 text-white rounded-md"
          > Logout </button>
          <div className="mt-4">
            <Link href="/week-10/shopping-list">
              <span className="text-blue-600 underline cursor-pointer">
                Go to Shopping List
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}