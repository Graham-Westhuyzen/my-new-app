import React from 'react';

export default function Navbar({ profilePhoto, logout, title }) {
  return (
    <div className='navbar h-16 bg-base-100 text-secondary border-b-[0.5px] border-secondary'>
      <div className='flex-1'>
        <a href='/' className='m-2 font-medium normal-case text-xl'>
          {title}
        </a>
      </div>
      <div className='h-full'>
        <a href='/' className='active:-mb-1 active:border-b-4 p-4 border-primary'>Page 1</a>
        <a href='/' className='active:-mb-1 active:border-b-4 p-4 border-primary'>Page 2</a>
        <a href='/' className='active:-mb-1 active:border-b-4 p-4 border-primary'>Page 3</a>
      </div>
      <div className='divider divider-horizontal mr-8 ml-4' />
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input text-primay focus:outline-0 input-bordered bg-inherit to-primary focus:border-primary w-24 md:w-auto'
          ></input>
        </div>
        <div className='dropdown dropdown-end'>
          <label
            tabIndex={0}
            className='btn btn-circle hover:bg-inherit avatar'
          >
            <div className='w-10 rounded-full hover:outline outline-primary outline-offset-1'>
              <img src={profilePhoto} alt='pfp' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52'
          >
            <li>
              <a href='/' className='justify-between'>
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
