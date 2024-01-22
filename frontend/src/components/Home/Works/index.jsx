import Heading from "@/components/Shared/Heading";
import WorkItem from "./WorkItem";

const Works = () => {
  return (
    <section className="py-[40px] md:py-[70px] xl:py-[100px] px-5 sm:px-0">
      <div className="container">
        <Heading title="Recent work" />

        <div className="mt-[60px] flex flex-col gap-6 sm:gap-10 md:gap-20 lg:gap-[100px]">
          <WorkItem
            image="1.jpg"
            subTitle="ATELIER15 – COWORKING BRUSSELS"
            title="Kickstarting a new coworking space in Brussels"
          />
          <WorkItem
            image="2.jpg"
            subTitle="UPTR"
            title="Revamping the largest transport & logistics union of Belgium"
          />
          <WorkItem
            image="3.jpg"
            subTitle="WHITEPAPERLAW"
            title="Crafting crypto law leadership"
          />
          <WorkItem
            image="4.jpg"
            subTitle="WONDERCAR"
            title="Supercharging Belgium’s largest body shop network"
          />
        </div>
      </div>
    </section>
  );
};

export default Works;
