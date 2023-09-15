import React from 'react';

export default function Navbar({ profilePhoto, logout, title }) {
  return (
    <div>
      <div className='drawer lg:drawer-open text-secondary'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <div className='navbar h-16 bg-base-200'>
            <div className='flex-1'>
            <label
            htmlFor='my-drawer-2'
            className='btn btn-ghost drawer-button lg:hidden mr-2 text-4xl'
          >
            {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
          </label>
              <a
                href='/'
                className='lg:hidden block font-medium normal-case text-xl'
              >
                {title}
              </a>
            </div>
            <div className='h-full'>
              <ul className='menu menu-horizontal'>
                <li>
                  <a
                    href='/'
                    className='hover:bg-inherit hover:text-primary p-4'
                  >
                    Page 1
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='hover:bg-inherit hover:text-primary p-4'
                  >
                    Page 2
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='hover:bg-inherit hover:text-primary p-4'
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
          <div className='divider -mt-1.5 bg-base-200' />
          <div className='divider divider-horizontal bg-base-200 h-full -mt-[23px] -ml-[7px]' />
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <aside className='w-80 bg-base-200 min-h-full'>
            <div className='hidden lg:block '>
              <a href='/' className='block px-4 pt-3 font-medium text-2xl'>
                <span className='normal-case text-info'>{title}</span>
                <span className='uppercase text-primary'>TBD</span>
              </a>
            </div>
            <ul className='menu p-4 w-full bg-base-200'>
              <div className='divider -mt-[2px]'>Section 1</div>
              <li>
                <a href='/' className='justify-between hover:text-primary'>
                  Sidebar Item 1
                </a>
              </li>
              <li>
                <a href='/' className='justify-between hover:text-primary'>
                  Sidebar Item 2
                </a>
              </li>
              <div className='divider'>Section 2</div>
              <li>
                <a href='/' className='justify-between hover:text-primary'>
                  Sidebar Item 3
                </a>
              </li>
              <li>
                <a href='/' className='justify-between hover:text-primary'>
                  Sidebar Item 4
                </a>
              </li>
              <div className='divider'>Section 3</div>
              <li>
                <a href='/' className='justify-between hover:text-primary'>
                  Sidebar Item 5
                </a>
              </li>
              <li>
                <a href='/' className='justify-between hover:text-primary'>
                  Sidebar Item 6
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
