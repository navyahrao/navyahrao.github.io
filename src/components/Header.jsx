import { Link } from 'react-router-dom';
import {useState} from 'react';

const Header = () => {
  const links = [{
    name: 'About',
    url: '/',
  },
  {
    name: 'Resume',
    url: '/resume',
  },
  {
    name: 'Contact',
    url: '/contact',
  }];

  const [currentIndex, setCurrentIndex] = useState(-1);
  return (
    <header className=' p-16'>
      <nav className='flex md:justify-end'>
        <div className='flex'>
          {links.map(({name, url}, index) => {
            return <Link key={index} to={url} onClick={() => setCurrentIndex(index)} className={`flex px-2 py-2.5 md:px-4 rounded-md bg-white font-medium mx-2.5 transition-all duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-pink-400 to-rose-400 items-center ${currentIndex === index ? 'bg-gradient-to-r text-white from-pink-500 to-rose-500' : ''}`}>
              <div>{name}</div>
            </Link>
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
