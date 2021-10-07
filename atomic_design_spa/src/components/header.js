import React from 'react';

const Header=()=>{

return(
    <section class="hero" id="hero">
    <div class="heroText">
        <h1 class="text-white mt-5 mb-lg-4" data-aos="zoom-in" data-aos-delay="800">
            Nomad Force
        </h1>

        <p class="text-secondary-white-color" data-aos="fade-up" data-aos-delay="1000">
            create a great video for your <strong class="custom-underline">website</strong>
        </p>
    </div>

    <div>
       <img src="https://cdn.careersinfilm.com/wp-content/uploads/2019/06/mise-en-scene.jpg" alt=""  class="headimg"/>
    </div>

    <div class="overlay"></div>
</section>
)

}

export default Header;