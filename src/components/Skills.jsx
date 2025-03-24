import './Skills.css';

const Skills = () => {
  return (
    <div className='mb-6'>
      <h2 className='font-medium text-2xl space-x-2 mb-4'>Skills</h2>

      {/* Frontend */}
      <div className='py-4 pl-5 pr-3 space-y-2 mb-4 rounded-lg bg-purple-50'>
        <h3 className='text-lg font-medium mb-4'>Frontend</h3>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 space-x-2 content-center gap-x-4 gap-y-8'>
          <div className='place-self-center'>
            <div className='icon icon-html' />
            <div className='mt-2 text-center'>HTML5</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-css' />
            <div className='mt-2 text-center'>CSS3</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-javascript' />
            <div className='mt-2 text-center'>Javascript</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-typescript' />
            <div className='mt-2 text-center'>Typescript</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-react' />
            <div className='mt-2 text-center'>React</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-redux' />
            <div className='mt-2 text-center'>Redux</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-tailwind' />
            <div className='mt-2 text-center'>Tailwind</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-materialui' />
            <div className='mt-2 text-center'>Material UI</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-bootstrap' />
            <div className='mt-2 text-center'>Bootstrap</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-nextjs' />
            <div className='mt-2 text-center'>Next.js</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-figma' />
            <div className='mt-2 text-center'>Figma</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-eslint' />
            <div className='mt-2 text-center'>ESLint</div>
          </div>
        </div>
      </div>

      {/* Backend API */}
      <div className='py-4 pl-5 pr-3 space-y-2 mb-4 rounded-lg bg-purple-50'>
        <h3 className='text-lg font-medium mb-4'>Backend API Integration</h3>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 space-x-2 content-center gap-x-4 gap-y-8'>
          <div className='place-self-center'>
            <div className='icon icon-restapi' />
            <div className='mt-2 text-center'>RESTful API</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-graphql' />
            <div className='mt-2 text-center'>GraphQL</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-webhooks' />
            <div className='mt-2 text-center'>Webhooks</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-oauth' />
            <div className='mt-2 text-center'>OAuth</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-jwt' />
            <div className='mt-2 text-center'>JWT</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-django' />
            <div className='mt-2 text-center'>Python/Django</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-nodejs' />
            <div className='mt-2 text-center'>NodeJs</div>
          </div>
        </div>
      </div>

      {/* Testing */}
      <div className='py-4 pl-5 pr-3 space-y-2 mb-4 rounded-lg bg-purple-50'>
        <h3 className='text-lg font-medium mb-4'>Testing</h3>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 space-x-2 content-center gap-x-4 gap-y-8'>
          <div className='place-self-center'>
            <div className='icon icon-jest' />
            <div className='mt-2 text-center'>Jest</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-rtl' />
            <div className='mt-2 text-center'>React Testing Library</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-cypress' />
            <div className='mt-2 text-center'>Cypress</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-testcafe' />
            <div className='mt-2 text-center'>Test Cafe</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-storybook' />
            <div className='mt-2 text-center'>Storybook</div>
          </div>
        </div>
      </div>

       {/* Tools */}
       <div className='py-4 pl-5 pr-3 space-y-2 mb-4 rounded-lg bg-purple-50'>
        <h3 className='text-lg font-medium mb-4'>Tools</h3>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 space-x-2 content-center gap-x-4 gap-y-8'>
          <div className='place-self-center'>
            <div className='icon icon-npm' />
            <div className='mt-2 text-center'>NPM</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-yarn' />
            <div className='mt-2 text-center'>Yarn</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-webpack' />
            <div className='mt-2 text-center'>Webpack</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-vite' />
            <div className='mt-2 text-center'>Vite</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-jenkins' />
            <div className='mt-2 text-center'>Jenkins</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-spinnaker' />
            <div className='mt-2 text-center'>Spinnaker</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-git' />
            <div className='mt-2 text-center'>Git</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-github' />
            <div className='mt-2 text-center'>Github</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-bitbucket' />
            <div className='mt-2 text-center'>Bitbucket</div>
          </div>
        </div>
      </div>

        {/* Observability */}
        <div className='py-4 pl-5 pr-3 space-y-2 mb-4 rounded-lg bg-purple-50'>
        <h3 className='text-lg font-medium mb-4'>Observability</h3>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 space-x-2 content-center gap-x-4 gap-y-8'>
          <div className='place-self-center'>
            <div className='icon icon-datadog' />
            <div className='mt-2 text-center'>Datadog</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-newrelic' />
            <div className='mt-2 text-center'>New relic</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-sentry' />
            <div className='mt-2 text-center'>Sentry</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-ga' />
            <div className='mt-2 text-center'>Google Analytics</div>
          </div>
          <div className='place-self-center'>
            <div className='icon icon-gtm' />
            <div className='mt-2 text-center'>GTM</div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Skills;
