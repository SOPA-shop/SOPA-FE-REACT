import HashLoader from 'react-spinners/HashLoader';
import '../assets/scss/loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__content">
        <HashLoader color="#C1F651" size={70} />
      </div>
    </div>
  );
};
export default Loader;
