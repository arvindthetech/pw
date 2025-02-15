import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function HomePage() {
    const [showToast, setShowToast] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [couponCode, setCouponCode] = useState("");

    const courses = {
        "JEE Preparation": "CPCA0817",
        "NEET Preparation": "CPCA0817",
        "ESE" : "CPCA0817",
        "GATE" : "CPCA0817",
        "AE/JE" : "CPCA0817",
        "Olympiad" : "CPCA0817",
        "UPSC Foundation": "CPCA0817",
        "State PSC": "CPCA0817",
        "SSC" : "CPCA0817",
        "Banking" : "CPCA0817",
        "Judiciary" : "CPCA0817",
        "Teaching" : "CPCA0817",
        "Railways" : "CPCA0817",
        "UP Exams" : "CPCA0817",
        "JAIIB & CAIIB" : "CPCA0817",
        "Bihar exams" : "CPCA0817",
        "Nursing Exams" : "CPCA0817", 
        "WB Eaxam" : "CPCA0817",
        "Defence" : "CPCA0817",
        "MBA" : "CPCA0817",
        "IPMAT" : "CPCA0817",
        "IIT JAM" : "CPCA0817",
        "CSIR NET" : "CPCA0817",
        "LAW" : "CPCA0817",
        "CUET UP & PG" : "CPCA0817",
        "UGC NET" : "CPCA0817",
        "GMAT" : "CPCA0817",
        "Design & Arch" : "CPCA0817",
        "NEET PG" : "CPCA0817",
        "Pharma" : "CPCA0817",
        "CA" : "CPCA0817",
        "CS" : "CPCA0817",
        "ACCA" : "CPCA0817",
        "English Wallah" : "CPCA0817",
        "IELTS" : "CPCA0817",
        "TOEFL" : "CPCA0817",
        "Foundation(class 6-10)" : "CPCA0817",
        "commerce" : "CPCA0817",
        "Arts" : "CPCA0817",
        "CouriousJr(3rd - 8th)" : "CPCA0817",
        "CAT Preparation": "CPCA0817"
    };

    const universalCouponCode = "CPCA0817";

    const handleCourseSelection = (event) => {
        const selected = event.target.value;
        setSelectedCourse(selected);
        setCouponCode(courses[selected] || "");
    };

    const copyCoupon = () => {
        if (couponCode) {
            navigator.clipboard.writeText(couponCode);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    const shareCoupon = async () => {
        const shareData = {
            title: "Get Discount on PW Courses!",
            text: `Use the coupon code ${universalCouponCode} to get amazing discounts on PW courses. Enroll now!`,
            url: "https://www.pw.live/" // Replace with your desired link
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback for browsers that don't support the Share API
                const shareText = `${shareData.text}\n${shareData.url}`;
                navigator.clipboard.writeText(shareText);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            }
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    return (
        <div className="container mt-4">
            {/* Header Section */}
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#002492"}}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">PW Courses</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link text-white" href="#courses">Courses</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#testimonials">Testimonials</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#faqs">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Carousel Section */}
            <Carousel className="mt-4">
    {["C1.png", "C2.png", "C3.png"].map((img, index) => (
        <Carousel.Item key={index}>
            <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/img/${img}`}  
                alt={`Slide ${index + 1}`}
            />
        </Carousel.Item>
    ))}
</Carousel>


            {/* Course Selection Section */}
            <h2 className="text-center mt-5">Select Your Course and Get Coupon Code</h2>
            <div className="text-center mt-3">
                <select className="form-select w-50 mx-auto" onChange={handleCourseSelection} value={selectedCourse}>
                    <option value="">-- Select Course --</option>
                    {Object.keys(courses).map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                    ))}
                </select>
                {couponCode && (
                    <div className="mt-3">
                        <p className="fw-bold">Your Coupon Code: <span className="text-primary">{couponCode}</span></p>
                        <button className="btn btn-success" onClick={copyCoupon}>Copy Code</button>
                    </div>
                )}
            </div>

            {/* Course Section */}
            <h2 id="courses" className="text-center mt-4">Our Top Courses</h2>
            <div className="row">
                {[{ title: "JEE Preparation", img: "/img/JEE.png" }, { title: "NEET Preparation", img: "/img/NEET.png" }, { title: "UPSC Foundation", img: "/img/UPSC.png" }].map((course, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card p-3">
                            <img src={course.img} className="card-img-top" alt={course.title} />
                            <h3>{course.title}</h3>
                            <p>Best courses for students</p>
                            <button className="btn btn-primary w-100" onClick={copyCoupon}>Get Discount</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Universal Coupon Code Section */}
            <h2 className="text-center mt-5">Universal Coupon Code</h2>
            <div className="text-center mt-3">
                <p className="fw-bold">Your Universal Coupon Code: <span className="text-primary">{universalCouponCode}</span></p>
                <button className="btn btn-success me-2" onClick={() => copyCoupon(universalCouponCode)}>Copy Code</button>
                <button className="btn btn-info" onClick={shareCoupon}>Share Code</button>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="toast-container position-fixed bottom-0 end-0 p-3">
                    <div className="toast show bg-success text-white" role="alert">
                        <div className="toast-header">
                            <strong className="me-auto">Success</strong>
                            <button type="button" className="btn-close" onClick={() => setShowToast(false)}></button>
                        </div>
                        <div className="toast-body">
                            Coupon Code {couponCode} copied!
                        </div>
                    </div>
                </div>
            )}

            {/* Testimonials Section */}

<div id="testimonials" className="mt-5">
    <h2 className="text-center mb-4">Student Success Stories</h2>
    <Carousel>
        {/* Testimonial 1 - JEE Aspirant */}
        <Carousel.Item>
            <div className="bg-light p-4 rounded text-center">
                <p className="fs-5">
                    "Thanks to PW, I got a huge discount on my JEE course using the coupon code. The faculty is amazing, and the study material is top-notch. I highly recommend PW to all JEE aspirants!"
                </p>
                <p className="fw-bold mt-3">- Rohan, JEE Aspirant</p>
            </div>
        </Carousel.Item>

        {/* Testimonial 2 - NEET Aspirant */}
        <Carousel.Item>
            <div className="bg-light p-4 rounded text-center">
                <p className="fs-5">
                    "I was able to save a lot on my NEET preparation with the PW coupon code. The courses are well-structured, and the teachers are very supportive. I'm extremely satisfied with my decision to join PW!"
                </p>
                <p className="fw-bold mt-3">- Priya, NEET Aspirant</p>
            </div>
        </Carousel.Item>

        {/* Testimonial 3 - UPSC Aspirant */}
        <Carousel.Item>
            <div className="bg-light p-4 rounded text-center">
                <p className="fs-5">
                    "PW's UPSC foundation course is worth every penny, especially with the discount I got. The mentors are knowledgeable, and the mock tests are very helpful. I feel confident about my preparation now!"
                </p>
                <p className="fw-bold mt-3">- Ankit, UPSC Aspirant</p>
            </div>
        </Carousel.Item>

        {/* Testimonial 4 - GATE Aspirant */}
        <Carousel.Item>
            <div className="bg-light p-4 rounded text-center">
                <p className="fs-5">
                    "The GATE preparation course from PW is fantastic! I got a great discount using the coupon code, and the course content is very detailed. I'm really happy with my progress so far."
                </p>
                <p className="fw-bold mt-3">- Sneha, GATE Aspirant</p>
            </div>
        </Carousel.Item>
    </Carousel>
</div>
            {/* Contact Section */}
            <div id="contact" className="mt-5 p-4 border rounded shadow-sm bg-light">
    <h2 className="text-center mb-4">Contact Us</h2>
    <p className="text-center mb-4">
        Have questions or need assistance? Reach out to us via WhatsApp, call, or email. We're here to help!
    </p>
    <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
        {/* WhatsApp Group Button */}
        <a
            href="https://chat.whatsapp.com/FAU38BFyRFYJbUGg9nMDI2" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg d-flex align-items-center justify-content-center gap-2"
        >
            <i className="material-icons">group</i> Join WhatsApp Group
        </a>

        {/* Call Me Button */}
        <a
            href="tel:+911234567890"
            className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
        >
            <i className="material-icons">call</i> Call Me
        </a>

        {/* Mail Me Button */}
        <a
            href="mailto:pwlive.discount@gmail.com"
            className="btn btn-danger btn-lg d-flex align-items-center justify-content-center gap-2"
        >
            <i className="material-icons">email</i> Mail Me
        </a>
    </div>
</div>

            {/* FAQ Section */}

<div id="faqs" className="mt-5 mb-5">
    <h2>FAQs</h2>
    <div className="accordion" id="faqAccordion">
        {/* FAQ 1 */}
        <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading1">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1">
                    How do I apply the coupon code?
                </button>
            </h2>
            <div id="faqCollapse1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    Enter the coupon code <strong>CPCA0817</strong> at checkout to avail the maximum discount on your purchase.
                </div>
            </div>
        </div>

        {/* FAQ 2 */}
        <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2">
                    Is the coupon code valid for all courses?
                </button>
            </h2>
            <div id="faqCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    Yes, the coupon code <strong>CPCA0817</strong> is valid for all courses available on the platform.
                </div>
            </div>
        </div>

        {/* FAQ 3 */}
        <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3">
                    Can I share the coupon code with others?
                </button>
            </h2>
            <div id="faqCollapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    Absolutely! Feel free to share the coupon code <strong>CPCA0817</strong> with your friends and family so they can also enjoy the discounts.
                </div>
            </div>
        </div>

        {/* FAQ 4 */}
        <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4">
                    What is the validity of the coupon code?
                </button>
            </h2>
            <div id="faqCollapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    The coupon code <strong>CPCA0817</strong> is valid until <strong>December 31, 2025</strong>. Make sure to use it before it expires!
                </div>
            </div>
        </div>

        {/* FAQ 5 */}
        <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5">
                    What if the coupon code doesn't work?
                </button>
            </h2>
            <div id="faqCollapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    If the coupon code doesn't work, please ensure that you have entered it correctly. If the issue persists, contact our support team for assistance.
                </div>
            </div>
        </div>
    </div>
</div>
            {/* Footer Section */}
            <footer className="bg-dark text-white py-4 mt-5">
    <div className="container">
        <div className="row">
            {/* Social Media Links */}
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
                <h5>Follow Us</h5>
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3">
                    <li>
                        <a href="https://twitter.com/arvindthetech" target="_blank" rel="noopener noreferrer" className="text-white">
                            <i className="material-icons">twitter</i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/arvindthetech/" target="_blank" rel="noopener noreferrer" className="text-white">
                            <i className="material-icons">instagram</i>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Contact Information */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="tel:+911234567890" className="text-white text-decoration-none">
                            <i className="material-icons me-2">call</i> +91 123 456 7890
                        </a>
                    </li>
                    <li>
                        <a href="mailto:pwlive.discount@gmail.com" className="text-white text-decoration-none">
                            <i className="material-icons me-2">email</i> pwlive.discount@gmail.com
                        </a>
                    </li>
                </ul>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 text-center text-md-end">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#courses" className="text-white text-decoration-none">Courses</a></li>
                    <li><a href="#testimonials" className="text-white text-decoration-none">Testimonials</a></li>
                    <li><a href="#faqs" className="text-white text-decoration-none">FAQs</a></li>
                    <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
                </ul>
            </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-4 pt-3 border-top">
            <p className="mb-0">&copy; 2025 PW Courses. All Rights Reserved.</p>
        </div>
    </div>
</footer>
        </div>
    );
}