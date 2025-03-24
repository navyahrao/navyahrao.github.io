const About = () => {
  return (
    <div className='max-w-6xl py-16 px-4 mx-6 md:mx-auto rounded-2xl border border-gray-100 bg-white shadow-md'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl font-semibold text-violet-500'>About Me</h2>
        <h3 className='text-2xl mt-4'>Navya Hanumantha Rao</h3>
        <div className='mt-4 text-lg text-gray-700'>
          <div className='mt-2'>
           I'm a passionate front-end developer specializing in building modern, responsive web applications. 
          </div>
          <div className='mt-2'>
            What excites me the most about web development is the opportunity to solve real-world problems by creating intuitive and efficient user interfaces.
          </div>
          <div className='mt-2'>
            I believe in writing clean, maintainable code, and always putting the user first in every project I work on.
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <a href='https://www.linkedin.com/in/navya-hanumantha-rao-91747992/' target='_blank' rel='noopener noreferrer' className='mr-8 w-[50px] p-2 bg-white'>
            <div className='icon icon-linkedin cursor-pointer mt-[-2px]'></div>
          </a>
          <a href='https://github.com/navyahrao' target='_blank' rel='noopener noreferrer' className='mr-8 w-[50px] p-2  bg-white'>
            <div className='icon icon-github cursor-pointer'></div>
          </a>
          <a href='mailto:navya.rao28@gmail.com' target='_blank'  className='w-[50px] p-2 bg-white'>
            <div className='icon icon-email cursor-pointer'></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
