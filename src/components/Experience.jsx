const Experience = () => {
  return (<div>
    <h4 className='text-2xl font-medium space-x-2 mb-4'>Experience</h4>
    <div className='space-y-2 mb-4'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <h3 className='text-xl'>Grubhub</h3>
        <div className='text-tiny text-gray-lite md:ml-auto'>Chicago, IL</div>
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2'>
        <h4 className='font-medium text-md'>Software Engineer II</h4>
        <div className='text-tiny text-gray-lite md:ml-auto'>May 2022 - Current</div>
      </div>
      <div className='rounded-lg py-4 pl-5 pr-3 space-y-2 bg-sky-50'>
       <h3 className='font-medium text-md'>Diner Help</h3>
        <ul role='list' className='list-disc pl-6'>
        <li>Developed scalable features using React, Redux, TypeScript, React Router, and Contentful for dynamic content management</li>
        <li>Built workflows for the care system, improving customer retention and saving ~$7.1MM annually, while integrating REST APIs and implementing analytics tracking</li>
        <li>Collaborated with cross-functional teams to gather requirements, drive feature development, and mentor junior developers through code reviews and documentation</li>
        <li>Ensured high-quality code by maintaining 100% test coverage with Jest & Cypress, and driving data-driven decisions through A/B testing using Taplytics</li>
        </ul>
      </div>
    </div>
    <div className='space-y-2 mb-4 mt-8'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <h3 className='text-xl'>CSC Generation</h3>
        <div className='text-tiny text-gray-lite md:ml-auto'>Chicago, IL</div>
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <h4 className='font-medium text-md'>Software Engineer</h4>
        </div>
        <div className='text-tiny text-gray-lite md:ml-auto'>June 2018 - May 2022</div>
      </div>
      <div className='rounded-lg py-4 pl-5 pr-3 space-y-2 mb-6 bg-sky-50'>
       <h3 className='font-medium text-md'>One Kings Lane</h3>
        <ul role='list' className='list-disc pl-6'>
          <li>Designed and published a UI library with Tailwind CSS as an NPM package, improving development speed with reusable components</li>
          <li>Built a custom iFrame checkout application supporting multiple brands, resulting in a 20% conversion lift</li>
          <li>Led A/B testing of the checkout page using Google Optimize and tracked performance in Google Analytics to reduce cart abandonment</li>
          <li>Incorporated SEO best practices for enhanced search visibility and user experience, and managed bug tracking through JIRA for timely issue resolution</li>
        </ul>
      </div>
      <div className='rounded-lg py-4 pl-5 pr-3 space-y-2 mb-6 bg-sky-50'>
       <h3 className='font-medium text-md'>ZGallerie</h3>
        <ul role='list' className='list-disc pl-6'>
          <li>Developed the application on BigCommerce using HTML, SCSS, JavaScript, Handlebars, React, Node.js, Python, and Figma</li>
          <li>Revamped the e-commerce site with Server Side Rendering using Next.js, reducing load time by 30% and improving SEO performance</li>
          <li>Enhanced usability, accessibility, and cross-browser compatibility to improve the user experience</li>
          <li>Integrated marketing tags and tracking pixels for conversion tracking, and implemented Sailthru via REST APIs for personalized and automated emails</li>
        </ul>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-2'>
        <h4 className='font-medium text-md'>Internship</h4>
        <div className='text-tiny text-gray-lite md:ml-auto'>Feb 2018 - June 2018</div>
        </div>
      <div className='rounded-lg py-4 pl-5 pr-3 space-y-2 mb-6 bg-sky-50'>
       <h3 className='font-medium text-md'>Directbuy</h3>
        <ul role='list' className='list-disc pl-6'>
          <li>Contributed to building a responsive e-commerce application using HTML5, CSS3, Bootstrap, JavaScript, jQuery, React, Wagtail CMS, and Sketch.</li>
          <li>Worked on capturing email leads and integrating them into sales-exec for email marketing.</li>
          <li>Integrated Unbounce into the application to launch campaigns, newsletter popups, and sticky bars.</li>
        </ul>
      </div>
    </div>
    <div className='space-y-2 mb-4'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <h3 className='text-xl'>Capgemini</h3>
        <div className='text-tiny text-gray-lite md:ml-auto'>Bangalore, India</div>
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2'>
        <h4 className='font-medium text-md'>Senior Software Engineer</h4>
        <div className='text-tiny text-gray-lite md:ml-auto'>Aug 2014 - Nov 2016</div>
      </div>
      <div className='rounded-lg py-4 pl-5 pr-3 space-y-2 bg-sky-50'>
       <h3 className='font-medium text-md'>Diner Help</h3>
        <ul role='list' className='list-disc pl-6'>
          <li>Built the web-based application using HTML5, CSS3, Bootstrap, and scripting languages such as JavaScript, jQuery, AngularJS</li>
          <li>Performed code validation to check for proper structure to meet industry standards and compatibility with various browsers and devices</li>
        </ul>
      </div>
    </div>
  </div>)
}

export default Experience;
