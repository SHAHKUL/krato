import "./nav.css";

export default function Nav() {
  return (
    <header>
      <nav class="navbar">
        <ul>
          <li>
            <a href=" ">Home</a>
          </li>
          <li>
            <a href=" ">About</a>
          </li>
          <li>
            <a href=" ">Services</a>
          </li>
          <li>
            <a href=" ">Contact us</a>
          </li>
          <div class="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search this website"
            />
          </div>
        </ul>
      </nav>
    </header>
  );
}
