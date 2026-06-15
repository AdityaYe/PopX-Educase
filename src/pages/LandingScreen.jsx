import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/Layout/MobileFrame'
import './PageFrames.css'

const LandingScreen = () => {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    }

    const handleLoginClick = () => {
        navigate('/login');
    }

    return (
        <MobileFrame className="landing-frame">
                <div style={{ flex: 1 }}></div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '32px'
                }}>
                    <h1 style={{
                        fontSize: '28px',
                        fontWeight: '600',
                        color: '#1D2939',
                        margin: 0,
                        fontFamily: 'Rubik, sans-serif'
                    }}>
                        Welcome to PopX
                    </h1>
                    <p style={{
                        fontSize: '17px',
                        color: '#74777B',
                        margin: 0,
                        lineHeight: '1.5',
                        fontFamily: 'Rubik, sans-serif'
                    }}>
                        Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    paddingBottom: '16px'
                }}>
                    <Button
                        onClick={handleRegisterClick}
                    >
                        Create Account
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={handleLoginClick}
                    >
                        Already Registered? Login
                    </Button>
                </div>
        </MobileFrame>
    )
}

export default LandingScreen
