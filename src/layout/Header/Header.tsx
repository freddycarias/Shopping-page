import HeaderNavMainLayout from "./HeaderMain/HeaderNavMain.layout";
import HeaderNavBeltLayout from "./HeaderBelt/HeaderNavBelt.layout";
export default function Header() {
  return (
    <div>
      <div className="col">
        <HeaderNavBeltLayout/>
      </div>
      <div className="col">
        <HeaderNavMainLayout/>
      </div>
    </div>
  )
}