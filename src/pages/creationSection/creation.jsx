import React, { useEffect, useState } from 'react'
import './creation.css'

const Creation = () => {

    const [mobileImage, setMobileImage] = useState(false);

    // reload the browser to load mobile responsive images
    useEffect(() => {
        const windowWidth = window.innerWidth;
        console.log(windowWidth)
        if (windowWidth <= 700) {
            setMobileImage(true);
        } else {
            setMobileImage(false);
        }
    }, []);
    

    const images1 = [
        {
            name: "deep earth",
            pathD: "/images/image-deep-earth.jpg",
            pathM: "/images/mobile/image-deep-earth.jpg",
        },
        {
            name: "night arcade",
            pathD: "/images/image-night-arcade.jpg",
            pathM: "/images/mobile/image-night-arcade.jpg"
        },
        {
            name: "soccer team vr",
            pathD: "/images/image-soccer-team.jpg",
            pathM: "/images/mobile/image-soccer-team.jpg",
        },
        {
            name: "the grid",
            pathD: "/images/image-grid.jpg",
            pathM: "/images/mobile/image-grid.jpg",
        }
    ];

    const images2 = [
        {
            name: "from up above vr",
            pathD: "/images/image-from-above.jpg",
            pathM: "/images/mobile/image-from-above.jpg",
        },
        {
            name: "pocket borealis",
            pathD: "/images/image-pocket-borealis.jpg",
            pathM: "/images/mobile/image-pocket-borealis.jpg",
        },
        {
            name: "the curiosity",
            pathD: "/images/image-curiosity.jpg",
            pathM: "/images/mobile/image-curiosity.jpg",
        },
        {
            name: "make it fisheye",
            pathD: "/images/image-fisheye.jpg",
            pathM: "/images/mobile/image-fisheye.jpg",
        }
    ];

    return (
        <div className='creation_container'>
            <div className='create_cont'>
                our creations
                <button className='but_cont'>see all</button>
            </div>
            <div className='creation_img'>
                {
                    images1.map(el => (
                        <div className='creation_image_div'>
                            <img src={mobileImage ? el.pathM : el.pathD} className='creation_image' alt={el.name} />
                            <p className='image_text'>{el.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className='creation_img'>
                {
                    images2.map(el => (
                        <div className='creation_image_div'>
                             <img src={mobileImage ? el.pathM : el.pathD} className='creation_image' alt={el.name} />
                            <p className='image_text'>{el.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className='but_mobile_div'>
                <button className='but_mobile'>see all</button>
            </div>
        </div>
    )
}

export default Creation