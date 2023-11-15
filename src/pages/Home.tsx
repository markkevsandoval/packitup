import { Link } from 'react-router-dom';

import { Footer, Header } from '../components';
import { howToUsePackItUp } from '../constants';

const Home = () => {
  return (
    <>
      <Header isDark={true} />
      <main className='max-width'>
        <section className='flex flex-col items-center justify-center h-screen gap-6 px-4 text-center bg-cover md:px-8 xl:px-16 background-custom'>
          <h1 className='font-medium leading-[72px] text-white font-palyfair-display text-h2 md:text-h1 md:leading-[90px]'>
            The Adventure <br /> Essentials List
          </h1>
          <p className='text-white font-raleway text-h6'>
            Ensuring a comprehensive and organized packing list for any trip.
          </p>
        </section>
        <section className='flex flex-col gap-5 px-4 py-8 bg-white lg:gap-10 md:px-8 xl:px-16 md:py-16 xl:py-28'>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className='text-black font-raleway text-h6'>
              HOW TO USE PACKITUP
            </span>
            <h2 className='font-medium leading-[52px] text-black font-palyfair-display text-h3 md:text-h2 md:leading-normal'>
              Don't forget a thing
            </h2>
            <p className='text-black font-raleway text-h6 max-w-[651px]'>
              Your go-to companion for a hassle-free adventure! Whether you're
              planning a camping trip, a weekend getaway, or a grand expedition,
              PACKITUP helps you stay organized
            </p>
          </div>
          <div className='grid items-end justify-center grid-cols-1 gap-6 xl:grid-cols-2 place-items-center'>
            {howToUsePackItUp.map((item) => (
              <div
                className='group shadow-[0_0_0_1px_rgba(34,34,34,100)] max-w-[564px]'
                key={item.id}
              >
                <div className='overflow-hidden'>
                  <img
                    className='transition-all duration-300 group-hover:scale-110'
                    src={item.howToUsePackItUpImage}
                    alt={item.howToUsePackItUpHeading}
                  />
                </div>
                <div className='flex flex-col px-3 pb-3 '>
                  <h3 className='font-medium text-black font-palyfair-display text-h4 md:text-h3'>
                    {item.howToUsePackItUpHeading}
                  </h3>
                  <p className='text-black font-raleway text-h6'>
                    {item.howToUsePackItUpDesc}
                  </p>
                </div>
              </div>
            ))}
            <Link
              className='px-5 py-4 text-center text-white bg-black max-w-[564px] w-full font-raleway text-h6'
              to='/create'
            >
              Create a List
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
