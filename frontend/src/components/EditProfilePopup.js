import { useState, useContext, useEffect } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({ isOpen, isLoading, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleAboutChange(evt) {
    setAbout(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ name, about });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name='edit-profile'
      title='Редактировать профиль'
      button={isLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        name='name'
        required
        minLength='2'
        maxLength='40'
        type='text'
        className='popup__input'
        value={name || ''}
        onChange={handleNameChange}
      />
      <span className='name-input-error popup__error'></span>
      <input
        name='about'
        required
        minLength='2'
        maxLength='200'
        type='text'
        className='popup__input'
        value={about || ''}
        onChange={handleAboutChange}
      />
      <span className='about-input-error popup__error'></span>
    </PopupWithForm>
  );
}
