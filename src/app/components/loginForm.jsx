import React from 'react'

const LoginForm = () => {
  const handleSubmit = () => {
    return null
  }
  return (
    <>
      <div className="d-flex modal-body justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center"
        >
          <p>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" className="ms-4" />
          </p>
          <p>
            <label htmlFor="password">Пароль</label>{' '}
            <input
              id="password"
              type="password"
              name="password"
              className="ms-1"
            />
          </p>
        </form>
      </div>
      <div className="d-flex justify-content-center modal-footer">
        {/* todo:Link to страница пользователя и страница регистрации */}
        <button
          type="submit"
          className="btn btn-danger"
          data-bs-dismiss="modal"
        >
          Войти
        </button>
        или
        <button type="button" className="btn btn-danger">
          Зарегистрироваться
        </button>
      </div>
    </>
  )
}

export default LoginForm
