import { Sora } from '@next/font/google';
import Image from 'next/image';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  const [width, setWidth] = React.useState(200);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setWidth(400);
      } else {
        setWidth(200);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`page bg-site text-white bg-cover bg-np-repeat ${sora.variable} font-sora relative`}>
      <div className='top-left-img'>
        <Image src='/public/avatar.png' width={width} height={width} alt='' />
      </div>
      {children}
    </div>
  );
};

export default Layout;