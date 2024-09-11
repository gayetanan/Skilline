import Container from "./Container";
import NavLink from "./NavLink";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Header() {
  const navContent = useRef(null);
  const [navDetails, setNavDetails] = useState({
    navHeight: 0,
    open: true,
  });
  useEffect(() => {
    const navContentHeight = navContent.current.getBoundingClientRect().height;
    setNavDetails({ ...navDetails, navHeight: navContentHeight });
  }, []);

  function navTrigger() {
    setNavDetails({ ...navDetails, open: !navDetails.open });
  }
  return (
    <header className="py-3 bg-orange-100">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-28">
            <img src={logo} alt="Skilline logo" />
          </div>
          <div
            className={`absolute xl:static top-[100px] left-0 right-0 bg-red-300 xl:bg-transparent overflow-hidden transition-all
             `}
            style={{
              height: navDetails.open ? `${navDetails.navHeight}px` : "0px",
            }}
          >
            <div
              ref={navContent}
              className="container py-4 xl:max-w-max xl:flex items-center gap-8"
            >
              <ul className="flex flex-col xl:flex-row gap-4 xl:gap-8">
                <li>
                  <NavLink text={"Home"} />
                </li>

                <li>
                  <NavLink text={"Careers"} />
                </li>
                <li>
                  <NavLink text={"Blogs"} />
                </li>
                <li>
                  <NavLink text={"About"} />
                </li>
              </ul>
              <div className="flex flex-col xl:flex-row gap-5 mt-8 xl:mt-0">
                <Button text={"Login"} />
                <Button text={"Sign up"} type={"accent"} />
              </div>
            </div>
          </div>
          <div className="xl:hidden">
            <button onClick={navTrigger}>X</button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
