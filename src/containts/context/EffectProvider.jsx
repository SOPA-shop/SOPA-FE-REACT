// useLoading.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../component/Loader.jsx';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export const EffectContext = createContext();

const EffectProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  const messageNotification = (type, content, navigateTo) => {
    return messageApi.open({
      key: 'updatable',
      type,
      content,
      duration: 1.5,
      onClose: () => {
        if (navigateTo) {
          navigate(navigateTo);
        }
      },
    });
  };

  const value = {
    loading,
    hideLoading,
    showLoading,
    messageNotification,
  };
  return (
    <EffectContext.Provider value={value}>
      {contextHolder}
      {loading && <Loader />}
      {children}
    </EffectContext.Provider>
  );
};

EffectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EffectProvider };
