import { useEffect, useRef } from "react";

const testimonials = [
    {
        id: 1,
        name: "Emma Wilson",
        role: "Furniture Rescuer",
        image: "/images/person-1.png",
        text: "I love the idea of giving furniture a second life. Finding unique pieces while reducing waste makes furnishing a home so much more meaningful.",
    },
    {
        id: 2,
        name: "Daniel Carter",
        role: "Second-Hand Furniture Enthusiast",
        image: "/images/person-3.png",
        text: "It's wonderful to see a place where pre-loved furniture can find a new home. Every piece has a story, and every rescue makes a difference.",
    },
    {
        id: 3,
        name: "Sophie Martin",
        role: "Sustainable Living Advocate",
        image: "/images/person-2.png",
        text: "Second Life Furniture makes sustainable choices feel simple and inspiring. It's about creating beautiful spaces without always buying something new.",
    },
];

export default function Testimonials() {
    const sliderRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        if (!sliderRef.current || !navRef.current || !window.tns) {
            return;
        }

        const slider = window.tns({
            container: sliderRef.current,
            items: 1,
            axis: "horizontal",
            controlsContainer: navRef.current,
            swipeAngle: false,
            speed: 700,
            nav: true,
            controls: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3500,
            autoplayButtonOutput: false,
        });

        return () => {
            slider?.destroy();
        };
    }, []);

    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                        <h2 className="section-title">Testimonials</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonial-slider-wrap text-center">
                            <div id="testimonial-nav" ref={navRef}>
                                <span className="prev" data-controls="prev">
                                    <span className="fa fa-chevron-left" />
                                </span>
                                <span className="next" data-controls="next">
                                    <span className="fa fa-chevron-right" />
                                </span>
                            </div>

                            <div className="testimonial-slider" ref={sliderRef}>
                                {testimonials.map((testimonial) => (
                                    <div className="item" key={testimonial.id}>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">
                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>“{testimonial.text}”</p>
                                                    </blockquote>

                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img
                                                                src={testimonial.image}
                                                                alt={testimonial.name}
                                                                className="img-fluid"
                                                            />
                                                        </div>

                                                        <h3 className="font-weight-bold">
                                                            {testimonial.name}
                                                        </h3>

                                                        <span className="position d-block mb-3">
                                                            {testimonial.role}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
