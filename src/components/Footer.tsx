const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className='px-4 py-8 text-center bg-black md:px-8 xl:px-16 max-width'>
      <span className='text-white font-raleway text-h6'>
        © {getYear} PACKITUP, All Rights Reserved.{' '}
        <a className='hover:underline' href=''>
          Privacy Policy
        </a>{' '}
        |{' '}
        <a className='hover:underline' href=''>
          Terms of Service
        </a>
      </span>
    </footer>
  );
};

export default Footer;
