import { Link } from "react-router-dom";

function Soda() {
  return (
    <div className="Soda">
      <h1>NOM NOM NOM</h1>
      <img
        src="https://images.albertsons-media.com/is/image/ABS/960471936-A1C1?$ng-ecom-pdp-tn$&defaultImage=Not_Available"
        alt="Yum! Soda."
      />
      <p>So tasty!</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Soda;
