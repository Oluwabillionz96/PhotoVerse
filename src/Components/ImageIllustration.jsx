import ImageHolder from "./ImageHolder";
import "../Styles/imageholder.css";

const ImageIllustration = () => {
  return (
    <div className="image-illustration">
      <ImageHolder
        src="./silhouette-shot-man-standing-cliff-looking-sunset.jpg"
        alt={"silhouette-shot-man-standing-cliff-looking-sunset"}
        className={"bend-left"}
      />
      <ImageHolder
        src="./family-silhouettes-having-fun-sunset-full-shot.jpg"
        alt={"family-silhouettes-having-fun-sunset-full-shot"}
        className={"up"}
      />
      <ImageHolder
        src="./old-woman-childhood-memories.jpg"
        alt={"old-woman-childhood-memories"}
        className={"bend-right"}
      />
      <div className="abs circle-one"></div>
      <div className="abs circle-two"></div>
      <div className="abs circle-three"></div>
      <div className="abs circle-four"></div>
    </div>
  );
};

export default ImageIllustration;
