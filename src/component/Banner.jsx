import React from 'react'
import heroImage from '../hero-image.webp';

export default function Banner() {
    return (
        <div style={{ position: 'relative', zIndex: 2 }}>
            <div className='d-flex justify-content-center w-100 mt-4 px-4' >
                <div className='headtext'>
                    <h1 className='head display-2' style={{fontWeight: "bold" }}>
                    Empowering <span style={{ color: '#d65518' }}>Your</span> Digital Growth <span style={{ color: '#d65518' }}>Journey </span>Together
                    </h1>
                    <p className='head text-muted display'>Elevate your buisness game with us with tailored web services , digital marketing , content creation and much more</p>
                    <a className="btn btn-outline-dark" href='#offeringSection' >Explore More</a>
                </div>
                <div className='headimg' >
                <img src={heroImage} style={{ width: '75%', height: 'auto' }} alt="HeroImage" />
                </div>
            </div>
        </div>
    )
}
