import React from 'react'
import '../App.css'
export default function () {
    return (
        <>
            <div className='d-flex justify-content-center my-5'>
                <h3>About</h3>
            </div>
            <section className="container abt">
                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <h2 className="mb-3">About Our Beverages</h2>
                        <p>
                            We are passionate about crafting refreshing and high-quality beverages
                            that bring comfort and energy to your day. From rich hot coffees to
                            soothing drinks, our beverages are made using carefully selected
                            ingredients.
                        </p>
                        <p>
                            Our goal is to deliver great taste, consistent quality, and a delightful
                            experience in every sip. Whether you are starting your morning or taking
                            a relaxing break, our beverages are designed to match every mood.
                        </p>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
                            alt="Beverage"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 my-5">
                        <h5>Premium Quality</h5>
                        <p>
                            We source high-quality beans and ingredients to ensure every beverage
                            delivers a rich aroma and authentic flavor.
                        </p>
                    </div>
                    <div className="col-md-4 my-5">
                        <h5>Fresh & Sustainable</h5>
                        <p>
                            Our beverages are prepared with freshness in mind, following ethical
                            and sustainable sourcing practices.
                        </p>
                    </div>
                    <div className="col-md-4 my-5">
                        <h5>Crafted with Care</h5>
                        <p>
                            Each drink is thoughtfully crafted to give you a comforting and
                            enjoyable experience, every single time.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
