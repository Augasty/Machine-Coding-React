import { useState } from "react";
import Star from "./Star";
import { Link } from "react-router-dom";

const Rating = ({ value }) => {
  const [rating, setRating] = useState(value);
  const [selection, setSelection] = useState(0);
  const arr = [1, 2, 3, 4, 5]
  function hoverHandler(objx) {
    console.log(objx.target.dataset)
    if (objx.target == null) {
      return setSelection(0)

    }
    return setSelection(objx.target.dataset.val)

  }

  return (
    <>            
    <Link to="/">
      <button className='buttonclass' type="button">Back
      </button></Link>
      <h2>Star Rating</h2>
      <div

        onClick={(e) => setRating(e.target.dataset.val || rating)}
        onMouseOver={(e) => hoverHandler(e)}
        onMouseOut={() => hoverHandler(null)}
      >
        {arr.map((_, idx) => (
          <Star
            key={idx}
            val={idx + 1}
            marked={selection ? idx + 1 <= selection : idx + 1 <= rating}
          />
        ))}
      </div>
      {rating}
    </>
  );
};

export default Rating