import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' required />
            <label className='label-icon' for='search'>
              <i className='material-icons'>Search...</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
