import type { NextPage } from 'next';
import Link from '../components/buttons/Link';

const Home: NextPage = () => {
  return (
    <div className=' flex min-h-screen flex-col items-center justify-center py-2'>
      <h1 className='text-green'>About page</h1>
      <Link href='/'>home</Link>
    </div>
  );
};

export default Home;
