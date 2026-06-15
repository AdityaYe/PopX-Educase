import './MobileFrame.css';

const MobileFrame = ({ children, className = '' }) => {
    return (
        <div className="mobile-frame-screen">
            <div className={`mobile-frame ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default MobileFrame;
