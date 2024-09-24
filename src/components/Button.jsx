function Button({ text, type, size = "sm", className }) {
  return (
    <button
      className={`${
        size === "sm"
          ? "py-2 px-5"
          : "py-4 px-7 text-sm md:text-xl font-semibold"
      } rounded-[80px] transition-all inline-block ${className}
        ${
          type === "accent"
            ? "bg-accent text-white hover:bg-white hover:text-accent"
            : "text-neutral-600 bg-white hover:bg-neutral-900 hover:text-white"
        }
      `}
    >
      {text}
    </button>
  );
}

export default Button;
