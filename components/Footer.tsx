import Link from 'next/link';
import Image from 'next/image';

import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image
            src='logo.svg'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
          <p className='text-base text-gray-700'>
            Carhub 2023 <br /> All right reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className='footer__link'
            >
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item, index) => (
                <Link
                  href={item.title}
                  key={index}
                  className='text-gray-500'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex sm:justify-between sm:items-center max-sm:flex-col flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p className='leading-loose'>
          @2023 CarHub. <br className='2xs:hidden' /> All rights reserved.
        </p>

        <div className='footer__copyrights-link'>
          <Link
            href='/'
            className='text-gray-500 whitespace-nowrap'
          >
            Privacy & Policy
          </Link>
          <Link
            href='/'
            className='text-gray-500 whitespace-nowrap'
          >
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
