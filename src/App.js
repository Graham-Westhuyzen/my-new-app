import React from 'react';
import './App.css';

// Components
import Navbar from './Components/Navbar';


// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, fab, far);

function App() {
  let title = 'TitleOfWebsite';

  return (
    <div className='drawer lg:drawer-open text-secondary bg-base-100'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      {/* Page */}
      <div className='drawer-content bg-base-100'>
        {/* Navbar */}
          <Navbar title={title} profilePhoto='./Images/pfp.jpeg' />

      </div>
      {/* Sidebar */}
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <aside className='w-80 bg-base-200 min-h-full'>
          <div className='hidden lg:block pt-3'>
            <a href='/' className='px-4 font-medium text-2xl normal-case'>
              {title}
            </a>
          </div>
          <div className='menu p-4 w-full bg-base-200'>
            <input
              type='text'
              placeholder='Search'
              className='input focus:outline-info placeholder:text-secondary bg-inherit mb-2 w-auto'
            ></input>
            <div className='divider -mt-[2px] mb-1' />
            <ul>
              <p className='font-bold mb-1 text-info'>Section 3</p>
              <li>
                <a href='/' className='hover:text-primary'>
                  Sidebar Item 1
                </a>
              </li>
              <li>
                <a href='/' className='hover:text-primary'>
                  Sidebar Item 2
                </a>
              </li>
            </ul>
            <div className='divider -mt-[2px] mb-1' />
            <ul>
              <p className='font-bold mb-1 text-info'>Section 2</p>

              <li>
                <a href='/' className='hover:text-primary'>
                  Sidebar Item 3
                </a>
              </li>
              <li>
                <a href='/' className='hover:text-primary'>
                  Sidebar Item 4
                </a>
              </li>
            </ul>
            <div className='divider -mt-[2px] mb-1' />
            <ul>
              <p className='font-bold mb-1 text-info'>Section 3</p>
              <li>
                <a href='/' className='hover:text-primary'>
                  Sidebar Item 5
                </a>
              </li>
              <li>
                <a href='/' className='justify-between hover:text-primary'>
                  Sidebar Item 6
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
