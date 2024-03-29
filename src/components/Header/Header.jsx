// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/slice';
import { getNewsThunk } from 'redux/news/thunk';
// import { getProductsThunk } from 'redux/product/thunk';
import { dellToken } from 'services/auth';

export const Header = ({ showModal }) => {
  const { profile, access_token } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   access_token && dispatch(getProductsThunk());
  // }, [access_token, dispatch]);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    dispatch(logOut());
    dellToken();
  };

  return (
    <>
      <nav className="navbar bg-dark mb-3 navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-success ">Navbar</span>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-link text-white "
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
              {access_token && (
                <>
                  <NavLink className="nav-link text-white" to="/news">
                    News
                  </NavLink>
                  <NavLink className="nav-link text-white" to="/todo">
                    Todo
                  </NavLink>
                  <NavLink className="nav-link text-white" to="/products">
                    Products
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <button
            className="btn btn-outline-seccess"
            type="button"
            style={{ backgroundColor: 'pink', marginRight: '10px' }}
            onClick={showModal}
          >
            Open Modal
          </button>
          {profile && <div className="text-white">{profile.name}</div>}
          <button
            className="btn btn-outline-seccess"
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={profile ? handleLogOut : handleLogin}
          >
            {profile ? 'Log Out' : 'LogIn'}
          </button>
          <button
            className="btn btn-outline-seccess"
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={() => {
              dispatch(getNewsThunk());
            }}
          >
            thunk
          </button>
        </div>
      </nav>
    </>
  );
};
