function CardContent({ title, detail, img }) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="grid text-left">
        <span className="text-2xl font-medium">{title}</span>
        <span>{detail}</span>
      </div>
    </div>
  );
}

export default CardContent;
