const Food = () => {
    return (
        <>
            <section class="section food-menu" id="food-menu">
                <div class="container">

                    <p class="section-subtitle">Popular Dishes</p>

                    <h2 class="h2 section-title">
                        Our Delicious <span class="span">Foods</span>
                    </h2>

                    <p class="section-text">
                        Food is any substance consumed to provide nutritional support for an organism.
                    </p>

                    <ul class="fiter-list">

                        <li>
                            <button class="filter-btn  active">All</button>
                        </li>

                        <li>
                            <button class="filter-btn">Pizza</button>
                        </li>

                        <li>
                            <button class="filter-btn">Burger</button>
                        </li>

                        <li>
                            <button class="filter-btn">Drinks</button>
                        </li>

                        <li>
                            <button class="filter-btn">Sandwich</button>
                        </li>

                    </ul>

                    <ul class="food-menu-list">

                        <li>
                            <div class="food-menu-card">

                                <div class="card-banner">
                                    <img src="./assets/images/food-menu-1.png" style={{width:"300" , height:"300"}} loading="lazy"
                                        alt="Fried Chicken Unlimited" class="w-100" />

                                        <div class="badge">-15%</div>

                                        <button class="btn food-menu-btn">Order Now</button>
                                </div>

                                <div class="wrapper">
                                    <p class="category">Chicken</p>

                                    <div class="rating-wrapper">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </div>

                                <h3 class="h3 card-title">Fried Chicken Unlimited</h3>

                                <div class="price-wrapper">

                                    <p class="price-text">Price:</p>

                                    <data class="price">$49.00</data>

                                    <del class="del" value="69.00">$69.00</del>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div class="food-menu-card">

                                <div class="card-banner">
                                    <img src="./assets/images/food-menu-2.png" style={{width:"300" , height:"300"}} loading="lazy"
                                        alt="Burger King Whopper" class="w-100" />

                                        <div class="badge">-10%</div>

                                        <button class="btn food-menu-btn">Order Now</button>
                                </div>

                                <div class="wrapper">
                                    <p class="category">Noddles</p>

                                    <div class="rating-wrapper">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </div>

                                <h3 class="h3 card-title">Burger King Whopper</h3>

                                <div class="price-wrapper">

                                    <p class="price-text">Price:</p>

                                    <data class="price" value="29.00">$29.00</data>

                                    <del class="del">$39.00</del>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div class="food-menu-card">

                                <div class="card-banner">
                                    <img src="./assets/images/food-menu-3.png" style={{width:"300" , height:"300"}} loading="lazy"
                                        alt="White Castle Pizzas" class="w-100" />

                                        <div class="badge">-25%</div>

                                        <button class="btn food-menu-btn">Order Now</button>
                                </div>

                                <div class="wrapper">
                                    <p class="category">Pizzas</p>

                                    <div class="rating-wrapper">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </div>

                                <h3 class="h3 card-title">White Castle Pizzas</h3>

                                <div class="price-wrapper">

                                    <p class="price-text">Price:</p>

                                    <data class="price" value="49.00">$49.00</data>

                                    <del class="del">$69.00</del>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div class="food-menu-card">

                                <div class="card-banner">
                                    <img src="./assets/images/food-menu-4.png" style={{width:"300" , height:"300"}} loading="lazy"
                                        alt="Bell Burrito Supreme" class="w-100" />

                                        <div class="badge">-20%</div>

                                        <button class="btn food-menu-btn">Order Now</button>
                                </div>

                                <div class="wrapper">
                                    <p class="category">Burrito</p>

                                    <div class="rating-wrapper">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </div>

                                <h3 class="h3 card-title">Bell Burrito Supreme</h3>

                                <div class="price-wrapper">

                                    <p class="price-text">Price:</p>

                                    <data class="price" value="59.00 ">$59.00</data>

                                    <del class="del">$69.00</del>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div class="food-menu-card">

                                <div class="card-banner">
                                    <img src="./assets/images/food-menu-5.png" style={{width:"300" , height:"300"}} loading="lazy"
                                        alt="Kung Pao Chicken BBQ" class="w-100" />

                                        <div class="badge">-5%</div>

                                        <button class="btn food-menu-btn">Order Now</button>
                                </div>

                                <div class="wrapper">
                                    <p class="category">Nuggets</p>

                                    <div class="rating-wrapper">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </div>

                                <h3 class="h3 card-title">Kung Pao Chicken BBQ</h3>

                                <div class="price-wrapper">

                                    <p class="price-text">Price:</p>

                                    <data class="price" value="49.00">$49.00</data>

                                    <del class="del">$69.00</del>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div class="food-menu-card">

                                <div class="card-banner">
                                    <img src="./assets/images/food-menu-6.png" style={{width:"300" , height:"300"}} loading="lazy"
                                        alt="Wendy's Chicken" class="w-100" />

                                        <div class="badge">-15%</div>

                                        <button class="btn food-menu-btn">Order Now</button>
                                </div>

                                <div class="wrapper">
                                    <p class="category">Chicken</p>

                                    <div class="rating-wrapper">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </div>

                                <h3 class="h3 card-title">Wendy's Chicken</h3>

                                <div class="price-wrapper">

                                    <p class="price-text">Price:</p>

                                    <data class="price" value="49.00">$49.00</data>

                                    <del class="del">$69.00</del>

                                </div>

                            </div>
                        </li>

                    </ul>


                </div>
            </section>
        </>
    )
}

export default Food;