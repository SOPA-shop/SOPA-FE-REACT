// useLoading.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../component/Loader.jsx';

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  const value = {
    loading,
    hideLoading,
    showLoading,
  };
  console.log(loading);
  return (
    <LoadingContext.Provider value={value}>
      {loading && <Loader />}
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LoadingProvider };
