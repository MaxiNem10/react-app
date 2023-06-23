import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="mx-auto container flex-col text-left p-2">
      <h1> О нашем заведении</h1>
      <p>Самое клевое место в городе</p>
      <Link to="contacts">
        <button
         class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Контакты
        </button>
      </Link>
    </div>
  );
};

export default AboutPage;
