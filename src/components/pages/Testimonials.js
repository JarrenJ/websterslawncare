import React from 'react';

import '../../App.css';
import '../Cards.css';
import '../testimonials.css';
import '../Quote.css';
// import Star from '../../assets/ratings/1.svg'
// import Half from '../../assets/ratings/half.svg'
// import StarHalf from '../../assets/ratings/1.5.svg'
// import Star2 from '../../assets/ratings/2.svg'
// import Star2Half from '../../assets/ratings/2.5.svg'
// import Star3 from '../../assets/ratings/3.svg'
// import Star3Half from '../../assets/ratings/3.5.svg'
// import Star4 from '../../assets/ratings/4.svg'
// import Star4Half from '../../assets/ratings/4.5.svg'
// import Star5 from '../../assets/ratings/5.svg'

// const getStars = (rating) => {
//     switch(rating){
//         case .5:
//             return <img height='200px' src={Half} alt='Half Star'/>;
//         case 1:
//             return <img height='200px' src={Star} alt='1 Star'/>;
//         case 1.5:
//             return <img height='200px' src={StarHalf} alt='1.5 Stars'/>;
//         case 2:
//             return <img height='200px' src={Star2} alt='2 Stars'/>;
//         case 2.5:
//             return <img height='200px' src={Star2Half} alt='2.5 Stars'/>;
//         case 3:
//             return <img height='200px' src={Star3} alt='3 Stars'/>;
//         case 3.5:
//             return <img height='200px' src={Star3Half} alt='3.5 Stars'/>;
//         case 4:
//             return <img height='200px' src={Star4} alt='4 Stars'/>;
//         case 4.5:
//             return <img height='200px' src={Star4Half} alt='4.5 Stars'/>;
//         case 5:
//             return <img height='200px' src={Star5} alt='5 Stars'/>;
//         default:
//             return 'Error'
//     }
// }

function TestimonialCard(props) {
    return (
        <div className='testimonial__review__container'>
            <div className='testimonials__text'>
                <blockquote>{props.text}</blockquote>
                <br />
                <p className='author__name'>- {props.info}</p>
            </div>
            {/*<div className='testimonials__rating'>*/}
            {/*    {getStars(props.rating)}*/}
            {/*</div>*/}
        </div>
    );
}

