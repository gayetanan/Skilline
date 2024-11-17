function TrustCompanyLogo({ src, description = "logo" }) {
  return (
    <div className="max-w-36 md:max-w-52">
      <img src={src} alt={description} />
    </div>
  );
}

export default TrustCompanyLogo;
