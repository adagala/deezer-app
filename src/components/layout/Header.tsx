import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
  return (
    <div className="mb-2 w-full flex justify-between border-b-4 border-teal-700 p-3">
      <div className="font-bold text-2xl text-teal-700 ">Deezer App</div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
