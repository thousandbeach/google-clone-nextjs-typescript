import { useSession, signIn, signOut } from 'next-auth/react';

export default function User() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          onClick={() => signOut()}
          src={session.user.image}
          alt='user-image'
          className='w-10 h-10 hover:bg-gray-200 rounded-full cursor-pointer'
        />
      </>
    );
  }
  return (
    <>
      <button
        className='py-2 px-6 font-medium text-white bg-blue-500 rounded-md hover:shadow-md hover:brightness-105'
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
