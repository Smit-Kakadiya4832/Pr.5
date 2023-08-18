const Hero = () => {
    return(
        <>
        <section class="hero" id="home" style={{backgroundImage: "url('./assets/images/hero-bg.jpg')"}}>
        <div class="container">

          <div class="hero-content">

            <p class="hero-subtitle">Eat Sleep And</p>

            <h2 class="h1 hero-title">Supper delicious Burger in town!</h2>

            <p class="hero-text">Food is any substance consumed to provide nutritional support for an organism.</p>

            <button class="btn">Book A Table</button>

          </div>

          <figure class="hero-banner">
            <img src="./assets/images/hero-banner-bg.png" style={{width:"820" , height:"716"}} alt="" aria-hidden="true"
              class="w-100 hero-img-bg" />

            <img src="./assets/images/hero-banner.png" style={{width:"700" , height:"637"}} loading="lazy" alt="Burger"
              class="w-100 hero-img" />
          </figure>

        </div>
      </section>
      </>
    )
}

export default Hero;