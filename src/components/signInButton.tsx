import { signIn, useSession, signOut } from 'next-auth/react';

export default function SignInButton() {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <div>Signed in as {session?.user?.email} <button type="button" onClick={()=>signOut()}>
       Sign Out
        </button></div>
      ) :  status ==="loading" ? (
        <div>
          Not signed in
          <button type="button" onClick={() => signIn()}>Sign In</button>
        </div>
      ) : (
        <div>
        <button type="button" onClick={()=>signIn()}>
            Sign In
          </button></div>)}
    </div>
  );
};
