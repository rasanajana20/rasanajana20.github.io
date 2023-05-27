import React from 'react'
import './content.css';

const Content = () => {
    return (
        <div className='content_container'>
            <div className='image_div'>
                <img src='/images/image-interactive.jpg' className='content_image' alt="image-interactive.jpg" />
            </div>

            <div className='paragraph_container'>
                <h1 className='header-text'>the leader in intractive vr</h1>
                <p className='para_text'>
                    Founded in 2011,Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies around the
                    globe.Our award-winning creations have transformed
                    businesses through digital experiences that blind to their brand.
                </p>
            </div>
        </div>
    )
}
export default Content