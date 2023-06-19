import emptyStar from "../assets/rating/startRempli.png";
import fullStar from "../assets/rating/startVide.png";


function Rate(props) {
      const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="rate">
        {notes.map((note) =>
          score >= note ? (
            <img
              key={note.toString()}
              className="star"
              src={emptyStar}
              alt="star"
            />
          ) : (
            <img
              key={note.toString()}
              className="rate-img"
              src={fullStar}
              alt="rate-img"
            />
          )
        )}
      </div>
    );
}

export default Rate;
