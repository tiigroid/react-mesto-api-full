import PopupWithForm from './PopupWithForm';

export default function DeleteCardPopup({ card, isOpen, isLoading, onClose, onCardDelete }) {

    function handleSubmit(evt) {
    evt.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name='delete-card'
      title='Вы уверены?'
      button={isLoading ? 'Удаление...' : 'Да'}
    />
  );
}
