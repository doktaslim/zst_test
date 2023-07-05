import LogoImage from "../assets/airbnb_logo.png";

const Logo = () => {
  return (
    <div className="hidden md:block h-10 w-32 ">
      <img
        src={LogoImage}
        alt="logo"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Logo;
