import { signIn, useSession, signOut } from 'next-auth/react';

export default function SignInPage() {
  const { data: session, status } = useSession();

  return (
    <div className='dark-mode-shaded items-center justify-items-center grid'>
        <div >Sign in by Email to view your current orders, support ticket status, and account details.</div>
          <button type="button" className="border-black border-4 items-center w-60 justify-self-center " onClick={()=>signIn()}>
            Sign In
          </button>
    </div>
  );
};
