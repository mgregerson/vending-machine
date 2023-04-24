import { Link } from "react-router-dom";

function Cookies() {
  return (
    <div className="Cookies">
      <h1>NOM NOM NOM</h1>
      <img
        src="https://www.thecountrycook.net/wp-content/uploads/2022/01/thumbnail-Big-Fat-Chewy-Chocolate-Chip-Cookies-200x200.jpg"
        alt="Yum! Cookies."
      />
      <p>So tasty!</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Cookies;
