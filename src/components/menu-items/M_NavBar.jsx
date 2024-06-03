// imported from https://materializecss.com/navbar.html

const M_NavBar = () => {
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <label style={{ color: "white", fontSize: "200%" }}>Title</label>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li> <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default M_NavBar;
