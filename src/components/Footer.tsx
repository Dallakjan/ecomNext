import Image from 'next/image';

const Footer = () => {
  const links = [
    { label: 'About', url: '#' },
    { label: 'Privacy Policy', url: '#' },
    { label: 'Licensing', url: '#' },
    { label: 'Contact', url: '#' },
  ];

  return (
    <footer className='bg-white shadow'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a
            href='https://flowbite.com/'
            className='flex items-center mb-4 sm:mb-0'
          >
            <Image
              width={30}
              height={30}
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8 mr-3'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-dark'>
              Flowbite
            </span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-dark sm:mb-0 dark:text-dark'>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.url} className='mr-4 hover:underline md:mr-6'>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-dark sm:text-center text-dark'>
          © 2023{' '}
          <a href='https://flowbite.com/' className='hover:underline'>
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
