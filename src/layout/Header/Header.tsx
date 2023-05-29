import HeaderNavBelt from "./HeaderBelt/HeaderNavBelt";
import HeaderNavMain from "./HeaderMain/HeaderNavMain";

export default function Header() {
  return (
    <header className="nav-main">
      <HeaderNavBelt />
      <HeaderNavMain />
    </header>
  );
}
