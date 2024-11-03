import Navbar from "../elements/Navbar";

export default function Header() {
  return (
    <header className="flex justify-center items-center py-5 bg-white border-[4px] border-black border-solid sticky top-0 z-50">
      <Navbar />
      <img
        src="public/images/frest-logo.jpg"
        alt="Logo"
        className="ml-auto mr-12 border-[3px] border-black border-solid"
      />
    </header>
  );
}
