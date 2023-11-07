import css from './filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <div className={css.filter}>
    <label className={css.labelFilter}>
      Filter
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={css.filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
