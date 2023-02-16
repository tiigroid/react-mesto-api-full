export default function PopupWithForm({ name, title, button, isOpen, onClose, onSubmit, children }) {
  return (
    <section className={`popup popup_type_window ${name}-popup ${isOpen ? 'popup_opened' : ''}`}>
        <form name={name} className='popup__window popup__window_form' onSubmit={onSubmit}>
          <button
            aria-label='закрыть'
            type='button'
            className='popup__button-close button button_type_close'
            onClick={onClose}
          />
          <h3 className='popup__title'>{title}</h3>
          {children}
          <button
            type='submit'
            className='popup__button-submit button button_type_submit'
          >
          {button}
          </button>
        </form>
      </section>
  )
}
