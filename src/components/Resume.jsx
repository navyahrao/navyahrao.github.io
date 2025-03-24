import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const Resume = () => {
  return (
    <section id='resume' className='px-4 md:mx-16 md:rounded-2xl md:border border-gray-100 bg-white md:shadow-md'>
      <div className='grid grid-cols-1 p-2 md:p-16'>
        <div className='mb-12 md:mb-6 mt-6 text-center md:text-right'>
          <a
            href='/pdfs/Resume.pdf'  
            download='NavyaRao.pdf'
            className='bg-violet-500 hover:bg-violet-600 hover:shadow-lg text-white py-2 px-6 rounded-lg'
          > 
            Download Resume
          </a>
        </div>
        <Education />
        <hr className='mb-8'/>
        <Experience />
        <hr className='mb-8 mt-4'/>
        <Skills />
      </div>
    </section>
  );
};

export default Resume;
