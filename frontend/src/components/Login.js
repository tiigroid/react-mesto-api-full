import Form from './Form';

export default function Login({ onLogin }) {

  function handleSubmit(email, password) {
    onLogin(email, password)
  }

  return (
    <Form
      name='login'
      title ='Вход'
      button='Вход'
      onSubmit={handleSubmit}
    />
  )
}
