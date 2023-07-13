import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getNewsThunk } from 'redux/news/newsReducer';

export const Header = ({ showModal }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const dispatch = useDispatch();

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
              <NavLink className="nav-link text-white" to="/news">
                News
              </NavLink>
              <NavLink className="nav-link text-white" to="/todo">
                Todo
              </NavLink>
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
          <button
            className="btn btn-outline-seccess"
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={handleLogin}
          >
            Login
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
