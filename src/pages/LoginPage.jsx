import InputField from '../components/InputField/InputField'
import Button from '../components/Button/Button'
import MobileFrame from '../components/Layout/MobileFrame'
import './PageFrames.css'

const LoginPage = () => {
    return (
        <MobileFrame className="auth-frame">
                <div>
                    <h1 style={{
                        fontSize: '31px',
                        fontWeight: '500',
                        color: '#000000',
                        marginBottom: '8px',
                        fontFamily: 'Rubik, sans-serif'
                    }}>
                        Signin to your <br />PopX account
                    </h1>
                    
                    <p style={{
                        fontSize: '19px',
                        fontWeight: '400',
                        color: '#727475',
                        marginBottom: '36px',
                        fontFamily: 'Rubik, sans-serif'
                    }}>
                        Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,
                    </p>
                </div>

                <div>
                    <form>
                        <InputField
                            label="Email Address"
                            containerClassName="login-input"
                            placeholder="Enter email address"
                            type="email"
                        />
                        <InputField
                            label="Password"
                            containerClassName="login-input login-input-last"
                            placeholder="Enter password"
                            type="password"
                        />
                        <Button disabled>Login</Button>
                    </form>
                </div>
        </MobileFrame>
    )
}

export default LoginPage
