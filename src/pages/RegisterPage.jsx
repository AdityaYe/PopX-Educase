import { useState } from 'react'
import InputField from '../components/InputField/InputField'
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/Layout/MobileFrame'
import './PageFrames.css'

const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: 'Marry Doe',
        phoneNumber: 'Marry Doe',
        email: 'Marry Doe',
        password: 'Marry Doe',
        companyName: 'Marry Doe',
        isAgency: 'yes'
    });
    const [isPasswordEdited, setIsPasswordEdited] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setIsPasswordEdited(true);
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        navigate('/profile');
    };

    return (
        <MobileFrame className="auth-frame register-frame">

                <div style={{
                    marginBottom: '22px',
                    marginTop: '8px'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <h1 style={{
                            fontSize: '28px',
                            fontWeight: '600',
                            lineHeight: '1.3',
                            color: '#1D2939',
                            fontFamily: 'Rubik, sans-serif',
                            margin: 0
                        }}>
                            Create your <br />PopX account
                        </h1>

                    </div>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                        <InputField
                            label="Full Name"
                            required
                            type="text"
                            placeholder="Enter your full name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Phone number"
                            required
                            type="tel"
                            placeholder="Enter your phone number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Email address"
                            required
                            type={formData.email === 'Marry Doe' ? 'text' : 'email'}
                            placeholder="Enter your email address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Password"
                            required
                            type={isPasswordEdited ? 'password' : 'text'}
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Company name"
                            type="text"
                            placeholder="Enter your company name"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />

                        <InputField
                            label="Are you an Agency?"
                            required
                            type="radio"
                            name="isAgency"
                            options={[
                                { label: 'Yes', value: 'yes' },
                                { label: 'No', value: 'no' }
                            ]}
                            value={formData.isAgency}
                            onChange={handleChange}
                        />

                        <div
                            className="register-submit"
                            style={{
                                paddingBottom: '16px',
                                marginTop: '188px'
                            }}>
                            <Button type="submit">
                                Create Account
                            </Button>
                        </div>
                    </form>
                </div>
        </MobileFrame>
    )
}

export default RegisterPage
