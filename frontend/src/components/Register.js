import Form from './Form';

export default function Register({ onRegister}) {

  function handleSubmit(email, password) {
    onRegister(email, password)
  }

  return (
    <Form
      name='register'
      title ='Регистрация'
      button='Зарегистрироваться'
      link={'Уже зарегистрированы? Войти'}
      onSubmit={handleSubmit}
    />
  )
}

