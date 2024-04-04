const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>ADORE YOUR FEET WITH PERFECTION</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.SPOIL YOUR FEET WITH "AWESOMENESS" AND LET US ASSIST YOU WITH OUR KICKS.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="availability">
                    <p>Also Available On</p>

                    <div className="brand-icons">
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                        <img src="/images/amazon.png" alt="amazon-logo" />
                    </div>

                </div>

            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.jpg" alt="shoe" />
            </div>
        </main>
    )


};

export default HeroSection;