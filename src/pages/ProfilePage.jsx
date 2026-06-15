import { useState } from 'react';
import avatarImg from '../assets/avatar.png';
import cameraIcon from '../assets/camera-icon.png';
import MobileFrame from '../components/Layout/MobileFrame';
import './PageFrames.css';

const getInitialUser = () => {
    const defaultUser = {
        fullName: 'Marry Doe',
        email: 'Marry@Gmail.com'
    };

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
        return defaultUser;
    }

    try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.fullName) {
            return {
                fullName: parsedUser.fullName,
                email: parsedUser.email || defaultUser.email
            };
        }
    } catch (error) {
        console.error("Error parsing user from localStorage:", error);
    }

    return defaultUser;
};

const ProfilePage = () => {
    const [user] = useState(getInitialUser);
    const displayEmail = user.email === 'Marry Doe' || user.email === 'Marry@Gmail.Com'
        ? 'Marry@Gmail.com'
        : user.email;

    return (
        <MobileFrame className="profile-frame">

                <div style={{
                    height: '64px',
                    width: '100%',
                    borderBottom: '1px solid #E5E5E5',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 24px',
                    boxSizing: 'border-box',
                    backgroundColor: '#FFFFFF'
                }}>
                    <h2 style={{
                        fontSize: '18px',
                        fontWeight: '400',
                        color: '#1D2939',
                        margin: 0,
                        fontFamily: 'Rubik, sans-serif'
                    }}>
                        Account Settings
                    </h2>
                </div>


                <div style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#F7F8F9',
                    flex: 1
                }}>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>

                        <div style={{
                            position: 'relative',
                            width: '80px',
                            height: '80px'
                        }}>
                            <img
                                src={avatarImg}
                                alt="User Avatar"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }}
                            />

                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                backgroundColor: '#6C25FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px solid #FFFFFF',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer'
                            }}>
                                <img
                                    src={cameraIcon}
                                    alt="Camera Icon"
                                    style={{
                                        width: '25px',
                                        height: '25px'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            transform: 'translateY(-18px)'
                        }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#1D2939',
                                margin: 0,
                                fontFamily: 'Rubik, sans-serif'
                            }}>
                                {user.fullName}
                            </h3>
                            <p style={{
                                fontSize: '14px',
                                color: '#1D2939',
                                margin: 0,
                                fontFamily: 'Rubik, sans-serif'
                            }}>
                                {displayEmail}
                            </p>
                        </div>
                    </div>


                    <p style={{
                        fontSize: '14px',
                        fontWeight: '400',
                        color: '#1D2939',
                        lineHeight: '1.6',
                        marginTop: '28px',
                        marginBottom: '28px',
                        marginLeft: '-3px',
                        width: 'calc(100% + 15px)',
                        textAlign: 'left',
                        fontFamily: 'Rubik, sans-serif'
                    }}>
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>


                    <div className="profile-divider"></div>
                    <div className="profile-divider profile-divider-bottom"></div>
                </div>
        </MobileFrame>
    );
};

export default ProfilePage;
