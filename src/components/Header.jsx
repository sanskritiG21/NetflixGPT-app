import { LogoImage } from "../constants/imageConstant";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black w-[100%] z-10">
      <img src={LogoImage} alt="logo" className="w-48 " />
    </div>
  );
};

export default Header;
