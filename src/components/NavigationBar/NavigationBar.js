import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className='mb-12'>
      <div className="navbar bg-base-100">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content p-2 shadow bg-slate-400 rounded-box w-52">
              <li><Link>Item 1</Link></li>
              <li><Link>Item 3</Link></li>
            </ul>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link>Item </Link></li>
              <li><Link>Item 3</Link></li>
            </ul>
          </div>
          <div>
            <div className="form-control">
              <input type="text"
                placeholder="Type here"
                className="input input-bordered input-secondary w-full max-w-xs" />
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default NavigationBar;