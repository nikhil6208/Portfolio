import Image from 'next/image';

const TopLeftImg = ({ width}) => {
  return (
    <div className='top-left-img'>
    <Image src='/public/top-left-img.png' width={width} height={width} alt='' />
  </div>
  );
};

export default TopLeftImg;
