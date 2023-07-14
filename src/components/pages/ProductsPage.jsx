import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductsThunk,
  getProductsThunk,
} from '../../redux/product/thunk';
import { productsSelector } from 'redux/product/selectors';

export const ProductsPage = () => {
  const { products, error, isLoading } = useSelector(productsSelector);

  const dispatch = useDispatch();

  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visual-hidden">Loading...</span>
        </div>
      )}
      {sortedProducts && (
        <div className="container text-center">
          <div className="row">
            {sortedProducts.map(({ id, title, description, images, price }) => (
              <div className="col" key={id}>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={images[0]} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price} $</p>
                    <p className="card-text">{description}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteProductsThunk(id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <h2>{error}</h2>};
    </>
  );
};
