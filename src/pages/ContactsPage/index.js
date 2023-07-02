import { Link } from "react-router-dom";
import AboutPage from "../AboutPage";


const ContactsPage = () => {
  let ContactsItems = [
    
     { title: " ", link: "/contacts" },
  ];
    return (
      <div>
                Наш номер телефона:
        <a href="tel:+79516206273">+79516206273</a>
        {ContactsItems.map((item) => (
        <Link to={item.link}>{item.title}</Link>
        ))}
      </div>
    );
  };
  
  export default ContactsPage;