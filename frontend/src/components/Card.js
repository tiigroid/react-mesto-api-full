import {useContext} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick, onCardLike, onDeleteClick}) {

  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some(like => like === currentUser._id);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onDeleteClick(card);
  }

  return (
    <article className='gallery__card'>
          <img className='gallery__image' src={card.link} alt={card.name} onClick={handleClick}/>
          <button
            aria-label='удалить'
            type='button'
            className={`gallery__button-delete button button_type_delete ${isOwn ? '' : 'button_hidden'}`}
            onClick={handleDeleteClick}
          ></button>
          <div className='gallery__box'>
            <h2 className='gallery__title'>{card.name}</h2>
            <div className='gallery__like-box'>
              <button
                aria-label='лайкнуть'
                type='button'
                className={`gallery__button-like button button_type_like ${isLiked ? 'button_type_liked' : ''}`}
                onClick={handleLikeClick}
              ></button>
              <div className='gallery__like'>{card.likes.length}</div>
            </div>
          </div>
        </article>
  )
}

