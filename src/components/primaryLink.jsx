import phone from "../assets/img/call-icon.png";
import mail from "../assets/img/mail-icon.png";
import map from "../assets/img/map-icon.png";
import whatsapp from "../assets/img/whatsapp-icon.png";
import style from "../styles/linkPrimary.module.css";
import { useNavigate } from "react-router-dom";
import { addCollection, addUser, addVista } from "../firebase/fireVewis";
import { useParams } from "react-router-dom";

export const PrimaryLink = ({ socialMedia, title, url }) => {
  function handleSocialMediaIcon() {
    switch (socialMedia) {
      case "phone":
        return phone;
      case "whatsapp":
        return whatsapp;
      case "email":
        return mail;
      case "maps":
        return map;
      default:
        break;
    }
  }
  //obtener id publico y red social, mandar a base de datos
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
        className={style.primaryLink}
        href={url}
        onClick={() => doRedirect()}
      >
        <img
          src={handleSocialMediaIcon()}
          className={style.primaryLinksIcon}
          alt={socialMedia}
        />{" "}
        <br />
        {title}
      </a>
    </>
  );
};
