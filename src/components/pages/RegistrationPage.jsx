import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'redux/auth/thunk';
import { singUp } from 'services/auth';

export const RegistrationPage = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
    };
    singUp(newUser)
      .then(() => {
        toast.success('Registration successfully');
        dispatch(
          loginThunk({
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
          })
        );
      })
      .catch(error => console.log(error.message));
  };

  return (
    <>
      <div
        className="card position-absolute top-50 start-50 translate-middle p-2  "
        style={{ minWidth: '350px' }}
      >
        <h1 className="text-center">SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputName1"
            />
          </div>
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
          <div>
            <Link to="/login">Login</Link>
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
    </>
  );
};
