import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ isOpen, isLoading, onClose, onUpdateAvatar }) {
  const avatar = useRef();

  useEffect(() => {
    avatar.current.value = '';
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({ avatar: avatar.current.value });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name='change-avatar'
      title='Обновить аватар'
      button={isLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        name='avatar'
        required
        type='url'
        className='popup__input'
        placeholder='Ссылка на картинку'
        ref={avatar}
      />
      <span className='avatar-input-error popup__error'></span>
    </PopupWithForm>
  );
}
