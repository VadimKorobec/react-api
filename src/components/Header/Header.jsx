export const Header = ({ showModal }) => {
  return (
    <>
      <nav className="navbar bg-dark mb-3">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-success ">Navbar</span>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link disabled">Disabled</a>
            </div>
          </div>
          <button
            className="btn btn-outline-seccess"
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={showModal}
          >
            Open Modal
          </button>
        </div>
      </nav>
    </>
  );
};
