import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { Form, FormControl, Button } from "react-bootstrap"
import { selectUser } from "../store/selectors/user"
import { login, signup } from "../store/actions/user"

export default function NavBarInput() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginMode, setLoginMode] = useState(true)
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  function handleSubmit(event) {
    event.preventDefault()
    if (loginMode) {
      dispatch(login(email, password))
    } else {
      dispatch(signup(email, password))
    }
  }
  return (
    <div>
      <div>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Email"
            className="mr-sm-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            type="password"
            placeholder="Password"
            className="mr-sm-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {user.email}
          {loginMode ? (
            <>
              <Button
                type="submit"
                variant="outline-danger"
                style={{ width: "80px" }}
              >
                Login
              </Button>
            </>
          ) : (
            <Button
              type="submit"
              variant="outline-success"
              style={{ width: "80px" }}
            >
              Signup
            </Button>
          )}
        </Form>
      </div>
      <div style={{ textAlign: "right" }}>
        <Button
          className="sign-up-button"
          variant="link"
          onClick={() => {
            setLoginMode(!loginMode)
          }}
        >
          {loginMode ? "Click here to Sign Up" : "Click here to Login"}
        </Button>
      </div>
    </div>
  )
}
