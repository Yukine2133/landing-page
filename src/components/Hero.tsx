import man from "../images/man.png";

const Hero = () => {
  return (
    <main className="px-8 lg:px-24">
      <article className="grid md:grid-cols-2 md:place-items-center">
        <section>
          <h2 className="text-[30px] md:text-[36px] xl:text-[62px] leading-[45px] xl:leading-[70px] font-lemon tracking-widest font-bold uppercase">
            Study from <br /> home with expert
          </h2>
          <p className="font-light text-sm md:text-base lg:text-2xl mt-5  border-l border-black pl-4">
            A learning system based on formalised <br /> teaching with the help
            of resources.
          </p>
          <div className="flex gap-5   mb-4 mt-8 font-bold  ">
            <button className="lg:px-9 px-6 py-3   text-white bg-orange">
              Get Started
            </button>
            <button className="lg:px-9 px-6  py-3 border border-black">
              Learn More
            </button>
          </div>
        </section>
        <section className="flex ">
          <img
            className="w-[70%] md:w-[90%] mx-auto md:mx-0 xl:w-full"
            src={man}
            alt="Man"
          />
        </section>
      </article>
    </main>
  );
};

export default Hero;
