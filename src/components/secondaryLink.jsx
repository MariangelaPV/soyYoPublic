import { FaTiktok, FaTwitterSquare } from "react-icons/fa";
import {
  RiLinkedinFill,
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitchFill,
} from "react-icons/ri";
import style from "../styles/linkSecondary.module.css";
import { addVista } from "../firebase/fireVewis";
import { useParams } from "react-router-dom";

export const SecondaryLink = ({ socialMedia, title, url, bg, bgHover }) => {
  function handleSocialMediaIcon() {
    switch (socialMedia) {
      case "facebook":
        return <RiFacebookBoxFill className={style.secondaryLinkIcon} />;
      case "linkedin":
        return <RiLinkedinFill className={style.secondaryLinkIcon} />;
      case "instagram":
        return <RiInstagramLine className={style.secondaryLinkIcon} />;
      case "tiktok":
        return <FaTiktok className={style.secondaryLinkIcon} />;
      case "twitter":
        return <FaTwitterSquare className={style.secondaryLinkIcon} />;
      case "twitch":
        return <RiTwitchFill className={style.secondaryLinkIcon} />;

      default:
        break;
    }
  }
  //obtener id publico y red social, mandarlo a la base de datos
  const params = useParams();
  const idUser = params.publicId;
  const doRedirect = () => {
    addVista(socialMedia, idUser);
    console.log(idUser)
  }

  return (
    <>
      <a
        rel="noreferrer"
        target="_blank"
        // href="https://www.linkedin.com/in/irma-mrkanovic-a4638094/"
        href={url}
        // className={style.secondaryLink}
        className={`${style.secondaryLink} ${bg} ${bgHover}`}
        onClick={() => doRedirect()}
      >
        {handleSocialMediaIcon()}
        <span className={style.secondaryLinkSpan}>{title}</span>
      </a>
    </>
  );
};
