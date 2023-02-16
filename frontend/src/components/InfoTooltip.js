export default function InfoTooltip({ isOpen, issueOccured, onClose, titles }) {
  return (
    <section className={`popup popup_type_window ${ isOpen ? 'popup_opened' : ''}`}>
        <div className='popup__window' >
          <button
            aria-label='закрыть'
            type='button'
            className='popup__button-close button button_type_close'
            onClick={onClose}
          ></button>
          <div className={`popup__icon popup__icon_type_${ issueOccured ? 'fail' : 'success' }`}></div>
          <h3 className='popup__title' style={{textAlign: 'center', alignSelf: 'center', paddingBottom: 23}}>
            { issueOccured ?  titles.fail : titles.regSuccess }</h3>
        </div>
      </section>
  )
}
