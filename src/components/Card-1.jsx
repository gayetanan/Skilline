function Card1({ title, buttonText, imgSRC }) {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      <div className="absolute inset-0 grid place-content-center bg-f z-10 translate-y-full group-hover:translate-y-0 transition-all">
        <h3 className="text-lg font-semibold text-white mb-4 mx-auto">
          {title.toUpperCase()}
        </h3>
        <button className="border-2 border-white rounded-full px-4 py-3 text-white transition-all font-normal hover:bg-secondary hover:border-secondary w-max mx-auto md:text-lg">
          {buttonText}
        </button>
      </div>
      <img
        src={imgSRC}
        alt={title}
        className="group-hover:scale-110 transition-transform"
      />
    </div>
  );
}

export default Card1;
