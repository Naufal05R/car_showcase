'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SearchManufacturer from './SearchManufacturer';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type='submit'
    className={`-ml-3 z-10 ${otherClasses}`}
  >
    <Image
      src='/magnifying-glass.svg'
      alt='maginifying glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const router = useRouter();

  const [model, setModel] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const updateSearchParams = (model: string, manufactuer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar');
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  return (
    <form
      className='searchbar'
      onSubmit={handleSearch}
    >
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton otherClasses='sm:hidden' />
      </div>

      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          height={25}
          width={25}
          className='absolute w-5 h-5 ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
