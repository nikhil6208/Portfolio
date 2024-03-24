import { fadeIn} from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <h1 className='h1'>Tranforming Ideas<br />Into{' '}
            <span className='text-accent'>Digital Reality</span>
          </h1>
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Turning ideas into digital reality involves conceptualization, design, development, 
            and deployment, blending innovation and problem-solving to create tangible digital 
            solutions.
          </p>
          {/* button */}
          {/* <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div> */}
        </div>
      </div>
      {/* image */}
      <div>Image</div>
    </div>
  );
};

export default Home;
