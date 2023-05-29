export default function AllDifferentProductTypes() {
  return (
    <>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="/">
            All Departments
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/books">
            Books
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/computers">
            Computers
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="electronics">
            Electronics
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/video-games">
            Video Games
          </a>
        </li>
      </ul>
    </>
  );
}
