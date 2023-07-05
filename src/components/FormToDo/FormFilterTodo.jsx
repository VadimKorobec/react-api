export const FormFilterTodo = ({ setSearchParams }) => {
  const handleChange = e => {
    setSearchParams({ filter: e.target.value });
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">
            Filter Todo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInput"
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
};
