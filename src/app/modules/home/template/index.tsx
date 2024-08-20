import Slider from "../components/slider";
import Info from "../components/info";

const HomeTemplate = () => {
  return (
    <div className="w-full relative flex flex-col gap-32 items-center pb-32">
      <div className="w-full overflow-hidden z-0 h-[100vh] small:h-[75vh] xlarge:h-[80vh]">
        <Slider />
      </div>

      <Info />
    </div>
  );
};

export default HomeTemplate;
