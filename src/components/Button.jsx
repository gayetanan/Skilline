function Button({ text, type }) {
  return (
    <button
      className={`py-2 px-5 rounded-[80px] transition-all inline-block
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
