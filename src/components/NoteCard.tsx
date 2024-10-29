import "./NoteCard.css";
import { Note } from "../types/note";

export const NoteCard: React.FC<Note> = ({
  title,
  description,
  creationDate,
  creationTime,
  creationDay,
}) => {
  return (
    <div className="card-container">
      <p className="creation-date">{creationDate}</p>
      <section className="title-section">
        <h1 className="title">{title}</h1>
        <span
          className="material-symbols-outlined"
          style={{
            backgroundColor: "black",
            color: "#facf7c",
            borderRadius: "999px",
            padding: "3px",
            cursor: "pointer",
          }}
        >
          edit
        </span>
      </section>
      <p className="description">{description}</p>
      <div className="footer-date">
        <span className="material-symbols-outlined">timer</span>
        <p className="creation-time">
          {creationTime}, {creationDay}
        </p>
      </div>
    </div>
  );
};
