import teacher from "../images/expert-teacher.png";
import courses from "../images/online-courses.png";
import support from "../images/support.png";
import { Reveal } from "../utils/Reveal";

interface Props {
  img: string;
  title: string;
  desc: string;
}

const Footer = () => {
  const Card = ({ img, title, desc }: Props) => {
    return (
      <div className="mb-8">
        <img className="mx-auto lg:mx-0 " src={img} alt={img} />
        <h4 className="font-lemon text-[19px] tracking-wider mt-6 lg:text[22px]">
          {title}
        </h4>
        <p className="opacity-75 w-2/3 font-light text-[15px] md:text-base mx-auto lg:mx-0">
          {desc}
        </p>
      </div>
    );
  };
  return (
    <footer className="bg-dark-blue h-3/4 mt-12 text-white lg:px-20 text-center  lg:text-left">
      <article className="flex flex-col lg:flex-row">
        <section className="pt-9 pb-6 flex flex-col  items-center lg:items-start ">
          <Reveal>
            <h3 className="font-lemon tracking-wider text-[26px] xl:text-[40px] font-bold  mb-4 md:mb-6">
              Why we are <br /> the best
            </h3>
          </Reveal>
          <Reveal>
            <p className="opacity-75 font-light text-[15px] lg:text-xl">
              a learning system based on <br /> formalised teaching with help
              of...
            </p>
          </Reveal>
        </section>
        <section className="flex flex-col lg:flex-row items-center pt-10 ml-20  justify-center mx-auto">
          <Reveal>
            <Card
              img={teacher}
              title="Expert teacher"
              desc="a learning system based on formalised teaching"
            />
          </Reveal>
          <Reveal>
            <Card
              img={courses}
              title="Online Courses"
              desc="a learning system based on formalised teaching"
            />
          </Reveal>
          <Reveal>
            <Card
              img={support}
              title="24/7 support"
              desc="a learning system based on formalised teaching"
            />
          </Reveal>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
