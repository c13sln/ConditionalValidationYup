import { userSchema } from './Validations/UserValidation'

function App() {
  const createUser = async (event: any) => {
    event.preventDefault()
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      passwordNeeded: event.target[3].checked,
    }
    console.log(formData)
    const isValid = await userSchema.isValid(formData)
    console.log('is valid: ', isValid)
  }

  return (
    <div className="App">
      <h1>Yup conditional validation</h1>
      <form onSubmit={createUser}>
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="email@email.com" />
        <input type="password" placeholder="password123" />
        <input type="checkbox" id="validatePassword" />
        <label className="form-check-label" htmlFor="validatePassword">
          Validate password
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
