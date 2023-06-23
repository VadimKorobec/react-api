export const Header = ({ showModal }) => {
  return (
    <>
      <nav>
        <div>
          <span>Navbar</span>
          <button
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
