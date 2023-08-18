const About = () => {
    return (
        <>
            <section class="section section-divider gray about" id="about">
                <div class="container">

                    <div class="about-banner">
                        <img src="./assets/images/about-banner.png" style={{width:"509" , height:"459"}} loading="lazy" alt="Burger with Drinks"
                            class="w-100 about-img" />

                            <img src="./assets/images/sale-shape-red.png" style={{width:"216" , height:"226"}} alt="get up to 50% off now"
                                class="abs-img scale-up-anim" />
                            </div>

                            <div class="about-content">

                                <h2 class="h2 section-title">
                                    Caferio, Burgers, and Best Pizzas
                                    <span class="span">in Town!</span>
                                </h2>

                                <p class="section-text">
                                    The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during
                                    the Jurchen
                                    invasion of the 1120s, while it is also known that many restaurants were run by families.
                                </p>

                                <ul class="about-list">

                                    <li class="about-item">
                                        <ion-icon name="checkmark-outline"></ion-icon>

                                        <span class="span">Delicious & Healthy Foods</span>
                                    </li>

                                    <li class="about-item">
                                        <ion-icon name="checkmark-outline"></ion-icon>
                                        {/* <i class="bi bi-check-circle-fill"></i> */}

                                        <span class="span">Spacific Family And Kids Zone</span>
                                    </li>

                                    <li class="about-item">
                                        <ion-icon name="checkmark-outline"></ion-icon>

                                        <span class="span">Music & Other Facilities</span>
                                    </li>

                                    <li class="about-item">
                                        <ion-icon name="checkmark-outline"></ion-icon>

                                        <span class="span">Fastest Food Home Delivery</span>
                                    </li>

                                </ul>

                                <button class="btn btn-hover">Order Now</button>

                            </div>

                    </div>
            </section>
        </>
    )
}

export default About;