import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './ContactBar.css'

const ContactBar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [isMobile, setIsMobile] = useState(false); 

    const toggleBar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 950); 
        };

        window.addEventListener('resize', handleResize); 
        handleResize(); 

        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

    return (
        <div>
            {isMobile && (
                <button 
                    onClick={toggleBar} 
                    className="toggle-button" 
                    style={{
                        right: isOpen ? '3rem' : '-1px', 
                    }}
                >
                    <i className={`fas fa-chevron-${isOpen ? 'left' : 'right'}`}></i>
                </button>
            )}
             <div className={`contact-bar ${isMobile ? (isOpen ? 'open' : 'closed') : 'visible'}`}>
                <a href="https://www.linkedin.com/in/juarezjorgear/" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=524432714711&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="whatsapp">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.facebook.com/JorgeAlJR" target="_blank" rel="noopener noreferrer" className="facebook">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/just_cykes/" target="_blank" rel="noopener noreferrer" className="instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/DancyMule" target="_blank" rel="noopener noreferrer" className="github">
                    <i className="fab fa-github"></i>
                </a>
                <a href="/Jorge_Juárez_Resume.pdf" target="_blank" rel="noopener noreferrer" className="download" download>
                    <i className="fas fa-file-download"></i>
                </a>
            </div>
        </div>
    );
};

export default ContactBar;
