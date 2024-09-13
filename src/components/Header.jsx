import Container from "./Container";
import NavLink from "./NavLink";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Header() {
  const navContent = useRef(null);
  const header = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [windowWidth, setWindowWith] = useState(window.innerWidth);
  const [navDetails, setNavDetails] = useState({ navHeight: 0, open: false });

  // handle element height
  const evaluateHeight = (ref) => {
    return ref.current.getBoundingClientRect().height;
  };

  useEffect(() => {
    const navHeight = evaluateHeight(navContent);
    const headerHeight = evaluateHeight(header);

    const handleResize = () => {
      setWindowWith(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setNavDetails({ ...navDetails, navHeight });
    setHeaderHeight(headerHeight);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  function navTrigger() {
    setNavDetails({ ...navDetails, open: !navDetails.open });
  }
  return (
    <header className="py-3 bg-orange-100" ref={header}>
      <Container>
        <div className="flex items-center justify-between ">
          <div className="w-28">
            <img src={logo} alt="Skilline logo" />
          </div>
          <div
            className={`absolute xl:static left-0 right-0 bg-orange-50 xl:bg-transparent overflow-hidden transition-all
             `}
            style={{
              height: navDetails.open
                ? `${navDetails.navHeight}px`
                : `${windowWidth > 1280 ? "max-content" : "0"}`,
              top: `${headerHeight}px`,
            }}
          >
            <div
              ref={navContent}
              className="container py-4 xl:p-0 xl:max-w-max xl:flex items-center gap-8 "
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
          <div className="xl:hidden ">
            <button className="bg-black text-white p-4" onClick={navTrigger}>
              X
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
