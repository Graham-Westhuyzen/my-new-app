import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar({ profilePhoto, logout, title }) {
  return (
    <div className='navbar h-16 bg-neutral'>
      <div className='flex-1'>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-ghost hover:bg-inherit drawer-button lg:hidden mr-2 text-4xl'
        >
          <FontAwesomeIcon icon='fa-solid fa-bars' size='2xs' />
        </label>
        <a href='/' className='lg:hidden block font-medium normal-case text-xl'>
          {title}
        </a>
      </div>
      <div>
        <ul className='menu menu-horizontal'>
          <li>
            <a
              href='/'
              className='p-4 font-medium hover:text-inherit'
            >
              Page 1
            </a>
          </li>
          <li>
            <a
              href='/'
              className='p-4 font-medium hover:text-inherit'
            >
              Page 2
            </a>
          </li>
          <li>
            <a
              href='/'
              className='p-4 font-medium hover:text-inherit'
            >
              Page 3
            </a>
          </li>
        </ul>
      </div>
      <div className='divider divider-horizontal mr-8 ml-2' />
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input placeholder:text-secondary focus:outline-0 input-bordered bg-inherit hover:border-primary focus:border-primary w-24 md:w-auto'
          ></input>
        </div>
        <div className='dropdown dropdown-end'>
          <label
            tabIndex={0}
            className='btn btn-circle hover:bg-inherit avatar'
          >
            <div className='w-10 rounded-full focus:outline hover:outline outline-primary outline-offset-[3px]'>
              <img src={profilePhoto} alt='' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52'
          >
            <li>
              <a href='/' className='justify-between hover:text-primary'>
                Profile
                <span className='badge badge-primary'>New</span>
              </a>
            </li>
            <li>
              <a href='/'>Settings</a>
            </li>
            <li>
              <a href='/'>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
