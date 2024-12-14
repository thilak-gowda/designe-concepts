import React from "react";
import Heading from "./heading";


function Footer() {
    return (
        <>

            <div className="footer py-5 mt-5">
                {/* <div className="ftr-cover"></div> */}
                <div className="container py-5 px-4 z-in">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-header">

                                Let's <br /> Connect
                            </div>
                        </div>

                        <div className="col-md-8 ftr-cnt py-4 px-4">
                            <div className="row">
                                <p className="text-white ftr-txt">
                                    At Design Concepts, we seamlessly integrate functionality and aesthetics to deliver tailored home designs that fulfill every homeowner's unique needs. Our expert designers specialize in crafting bespoke interior designs and decor that resonate with your lifestyle. Whether you're seeking sophisticated living room layouts or innovative, space-saving solutions, our team ensures you find the perfect decor and design to suit your style. Our comprehensive service includes total integrated solutions for corporate and residential projects, ensuring that every detail is meticulously planned and executed. With unwavering support and quality assurance, you can explore a multitude of inspiring interior design ideas with us. Visit Design Concepts today for a consultation and take the first step towards your dream home.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}


export default Footer;