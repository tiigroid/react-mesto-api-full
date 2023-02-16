import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Form({ name, title, button, link, onSubmit }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(email, password);
  }

  return (
    <section className='form'>
        <form name={name} className='form__container' onSubmit={handleSubmit}>
          <h3 className='form__title'>{title}</h3>
          <input required
            name='email'
            type='email'
            className='form__input'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
          <span className='email-input-error form__error'></span>
          <input required
            name='password'
            type='password'
            className='form__input'
            placeholder='Пароль'
            value={password}
            onChange={handlePasswordChange}
          />
          <span className='password-input-error form__error'></span>
          <button
            type='submit'
            className='form__button-submit button button_type_submit'>
          {button}
          </button>
          <Link to='/sign-in' className='form__link'>{link}</Link>
        </form>
      </section>
  )
}
