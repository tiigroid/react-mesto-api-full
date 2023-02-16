export default function ImagePopup({ isOpen, onClose, card}) {
  return (
    <section className={`popup popup_type_fullview ${isOpen ? 'popup_opened' : ''}`}>
        <div className='popup__fullview'>
          <button
            aria-label='закрыть'
            type='button'
            className='popup__button-close button button_type_close'
            onClick={onClose}
          ></button>
          <img className='popup__image' src={card.link} alt={card.name} />
          <p className='popup__caption'>{card.name}</p>
        </div>
    </section>
  )
}
