import HeaderNavBelt from "./HeaderNavBelt";
import HeaderNavMain from "./HeaderNavMain";

export default function Header() {
  return (
    <header className="nav-main">
      <HeaderNavBelt/>
      <HeaderNavMain/>
    </header>
  );
}
