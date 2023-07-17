import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/thunk';
// import { login } from 'services/auth';

const LoginPage = () => {
  const isAuth = useSelector(state => state.auth.access_token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      loginThunk({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    // login({
    //   email: e.target.elements.email.value,
    //   password: e.target.elements.password.value,
    // }).then(console.log);
  };
  return (
    <Suspense>
      <div
        className="card position-absolute top-50 start-50 translate-middle p-2  "
        style={{ minWidth: '350px' }}
      >
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button
            //   disabled={!this.state.isChecked}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </Suspense>
  );
};

export default LoginPage;
