import "./NoteCard.css";
import { Note } from "../../types/note";
import { useState } from "react";
import { NoteFormModal } from "./NoteFormModal";

export const NoteCard: React.FC<Note> = ({
  id,
  title,
  description,
  color,
  creationDate,
  creationTime,
  creationDay,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const note = {
    id,
    title,
    description,
    color,
    creationDate,
    creationTime,
    creationDay,
  };

  return (
    <>
    <div className="card-container" style={{backgroundColor: color}}>
      <p className="creation-date">{creationDate}</p>
      <section className="title-section">
        <h1 className="title">{title}</h1>
        <span
        onClick={openModal}
          className="material-symbols-outlined"
          style={{
            backgroundColor: "black",
            color: color,
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
    {isModalOpen && <NoteFormModal  closeModal={closeModal} note={note} />}
    </>
  );
};
