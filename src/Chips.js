import { Link } from "react-router-dom";

function Chips() {
  return (
    <div className="Chips">
      <h1>NOM NOM NOM</h1>
      <img
        src="https://images.albertsons-media.com/is/image/ABS/960541413-A1C1?$ng-ecom-pdp-tn$&defaultImage=Not_Available"
        alt="Lays Party Size"
      />
      <p>A tasty bag of chips!</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Chips;