function Testimonials() {
    return (
        <>
        <h1 className='about'>Testimonials</h1>
        <div className='testimonial__container'>
            <div className='row'>
                <div className='column'>
                    <TestimonialCard
                        text="We began using Webster's Lawn Care in the spring of 2020 and have been very pleased with their service. They have been reliable and courteous every week. They have also been very flexible with our needs when we've requested changes to our mowing schedule. We would recommend them to our neighbors. Thank you, Jamison."
                        info="Bill and Jessica Chesser. Adrian, MI"
                        // rating={4.5}
                    />
                </div>
                <div className='column'>
                    <TestimonialCard
                        text="Jamison and his company took care of our lawn mowing for the summer of 2020.  He was reliably on time every week, was careful to cut the length we wanted, took care of minor issues when they popped up, and prices were fair.  He’s a friendly guy who listens to what we wanted and we are hiring him again this year!"
                        info="Su & Garry Clift. Adrian, MI"
                        // rating={5}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <TestimonialCard
                        text="We have utilized Webster's Lawn Care for two years.  Jamison and his team have provided tremendous professionalism, they provide a clean and consistent service which is not matched by any competitors.   Jamison's services are priced appropriately and are well worth the quality services he provides. We plan to continue utilizing Webster's Lawn Care as long as we reside in this area."
                        info="J. Mensing"
                        // rating={4}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <TestimonialCard
                        text="We have been so pleased with Jamison and his crew.  Each job from snow removal, cleaning up landscaping, mowing or leaf removal has been perfect.  Our lawn looks better than ever!  They are reliable and always check in with us if there are questions. He looks out for us!"
                        info="Jeff and Paula Aspacher. Adrian, MI"
                        // rating={3.5}
                    />
                </div>
                <div className='column'>
                    <TestimonialCard
                        text="Webster’s has provided my lawn and snow removal services for the last 18 months. I’m very satisfied with the job they have done and how responsive they have been to any requests I make. Webster responds promptly to my messages and it has been a pleasure to work with him."
                        info="Alden Smith, Adrian. MI"
                        // rating={3}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <TestimonialCard
                        text="Webster Lawn Care, LLC is just a great independent lawn service.  Always punctual and professional, they take the time to not just cut your lawn, but to care for your lawn.  Coming highly recommended from a dear friend we have been very pleased since they came to work for us cutting some 5+ acres for us.  Our new neighbors signed them up the minute they moved in this year.  They are a complete service prepping our lawn in the spring and doing a complete fall clean-up. We found them to be reasonably priced for their services.  We can without reservation recommend Jamison Webster and his crew (especially Wade)."
                        info="Jim and Pam Van Doren. Irish Hills, MI"
                        // rating={5}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <TestimonialCard
                        text="If you are considering a lawn service that is professional, efficient and reliable, look no further. Their pricing is very reasonable and I trust them to do amazing work. They take special care trimming around my many flower gardens and along the fence. You’ll never have to cleanup after them. They arrive on time, get done within time frame and are courteous. Great lawn service and highly recommend!"
                        info="M Tuttle. Temperance MI"
                        // rating={5}
                    />
                </div>
            </div>
        </div>
            <div className='testimonial__container__mobile'>
                <div className='row'>
                    <div className='column'>
                        <TestimonialCard
                            text="We began using Webster's Lawn Care in the spring of 2020 and have been very pleased with their service. They have been reliable and courteous every week. They have also been very flexible with our needs when we've requested changes to our mowing schedule. We would recommend them to our neighbors. Thank you, Jamison."
                            info="Bill and Jessica Chesser. Adrian, MI"
                            // rating={4.5}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <TestimonialCard
                            text="Jamison and his company took care of our lawn mowing for the summer of 2020.  He was reliably on time every week, was careful to cut the length we wanted, took care of minor issues when they popped up, and prices were fair.  He’s a friendly guy who listens to what we wanted and we are hiring him again this year!"
                            info="Su & Garry Clift. Adrian, MI"
                            // rating={5}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <TestimonialCard
                            text="We have utilized Webster's Lawn Care for two years.  Jamison and his team have provided tremendous professionalism, they provide a clean and consistent service which is not matched by any competitors.   Jamison's services are priced appropriately and are well worth the quality services he provides. We plan to continue utilizing Webster's Lawn Care as long as we reside in this area."
                            info="J. Mensing"
                            // rating={4}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <TestimonialCard
                            text="We have been so pleased with Jamison and his crew.  Each job from snow removal, cleaning up landscaping, mowing or leaf removal has been perfect.  Our lawn looks better than ever!  They are reliable and always check in with us if there are questions. He looks out for us!"
                            info="Jeff and Paula Aspacher. Adrian, MI"
                            // rating={3.5}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <TestimonialCard
                            text="Webster’s has provided my lawn and snow removal services for the last 18 months. I’m very satisfied with the job they have done and how responsive they have been to any requests I make. Webster responds promptly to my messages and it has been a pleasure to work with him."
                            info="Alden Smith, Adrian. MI"
                            // rating={3}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <TestimonialCard
                            text="Webster Lawn Care, LLC is just a great independent lawn service.  Always punctual and professional, they take the time to not just cut your lawn, but to care for your lawn.  Coming highly recommended from a dear friend we have been very pleased since they came to work for us cutting some 5+ acres for us.  Our new neighbors signed them up the minute they moved in this year.  They are a complete service prepping our lawn in the spring and doing a complete fall clean-up. We found them to be reasonably priced for their services.  We can without reservation recommend Jamison Webster and his crew (especially Wade)."
                            info="Jim and Pam Van Doren. Irish Hills, MI"
                            // rating={5}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <TestimonialCard
                            text="If you are considering a lawn service that is professional, efficient and reliable, look no further. Their pricing is very reasonable and I trust them to do amazing work. They take special care trimming around my many flower gardens and along the fence. You’ll never have to cleanup after them. They arrive on time, get done within time frame and are courteous. Great lawn service and highly recommend!"
                            info="M Tuttle. Temperance MI"
                            // rating={5}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
// export { TestimonialCard }
