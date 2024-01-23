import Services from "@/components/Services";
import GetInTouch from "@/components/Shared/GetInTouch";

const ServicesPage = () => {
  return (
    <main>
      <section className="pt-[180px] pb-[100px] sm:pt-[350px] pb:pb-[250px] px-5 sm:px-0">
        <div className="container">
          <div>
            <h2 className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px]">
              <span className="font-sans">What we do for you</span> for you
            </h2>
          </div>
        </div>
      </section>
      <section>
        <img src="/images/services-banner.jpg" alt="services banner" />
      </section>

      <Services />
      <GetInTouch />
    </main>
  );
};

export default ServicesPage;
