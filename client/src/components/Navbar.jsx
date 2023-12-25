import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goToPage } from '../utils/reducers/statusSlice';
import '../styles/Navbar.scss';

export default function Navbar() {
  const user = useSelector((state) => state.status.user);
  const page = useSelector((state) => state.status.page);
  const dispatch = useDispatch();
  if (page !== 'LOGIN' && page !== 'SIGN_UP')
    return (
      <div className='container-of-navbar' style={{ marginTop: '500px' }}>
        <nav className='navbar'>
          {user && (
            <>
              <div className='nav-items'>
                <button
                  className='nav-item'
                  onClick={() => dispatch(goToPage('HOME'))}
                >
                  HOME
                </button>
                <button
                  className='nav-item'
                  onClick={() => dispatch(goToPage('ADD_TO_WOBBEDROBE'))}
                >
                  ADD TO WOBBEDROBE
                </button>
                <button
                  className='nav-item'
                  onClick={() => dispatch(goToPage('VIEW_WOBBEDROBE'))}
                >
                  VIEW WOBBEDROBE
                </button>
                <button
                  className='nav-item'
                  onClick={() => dispatch(goToPage('ADD_TO_OOTD'))}
                >
                  ADD OOTD
                </button>
                <button
                  className='nav-item'
                  onClick={() => dispatch(goToPage('GET_INSPIRED'))}
                >
                  GET INSPIRED
                </button>
                <button
                  className='nav-item'
                  onClick={() => dispatch(goToPage('VIEW_LOOKBOOK'))}
                >
                  VIEW LOOKBOOK
                </button>
                <button
                  className='nav-item'
                  onClick={() => dispatch(goToPage('LANDING_PAGE'))}
                >
                  {/* need to add logic to log user out */}
                  LOGOUT
                </button>
              </div>
            </>
          )}
        </nav>
      </div>
    );
}
