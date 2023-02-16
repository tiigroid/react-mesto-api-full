import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Card from './Card';

export default function Main({
  cards,
  onEditProfile,
  onAddCard,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onDeleteClick
}) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-overlay' onClick={onEditAvatar}></div>
        <img
          className='profile__avatar'
          src={currentUser.avatar}
          alt='Аватар пользователя'
        />
        <div className='profile__info'>
          <h1 className='profile__name'>{currentUser.name}</h1>
          <p className='profile__about'>{currentUser.about}</p>
          <button
            aria-label='редактировать профиль'
            type='button'
            className='profile__button-edit button button_type_edit'
            onClick={onEditProfile}
          />
        </div>
        <button
          aria-label='добавить место'
          type='button'
          className='profile__button-add button button_type_add'
          onClick={onAddCard}
        />
      </section>
      <section className='gallery'>
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}
