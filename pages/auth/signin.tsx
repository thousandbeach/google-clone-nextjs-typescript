import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

export default function signin({ providers }: Record<any, any>) {
  return (
    <>
      <Header />
      <div className='mt-40'>
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name} className='flex flex-col items-center'>
            <img
              className='object-cover w-52'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png'
              alt='google-logo'
            />
            <p className='my-10 text-sm italic text-center'>
              This website is created for learning purposes.
            </p>
            <button
              className='p-3 text-white bg-red-400 hover:bg-red-500 rounded-lg'
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
