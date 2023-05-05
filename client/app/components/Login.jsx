import { Form } from "@remix-run/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
export default function Login() {
    return <div className="login">
    <Form method='post' className='form'>
        <h1>Welcome to VietNam Registry</h1>
        <h6>Enter your credentials to access your account</h6>
        {/* {data && data.errors && <p>Invalid Login</p>} */}
        <label className='input'>
            <FontAwesomeIcon icon={faEnvelope} />
            <input name='email' id="email" placeholder="Please enter your email" required></input>
        </label>
        <label className='input'>
        <FontAwesomeIcon icon={faKey} size="sm" />
        <input type='password' name='password' id='password' placeholder='Please enter your password' required></input>
        </label>
        <button className='button'>Login</button>
    </Form>
</div>
}

