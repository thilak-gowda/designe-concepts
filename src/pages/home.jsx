import React from "react";
import Accordion from 'react-bootstrap/Accordion';

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Heading from "../components/heading";
import Subheader from "../components/heading";
import Testimonial from "../components/testimonials";
import arow from "../assetes/images/arrow.png";

import AquaShield from '../assetes/images/design-concepts-water-resistant.webp';
import Adapt from '../assetes/images/design-concepts-adapt.webp';
import SolidCore from '../assetes/images/design-concepts-image.webp';
import Airfusion from '../assetes/images/design-conceptsairfusion.webp';

import Custom from '../assetes/images/customizable.png';

import Assurance from '../assetes/images/warrenty.png';
import transperancy from '../assetes/images/transperancy.png';







function Home() {
    return (
        <section>
            <Carousel slide={false}>
                <Carousel.Item>
                    <div className="blc-patch">

                    </div>
                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/0e06e24b-ffe1-4104-9bcb-37c673740fd9-1920x1200.jpg" className="w-100 caro-img" alt="" />
                    <Carousel.Caption>
                        {/* <p>Building Your Vision, Creating reality</p> */}
                        <h3>Building Your <span> Vision</span><br /> Creating <span>reality</span></h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="blc-patch">

                    </div>
                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/0e06e24b-ffe1-4104-9bcb-37c673740fd9-1920x1200.jpg" className="w-100 caro-img" alt="" />
                    <Carousel.Caption>
                        {/* <p>Modern Luxury</p> */}
                        <h3>Creating <span>beauty</span> <br /> inspiring <span>living</span></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="blc-patch">

                    </div>
                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/0e06e24b-ffe1-4104-9bcb-37c673740fd9-1920x1200.jpg" className="w-100 caro-img" alt="" />
                    <Carousel.Caption>

                        <h3>
                            Refined <span>style</span> <br /> effortless <span>comfort</span>

                        </h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h3 className="text-center pt-5">
                Do not hesitate to say <span className="helo"> Hello </span>
            </h3>


            <section className="about-ush text-center">
                <Heading
                    aboutUs="About Us"
                    hed11="Expertly crafting"
                    hed12="your dream"
                />


            </section>


            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sec-2im">
                                <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/0e06e24b-ffe1-4104-9bcb-37c673740fd9-1920x1200.jpg" className="or-serimg" alt="" srcset="" />
                            </div>
                        </div>
                        <div className="col-lg-7 ps-lg-5">
                            {/* className="mis-vis" */}
                            <Accordion defaultActiveKey="0" flush className="mis-vis">
                                <Accordion.Item eventKey="0" className="">
                                    <Accordion.Header className="brd-btm my-0">History</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="brd-btm ">Mission</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header className="">Vision</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                            <div className="row pt-5 px-5 px-lg-0">
                                <div className="col-lg-4 text-center">
                                    <p className="numbers mb-0">
                                        64
                                    </p>
                                    <p className="no-cli pt-2">
                                        Clients Around the World
                                    </p>
                                </div>

                                <div className="col-lg-4 text-center">
                                    <p className="numbers nm-2 mb-0">
                                        124
                                    </p>
                                    <p className="no-cli pt-2">
                                        Projects Completed
                                    </p>
                                </div>

                                <div className="col-lg-4 text-center">
                                    <p className="numbers mb-0">
                                        244K
                                    </p>
                                    <p className="no-cli pt-2">
                                        Square Feet
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flx pt-5">

                        <h2 className="exp-ser">
                            Expertise in Interior drsigne
                        </h2>

                        <p className="sm-acont text-center w-50 d-block mx-auto pt-3 abtt-c">
                            We turn your interior design dreams into reality with our specialized touch in elegant and functional spaces.
                        </p>

                        <a href="" className="our-ser d-block">
                            Our Services
                        </a>


                        <div className="serv-points mt-5">
                            <p className="blt-pts">
                                <img src={arow} alt="" className="arow me-4" />
                                Modular kitchens
                            </p>

                            <p className="blt-pts">
                                <img src={arow} alt="" className="arow me-4" />
                                Modular wardrobes
                            </p>

                            <p className="blt-pts">
                                <img src={arow} alt="" className="arow me-4" />
                                Lighting
                            </p>

                            <p className="blt-pts">
                                <img src={arow} alt="" className="arow me-4" />
                                Pooja unit
                            </p>
                            <p className="blt-pts">
                                <img src={arow} alt="" className="arow me-4" />
                                CNC Wood Carving
                            </p>

                            <p className="blt-pts">
                                <img src={arow} alt="" className="arow me-4" />
                                Civil work
                            </p>

                            <p className="blt-pts">
                                <img src={arow} alt="" className="arow me-4" />
                                False ceiling
                            </p>

                            <p className="blt-pts">
                                <img src={arow} alt="" className="arow me-4" />
                                Wall design {'&'} painting
                            </p>
                        </div>

                    </div>
                </div>
            </section>



            <section>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6">
                            <Heading
                                aboutUs="Process"
                                hed11="Designing with Innovation "
                            // hed12="Process"
                            />

                            <p className="pt-2 ps-5 ms-3 mt-4">
                                <img src={Custom} alt="" className="proc-img2 me-2" />  <b>
                                    Custom-Crafted Innovations
                                </b>
                            </p>


                            <p className="pt-2 ps-5 ms-3">
                                <img src={Assurance} alt="" className="proc-img2 me-2" />  <b> Backed by a Decade of Assurance¹</b><br />

                            </p>

                            <p className="pt-2 ps-5 ms-3">
                                <img src={transperancy} alt="" className="proc-img2 me-2" />  <b>
                                    Clear-Cut Pricing Transparency
                                </b>

                            </p>

                        </div>

                        <div className="col-lg-6 pt-5 mt-5">





                            <p>
                                <img src={AquaShield} alt="" className="proc-img me-2" />  <b>  AquaShield™ Technology</b><br />
                                <span className="ps-5 d-block"> Precision-sealed edges that block moisture, keeping your modular cabinets durable and flawless.
                                </span>
                            </p>


                            <p>
                                <img src={Airfusion} alt="" className="proc-img me-2" />  <b>  AirFusion™ Technology</b><br />
                                <span className="ps-5 d-block"> Ultra-smooth panel finishes crafted without air pockets, ensuring a seamless and luxurious look.
                                </span>
                            </p>



                            <p>
                                <img src={SolidCore} alt="" className="proc-img me-2" />  <b>  SolidCore™ Technology</b><br />
                                <span className="ps-5 d-block">  A reinforced structural framework for modular cabinets, delivering unmatched strength and longevity.
                                </span>
                            </p>

                            <p>
                                <img src={Adapt} alt="" className="proc-img me-2" />  <b> AdaptFlow™ Technology</b><br />
                                <span className="ps-5 d-block"> Intelligently designed kitchens optimized for ergonomic efficiency, enhancing accessibility, simplifying daily tasks, and reducing physical strain for a seamless cooking experience.
                                </span>
                            </p>

                            <a href="" className="get-intouch text-center mt-5 d-block">
                                Get in Touch!
                            </a>

                        </div>
                    </div>
                </div >
            </section >


            <section className="about-ush text-center">
                <div className="container">
                    <Heading

                        hed11="Showcase"
                    // aboutUs="Quiet Space"

                    />
                    <div className="d-flex justify-content-center pb-5">
                        <div className="sub-hed ">
                            <span className="line"></span>
                            <span>Bringing Visions to Reality</span>
                            <span className="line"></span>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4">
                            <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Ultra-realistic-photo-of-Modern-take-on-bali-ins-2-650x1300.jpg" className="w-100 sho-mn-img" alt="" />
                        </div>
                        <div className="col-lg-8 cl-hig">
                            <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-bali-inspired-small-apartment-white-1300x650.jpg" className="w-100 im-1" alt="" />

                            <div className="row ">
                                <div className="col-lg-6">
                                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-upscale-bali-inspired-small-apartme-4-1300x1300.jpg" className="w-100 im-2 pt-4 " alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-upscale-bali-inspired-small-apartme-4-1300x1300.jpg" className="w-100 im-3 pt-4" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 pt-4">
                            <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-upscale-bali-inspired-small-apartme-copy.jpg" alt="" className="w-100 img-sec-2" />
                        </div>

                        <div className="col-lg-4 pt-4">
                            <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-upscale-bali-inspired-small-apartme-copy.jpg" alt="" className="w-100 img-sec-2" />
                        </div>

                    </div>
                </div>

            </section>




            <section>
                <Heading
                    aboutUs="Testimonials"
                    hed11="Let our clients speak "
                    hed12="for us !"
                />

                <Testimonial />

            </section>


            <section>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <Heading
                                aboutUs="Team"
                                hed11="Meet Our"
                                hed12="Designers"
                            />
                        </div>

                        <div className="col-lg-6">
                            <p>
                                Transforming a space involves understanding and applying key design principles to create a harmonious and functional environment.
                            </p>

                            <a href="" className="get-intouch mt-5">
                                Get in Touch!
                            </a>

                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-3">
                            <div className="per-img">
                                <img src="" alt="" />
                                <div className="pos-ab">
                                    <p className="designation">
                                        Lead Designer
                                    </p>
                                    <p className="per-name">
                                        Mark Thompson
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5 pt-lg-5">
                            <div className="per-img">
                                <img src="" alt="" />
                                <div className="pos-ab">
                                    <p className="designation">
                                        Lead Designer
                                    </p>
                                    <p className="per-name">
                                        Mark Thompson
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5 pt-lg-5">
                            <div className="per-img">
                                <img src="" alt="" />
                                <div className="pos-ab">
                                    <p className="designation">
                                        Lead Designer
                                    </p>
                                    <p className="per-name">
                                        Mark Thompson
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5 mt-lg-0 pt-lg-0">
                            <div className="per-img">
                                <img src="" alt="" />
                                <div className="pos-ab">
                                    <p className="designation">
                                        Lead Designer
                                    </p>
                                    <p className="per-name">
                                        Mark Thompson
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section >
    );
}

export default Home;

