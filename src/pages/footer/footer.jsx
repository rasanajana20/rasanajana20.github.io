import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer-section-1'>
                <div>loopstudios</div>
                <div className='footer_icon'>
                    <img src={'/images/icon-facebook.svg'} alt="facebook icon" />
                    <img src={'/images/icon-twitter.svg'} alt="twitter icon" />
                    <img src={'/images/icon-pinterest.svg'} alt="pinterest icon" />
                    <img src={'/images/icon-instagram.svg'} alt="instagram icon" />
                </div>
            </div>

            <div className='footer-section-2'>
                <ul className='lists'>
                    <li className='list'>
                        About
                    </li>
                    <li className='list'>
                        Careers
                    </li>
                    <li className='list'>
                        Events
                    </li>
                    <li className='list'>
                        Products
                    </li>
                    <li className='list'>
                        Support
                    </li>
                </ul>
                <div className='footer_icon_mobile'>
                    <img src={'/images/icon-facebook.svg'} alt="facebook icon" />
                    <img src={'/images/icon-twitter.svg'} alt="twitter icon" />
                    <img src={'/images/icon-pinterest.svg'} alt="pinterest icon" />
                    <img src={'/images/icon-instagram.svg'} alt="instagram icon" />
                </div>
                <div> 2021 Loopstudios.Allrights reserved</div>
            </div>
        </div>
    )
}

export default Footer