import "../Styles/imageholder.css";

const ImageHolder = ({ src, alt, className }) => {
  return (
    <div className="image-holder">
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default ImageHolder;
