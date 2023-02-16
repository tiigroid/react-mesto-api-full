import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, isLoading, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        name='add-card'
        title='Новое место'
        button={isLoading ? 'Создание...' : 'Создать'}>
          <input
              name='name'
              required
              minLength='2'
              maxLength='30'
              type='text'
              className='popup__input'
              placeholder='Название'
              value={name}
              onChange={handleNameChange}
            />
            <span className='name-input-error popup__error'></span>
            <input
              name='link'
              required
              type='url'
              className='popup__input'
              placeholder='Ссылка на картинку'
              value={link}
              onChange={handleLinkChange}
            />
            <span className='link-input-error popup__error'></span>
      </PopupWithForm>
  );
}
