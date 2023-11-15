import { Link } from 'react-router-dom';

import { socialMediaLinks } from '../constants';

type HeaderProps = {
  isDark: boolean;
};

const Header = ({ isDark }: HeaderProps) => {
  return (
    <header
      className={`relative max-width ${isDark === true ? '' : 'bg-white'}`}
    >
      <div
        className={`flex items-center justify-between w-full h-16 px-4 md:px-8 xl:px-16 ${
          isDark === true ? 'absolute' : ''
        }`}
      >
        <Link
          className={`font-palyfair-display text-h5 font-medium tracking-wider text-white${
            isDark === true ? '' : 'text-black'
          }`}
          to='/'
        >
          PACKITUP
        </Link>
        <div className='flex items-center gap-3'>
          {socialMediaLinks.map((item) => (
            <a
              className={`rounded-full p-1 ${
                isDark === true ? 'bg-white ' : 'bg-black'
              }`}
              href=''
              key={item.id}
            >
              <span
                className={`${isDark === true ? 'text-black' : 'text-white'}`}
              >
                {item.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
