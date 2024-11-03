export default function Navbar() {
  return (
    <nav className="flex-1 flex justify-center">
      <ul className="flex gap-[100px] uppercase text-xl">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Variant</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
      </ul>
    </nav>
  );
}
