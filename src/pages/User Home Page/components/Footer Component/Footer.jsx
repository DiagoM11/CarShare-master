import {} from 'react';
import './Footer.css'; // Import the CSS file

import facebookIcon from '/facebook.png';
import instagramIcon from '/instagram.png';
import youtubeIcon from '/youtube.png';
import pinterestIcon from '/pinterest.png';
import xIcon from '/x.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            {/* Left */}
            <div className="footer-left">
                <div className="footer-title">CarShare</div>
                <p>58 Peters St, District, Cape Town, 8214, Western Cape</p>
                <span className="footer-email">info@CarShare.com</span>
                <span className="footer-phone">+27 21 465 7786</span>
                <div className="footer-icons">
                    <img src={facebookIcon} alt="Facebook" width={16} height={16} />
                    <img src={instagramIcon} alt="Instagram" width={16} height={16} />
                    <img src={youtubeIcon} alt="YouTube" width={16} height={16} />
                    <img src={pinterestIcon} alt="Pinterest" width={16} height={16} />
                    <img src={xIcon} alt="X" width={16} height={16} />
                </div>
            </div>
            
            {/* Bottom */}
            <div className="footer-bottom">
                <div className="footer-copy">2024 CarShare Air BNB</div>
                <div className="footer-info">
                    <div>
                        <span className="footer-label">Language</span>
                        <span className="footer-value">South Africa | English</span>
                    </div>
                    <div>
                        <span className="footer-label">Currency</span>
                        <span className="footer-value">ZAR</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
