import MainLogo from "@/constants/AssetsSvg/MainLogo";
import MainLogoMobile from "@/constants/AssetsSvg/MainLogoMobile";

const Navbar = () => {
  return (
   <nav className="relative z-30 py-5 flex justify-center items-center max-container padding-container bg-custom-blue">
      <div className="hidden md:block">
        <MainLogo />
      </div>
      <div className="block md:hidden">
        <MainLogoMobile />
      </div>
    </nav>
  );
};

export default Navbar;
