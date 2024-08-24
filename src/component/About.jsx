import React from 'react'

export default function About() {
    return (
        <div >
            <svg width="100%" height="100%" id="svg" style={{ marginTop: "-20px" }} viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,100 C 104.34449760765548,112.58373205741627 208.68899521531097,125.16746411483254 296,115 C 383.31100478468903,104.83253588516746 453.58851674641164,71.91387559808614 542,79 C 630.4114832535884,86.08612440191386 736.9569377990431,133.17703349282294 835,147 C 933.0430622009569,160.82296650717706 1022.5837320574162,141.377990430622 1122,128 C 1221.4162679425838,114.622009569378 1330.7081339712918,107.311004784689 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#eff0ec" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,233 C 76.5263157894737,236.30143540669857 153.0526315789474,239.60287081339715 246,250 C 338.9473684210526,260.39712918660285 448.31578947368416,277.88995215311 566,279 C 683.6842105263158,280.11004784689 809.684210526316,264.8373205741627 903,248 C 996.315789473684,231.16267942583733 1056.9473684210527,212.76076555023926 1141,210 C 1225.0526315789473,207.23923444976074 1332.5263157894738,220.11961722488036 1440,233 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#eff0ec" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path></svg>
            <div id='whyUs' class="container">
                <div class="text-center mb-2-8 mb-lg-6">
                    <h2 class="display-18 display-md-16 display-lg-14 font-weight-700">Why Choose <strong class="text-primary font-weight-700">Us</strong></h2>
                    <span>The trusted source for why choose us</span>
                </div>
                <div class="row align-items-center">
                    <div class="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                        <div class="pr-md-3">
                            <div class="text-center text-sm-right mb-2-9 my-4">
                                <div class="mb-4">
                                    <span style={{ fontSize: "70px",color:"#ef6f8c" }} className="material-symbols-outlined">
                                        dashboard_customize
                                    </span>
                                    {/* <img src="https://www.bootdey.com/image/80x80/FFB6C1/000000" alt="..." class="rounded-circle imgabout"/> */}
                                </div>
                                <h4 class="sub-info" style={{marginTop:"-24px",color:"#ef6f8c"}}>Customized Solution</h4>
                                <p class="display-30 mb-0">We tailor our services to meet your unique business needs, creating custom designs and functionality that perfectly align with your brand and goals.</p>
                            </div>
                            <div class="text-center text-sm-right my-4">
                                <div class="mb-4">
                                    <span style={{ fontSize: "70px",color:"#f8bc38" }} className="material-symbols-outlined">
                                        groups
                                    </span>
                                    {/* <img src="https://www.bootdey.com/image/80x80/87CEFA/000000" alt="..." class="rounded-circle imgabout" /> */}
                                </div>
                                <h4 class="sub-info" style={{marginTop:"-24px",color:"#f8bc38"}}>Expert Team</h4>
                                <p class="display-30 mb-0"> Our experienced developers, designers, and strategists bring innovation and quality to every project, ensuring solutions that exceed your expectations.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                        <div class="why-choose-center-image">

                            <img src="https://i.ibb.co/XpQbBRj/creative-gradient-code-logo-23-2148820572-removebg-preview.png" alt="..." class="rounded-circle imgabout" />
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="pl-md-3">
                            <div class="text-center text-sm-left mb-2-9 my-4">
                                <div class="mb-4">
                                <span style={{ fontSize: "70px",color:"#4481ea" }} className="material-symbols-outlined">
                                        support_agent
                                    </span>
                                    {/* <img src="https://www.bootdey.com/image/80x80/8A2BE2/000000" alt="..." class="rounded-circle imgabout" /> */}
                                </div>
                                <h4 class="sub-info" style={{marginTop:"-24px",color:"#4481ea" }}>End to End Support</h4>
                                <p class="display-30 mb-0">From the initial consultation to post-launch, we provide comprehensive services with dedicated support, ensuring your business's success every step of the way.</p>
                            </div>

                            <div class="text-center text-sm-left my-4">
                                <div class="mb-4">
                                <span style={{ fontSize: "70px",color:"#77c8ae" }} className="material-symbols-outlined">
                                        savings
                                    </span>
                                    {/* <img src="https://www.bootdey.com/image/80x80/20B2AA/000000" alt="..." class="rounded-circle imgabout" /> */}
                                </div>
                                <h4 class="sub-info" style={{marginTop:"-24px",color:"#77c8ae" }}>Cost Effective</h4>
                                <p class="display-30 mb-0">We offer high-quality services at rates lower than the market average, ensuring you get the best value for your investment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
