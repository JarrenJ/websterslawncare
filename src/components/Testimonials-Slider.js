import React from 'react';
import { Carousel } from "react-responsive-carousel";
// import { TestimonialCard } from "./pages/Testimonials";
import './testimonialSlider.css';
import '../App.css';
import './Cards.css';
import './testimonials.css';
import './Quote.css';
import "./carousel.css"
import './Services.css';

function TestimonialCardSlider(props) {
    return (
        <div className='testimonial__slider__card'>
            <div className='testimonials__text'>
                <blockquote>{props.text}</blockquote>
                <br />
                <p className='author'>- {props.info}</p>
            </div>
            {/*<div className='testimonials__rating'>*/}
            {/*    {getStars(props.rating)}*/}
            {/*</div>*/}
        </div>
    );
}

const testimonialInfo = [
    {
        quote: "We began using Webster's Lawn Care in the spring of 2020 and have been very pleased with their service. They have been reliable and courteous every week. They have also been very flexible with our needs when we've requested changes to our mowing schedule. We would recommend them to our neighbors. Thank you, Jamison.",
        author: 'Bill and Jessica Chesser. Adrian, MI'
    },
    {
        quote: "Jamison and his company took care of our lawn mowing for the summer of 2020.  He was reliably on time every week, was careful to cut the length we wanted, took care of minor issues when they popped up, and prices were fair.  He’s a friendly guy who listens to what we wanted and we are hiring him again this year!",
        author: 'Su & Garry Clift. Adrian, MI'
    },
    {
        quote: "We have utilized Webster's Lawn Care for two years.  Jamison and his team have provided tremendous professionalism, they provide a clean and consistent service which is not matched by any competitors.   Jamison's services are priced appropriately and are well worth the quality services he provides. We plan to continue utilizing Webster's Lawn Care as long as we reside in this area.",
        author: "J. Mensing"
    },
    {
        quote: "We have been so pleased with Jamison and his crew.  Each job from snow removal, cleaning up landscaping, mowing or leaf removal has been perfect.  Our lawn looks better than ever!  They are reliable and always check in with us if there are questions. He looks out for us!",
        author: "Jeff and Paula Aspacher. Adrian, MI"
    },
    {
        quote: "Webster’s has provided my lawn and snow removal services for the last 18 months. I’m very satisfied with the job they have done and how responsive they have been to any requests I make. Webster responds promptly to my messages and it has been a pleasure to work with him.",
        author: "Alden Smith, Adrian. MI"
    },
    {
        quote: "Webster Lawn Care, LLC is just a great independent lawn service.  Always punctual and professional, they take the time to not just cut your lawn, but to care for your lawn.  Coming highly recommended from a dear friend we have been very pleased since they came to work for us cutting some 5+ acres for us.  Our new neighbors signed them up the minute they moved in this year.  They are a complete service prepping our lawn in the spring and doing a complete fall clean-up. We found them to be reasonably priced for their services.  We can without reservation recommend Jamison Webster and his crew (especially Wade).",
        author: "Jim and Pam Van Doren. Irish Hills, MI"
    },
    {
        quote: "If you are considering a lawn service that is professional, efficient and reliable, look no further. Their pricing is very reasonable and I trust them to do amazing work. They take special care trimming around my many flower gardens and along the fence. You’ll never have to cleanup after them. They arrive on time, get done within time frame and are courteous. Great lawn service and highly recommend!",
        author: "M Tuttle. Temperance MI"
    }
]

const generateTestimonials = testimonialInfo.map((testimonial, index) => {
    return(
        <div className="careTest" key={index}>
            <div className="service__testimonials">
                <TestimonialCardSlider
                    text={testimonial.quote}
                    info={testimonial.author}
                    key={index}
                />
            </div>
        </div>
        )
})

function TestimonialSlider() {
    return (
        <div className="testimonial__section">
            <h1 className='testimonials__header'>See what our clients say about us</h1>
            {/*<hr className="testimonials__divider" />*/}
            <div className='testimonial__slider__container'>
                <Carousel renderThumbs={() => {}} renderIndicator={() => {}} autoPlay infiniteLoop>
                    {generateTestimonials}
                </Carousel>
            </div>
        </div>
        )
}


export default TestimonialSlider
