import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section className="mt-[100px] mb-[150px] font-sans px-5 sm:px-0">
      <div className="container">
        <div className="text-center">
          <h2 className="text-[45px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] mb-5">
            it’s a journey
          </h2>
          <p className="w-full sm:w-[70%] md:w-[45%] mx-auto text-lg">
            Let’s embark on an exciting journey towards business growth as we
            work together to strategize, design, and develop your brand and
            online presence. So, let’s sit down at the drawing board and map out
            a plan of action.
          </p>
        </div>

        <div className="mt-[200px] flex flex-col gap-[200px]">
          <ServiceItem
            title="Branding"
            serialNumber={1}
            description="To quote the great and world-famous Marty Neumeier: “Your brand isn’t what you say it is. It’s what they say it is. It’s a person’s gut feeling about a product, service, or organization”. In order to positively influence this gut feeling or reputation we accompany our clients in creating intentional and consistent brands. Whether you are an ambitious company looking to establish your brand or a Fortune 500, we have the expertise and resources to help you achieve your goals."
            image="1.png"
          />
          <ServiceItem
            serialNumber={2}
            title="UX – UI design"
            description="We practice a holistic design approach to create optimal interactions between users, devices, and content, making sure all elements work together seamlessly. Our team of experienced designers combines their deep understanding of the latest technologies and design trends with a consistent focus on the end user. Time and time again, the user’s experience is at the heart of each interaction."
            image="2.png"
          />
          <ServiceItem
            serialNumber={3}
            title="Web development"
            description="As a leading web development studio we deliver cutting-edge solutions for businesses of all sizes. Our team of seasoned developers specializes in custom WordPress themes, providing our clients with an easy-to-use and leading-edge CMS that is tailored to their specific needs. From complex dashboards and web apps to e-commerce integrations, our team of professionals leverages the latest technologies and industry best practices to create visually stunning, secure, fast and SEO-friendly websites."
            image="3.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
