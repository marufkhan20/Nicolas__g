import useAnimation from "@/hooks/useAnimation";

const CallToAction = () => {
  const sectionRef = useAnimation();
  return (
    <section className="py-[60px] md:py-[90px] xl:py-[120px] bg-secondary text-white font-sans px-5 sm:px-0">
      <div className="container grid xl:grid-cols-2 gap-5" ref={sectionRef}>
        <div className="text-[60px] md:text-[80px] lg:text-[120px] leading-[80px] lg:leading-[120px]">
          <h2 className="inline-block xl:block mr-5">What’s in </h2>
          <h2 className="inline-block xl:block">
            the <span className="text-primary">Name</span>
          </h2>
        </div>

        <div>
          <p className="text-lg">
            Nomen est omen, as the proverb goes. We believe that the future is
            something to be embraced with enthusiasm and confidence. Omen
            represents a sign of what’s to come – a symbol of the opportunities
            and the potential that lies ahead. With our expertise and vision, we
            strive to be a positive omen for our clients. By establishing
            successful brands and winning digital experiences we build a strong
            foundation for good things to come.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-16">
            <div>
              <h2 className="text-[80px] md:text-[120px] text-primary">10</h2>
              <p className="text-lg">
                passionate developers, designers and strategists have their
                sleeves rolled up for you.
              </p>
            </div>
            <div>
              <h2 className="text-[80px] md:text-[120px] text-primary">6</h2>
              <p className="text-lg">
                languages in which we understand each other including the
                language of design.
              </p>
            </div>
            <div>
              <h2 className="text-[80px] md:text-[120px] text-primary">29</h2>
              <p className="text-lg">
                Is the average age of our young, yet experienced cross cultural
                team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
