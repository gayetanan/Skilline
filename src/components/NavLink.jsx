function NavLink({ text }) {
  const path = text.toLowerCase() === "home" ? "/" : text.toLowerCase();
  return (
    <a
      href={path}
      className="text-leading hover:text-primary transition-colors "
    >
      {text}
    </a>
  );
}

export default NavLink;
