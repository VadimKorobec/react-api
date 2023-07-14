import { createAsyncThunk } from '@reduxjs/toolkit';
import { createProducts, deleteProducts, getProducts } from 'services/products';

export const getProductsThunk = createAsyncThunk(
  'products/get',
  async () => await getProducts()
);

export const createProductsThunk = createAsyncThunk(
  'products/create',
  async data => await createProducts(data)
);

export const deleteProductsThunk = createAsyncThunk(
  'products/delete',
  async id => await deleteProducts(id)
);
