const navigationLinks = [
  { name: 'About', url: '/' },
  { name: 'Resume', url: '/resume' },
  { name: 'Contact', url: '/contact' },
];

const experiences = [
  {
    company: 'Grubhub',
    location: 'Chicago, IL',
    position: "Software Engineer II",
    date: 'May 2022 - Current',
    skills: [
      {
        project: "Diner Help",
        description: [
          "Developed scalable features using React, Redux, TypeScript, React Router, and Contentful for dynamic content management",
          "Built workflows for the care system, improving customer retention and saving ~$7.1MM annually, while integrating REST APIs and implementing analytics tracking",
          "Collaborated with cross-functional teams to gather requirements, drive feature development, and mentor junior developers through code reviews and documentation",
          "Ensured high-quality code by maintaining 100% test coverage with Jest & Cypress, and driving data-driven decisions through A/B testing using Taplytics",
        ]
      }
    ]
  },
  {
    company: 'CSC Generation',
    location: 'Chicago, IL',
    position: "Software Engineer",
    date: 'Feb 2018 - May 2022',
    skills: [
      {
        project: "One Kings Lane",
        description: [
          "Designed and published a UI library with Tailwind CSS as an NPM package, improving development speed with reusable components",
          "Built a custom iFrame checkout application supporting multiple brands, resulting in a 20% conversion lift",
          "Led A/B testing of the checkout page using Google Optimize and tracked performance in Google Analytics to reduce cart abandonment",
          "Incorporated SEO best practices for enhanced search visibility and user experience, and managed bug tracking through JIRA for timely issue resolution",
        ]
      },
      {
        project: "ZGallerie",
        description: [
          "Developed the application on BigCommerce using HTML, SCSS, JavaScript, Handlebars, React, Node.js, Python, and Figma",
          "Revamped the e-commerce site with Server Side Rendering using Next.js, reducing load time by 30% and improving SEO performance",
          "Enhanced usability, accessibility, and cross-browser compatibility to improve the user experience",
          "Integrated marketing tags and tracking pixels for conversion tracking, and implemented Sailthru via REST APIs for personalized and automated emails",
        ]
      },
      {
        project: "Directbuy",
        description: [
          "Contributed to building a responsive e-commerce application using HTML5, CSS3, Bootstrap, JavaScript, jQuery, React, Wagtail CMS, and Sketch.",
          "Worked on capturing email leads and integrating them into sales-exec for email marketing.",
          "Integrated Unbounce into the application to launch campaigns, newsletter popups, and sticky bars.",
         ]
      }
    ]
  },
  {
    company: 'Capgemini',
    location: 'Bangalore, India',
    position: "Senior Software Engineer",
    date: 'Sep 2014 - Nov 2016',
    skills: [
      {
        project: "Fresh Direct",
        description: [
          "Built the web-based application using HTML5, CSS3, Bootstrap, and scripting languages such as JavaScript, jQuery, AngularJS",
          "Performed code validation to check for proper structure to meet industry standards and compatibility with various browsers and devices",
        ]
      }
    ]
  }
]


export {navigationLinks, experiences};
