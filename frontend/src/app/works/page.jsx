import GetInTouch from "@/components/Shared/GetInTouch";
import Services from "@/components/Shared/Services";
import Works from "@/components/Shared/Works";

const WorksPage = () => {
  return (
    <main>
      <section className="pt-[180px] pb-[150px] sm:pt-[350px] pb:pb-[250px] px-5 sm:px-0">
        <div className="container grid md:grid-cols-2 items-center justify-between gap-5 flex-wrap">
          <div>
            <h2 className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px]">
              <span className="font-sans">Our</span> Cases
            </h2>
          </div>
          <p className="font-sans text-lg">
            This is where we showcase our finest accomplishments and success
            stories. Each case is a testament to our passion, expertise, and
            unwavering commitment to delivering exceptional results.
          </p>
        </div>
      </section>
      <section>
        <img src="/images/works-banner.jpg" alt="work banner" />
      </section>

      <Works title={false} />
      <Services />
      <GetInTouch />
    </main>
  );
};

export default WorksPage;
