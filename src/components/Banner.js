import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        // style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-lg">
            <h3 className=" text-xl">Hello! I'm</h3>
            <h1 class="text-5xl mb-3 font-bold">Masuduzzaman</h1>
            <h3 className="text-xl"> MERN STACK DEVELOPER</h3>
            <br />
            <p class="mb-5">
              I am a computer science student at Nanjing University Posts &
              Telecommunication in Nanjing, Jiangsu, China. My mission this year
              is to be a web developer. I am constantly working hard for this
              and hopefully I will be able to reach my destination. Below you
              can see samples of some of the projects I have done.
            </p>
            <button class="btn btn-outline btn-secondary">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
