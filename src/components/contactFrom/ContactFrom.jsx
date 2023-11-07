import { useState } from 'react';
import css from './contactFrom.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const resetForm = () => {
    setState(INITIAL_STATE);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(state);
    resetForm();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css.inputName}
          value={state.name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={css.inputNumber}
          value={state.number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.buttonEditor}>
        Add contact
      </button>
    </form>
  );
};
