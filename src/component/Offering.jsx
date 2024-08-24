import React, { useContext } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

export default function Offering() {
    return (
        <div id="offeringSection" className='' style={{ background: "#eff0ec" ,position: 'relative', zIndex: 1}}>
            
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,100 C 124.02870813397129,94.18181818181819 248.05741626794259,88.36363636363636 330,102 C 411.9425837320574,115.63636363636364 451.799043062201,148.72727272727272 530,142 C 608.200956937799,135.27272727272728 724.7464114832536,88.72727272727272 849,76 C 973.2535885167464,63.27272727272727 1105.2153110047848,84.36363636363637 1205,94 C 1304.7846889952152,103.63636363636363 1372.3923444976076,101.81818181818181 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,233 C 122.17224880382773,248.08133971291866 244.34449760765546,263.1626794258373 327,265 C 409.65550239234454,266.8373205741627 452.7942583732058,255.4306220095694 527,263 C 601.2057416267942,270.5693779904306 706.4784688995215,297.11483253588517 822,279 C 937.5215311004785,260.88516746411483 1063.2918660287082,198.11004784688996 1168,183 C 1272.7081339712918,167.88995215311004 1356.3540669856459,200.444976076555 1440,233 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path></svg>
            <h4 style={{ color: "green",marginTop:"10px" }}><span style={{ color: "black" }}>Our</span> Offerings</h4>
            <div className="d-flex p-4 offeringContainer">
                <div class="d-flex justify-content-between align-items-center flex-column m-2" id="userProductCard">
                    <div id="imgdiv">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuC65C-OOjrI9IjCclEh157Qfo258FvJHLJA&s" alt="product image"
                            style={{ width: "100%", height: "100px" }} />
                    </div>
                    <h5 className='my-1'>Web Development</h5>
                    <div style={{ fontSize: "12px",paddingRight:"13px",paddingLeft:"10px" }}>
                        We build responsive, user-friendly websites that elevate your brand and drive online growth.

                    </div>

                    <a className="btn btn-danger mt-1 mb-1" href="#contact">Know More</a>
                </div>
                <div class="d-flex justify-content-between align-items-center flex-column m-2" id="userProductCard">
                    <div id="imgdiv">
                        <img src="https://helios-i.mashable.com/imagery/articles/036SM7saRgnSGmvT3XNLYXQ/hero-image.fill.size_1200x900.v1623372406.jpg" alt="product image"
                            style={{ width: "100%", height: "100px" }} />
                    </div>
                    <h5 className='my-1'>App Development</h5>
                    <div style={{ fontSize: "12px",paddingRight:"13px",paddingLeft:"10px" }}>
                    Create custom mobile apps that engage users and enhance your business efficiency
                    </div>
                    <a className="btn btn-danger mt-1 mb-1" href="#contact">Know More</a>
                </div>
                <div class="d-flex justify-content-between align-items-center flex-column m-2" id="userProductCard">
                    <div id="imgdiv">
                        <img src="https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2022/11/DM_blog_post_image_03_guetzli.jpg" alt="product image"
                            style={{ width: "100%", height: "100px" }} />
                    </div>
                    <h5 className='my-1'>Digital Marketing</h5>
                    <div style={{ fontSize: "12px",paddingRight:"13px",paddingLeft:"10px" }}>
                    Boost your online presence with targeted campaigns that connect with your audience
                    </div>
                    <a className="btn btn-danger mt-1 mb-1" href="#contact">Know More</a>
                </div>
                <div class="d-flex justify-content-between align-items-center flex-column m-2" id="userProductCard">
                    <div id="imgdiv">
                        <img src="https://cdn.logojoy.com/wp-content/uploads/20231122153748/what-is-graphic-design-header.jpg" alt="product image"
                            style={{ width: "100%", height: "100px" }} />
                    </div>
                    <h5 className='my-1'>Graphics Design</h5>
                    <div style={{ fontSize: "12px",paddingRight:"13px",paddingLeft:"10px" }}>
                    Deliver impactful designs of posters,cards and much more that captivates your audience and strengthens your brand
                    </div>
                    <a className="btn btn-danger mt-1 mb-1" href="#contact">Know More</a>
                </div>
                <div class="d-flex justify-content-between align-items-center flex-column m-2" id="userProductCard">
                    <div id="imgdiv">
                        <img src="https://www.proideators.com/wp-content/uploads/2021/03/What-is-E-Commerce-Marketplace-and-how-does-it-work-ProiDeators-Media.jpg" alt="product image"
                            style={{ width: "100%", height: "100px" }} />
                    </div>
                    <h5 className='my-1'>Marketplace Integration</h5>
                    <div style={{ fontSize: "12px",paddingRight:"13px",paddingLeft:"10px" }}>
                    Easily expand your product reach by integrating with top online marketplaces like Amazon, Fliplkart
                    </div>
                    <a className="btn btn-danger mt-1 mb-1" href="#contact">Know More</a>
                </div>
                <div class="d-flex justify-content-between align-items-center flex-column m-2" id="userProductCard">
                    <div id="imgdiv">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVhxYCwjy_p07P7AH77A6av7chEDUJ2d6ng&s" alt="product image"
                            style={{ width: "100%", height: "100px" }} />
                    </div>
                    <h5 className='my-1'>CRM and IM </h5>
                    <div style={{ fontSize: "12px",paddingRight:"13px",paddingLeft:"10px" }}>
                    Streamline your operations with tailored CRM and inventory management solutions
                    </div>
                    <a className="btn btn-danger mt-1 mb-1" href="#contact">Know More</a>
                </div>
        

            </div>
        </div>
    )
}
