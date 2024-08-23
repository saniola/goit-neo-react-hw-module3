import PropTypes from 'prop-types';
import style from './SearcBox.module.css';

const SearchBox = ({ filter, handleFilterChange }) => {
  return (
    <>
      <p className={style.text}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
      />
    </>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default SearchBox;
