import { React } from "react";

function Header() {
  return (
    <header>
      <ul className="nav">
        <li>
          <a href="https://example.com">About Me </a>
        </li>
        /
        <li>
          <a>Project</a>
        </li>
        /
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
