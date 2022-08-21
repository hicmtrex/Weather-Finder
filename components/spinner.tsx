import Image from 'next/image';
import { FC } from 'react';
import spinner from '../public/spinner.gif';

const Spinner: FC = () => {
  return (
    <>
      <Image className='w-[200px] m-auto block' src={spinner} alt='loading..' />
    </>
  );
};

export default Spinner;
