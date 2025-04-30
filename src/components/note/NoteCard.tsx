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
      <div
        className="card-container"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fafafa, #fafafa 1px, ${color} 1px, ${color})`,
        }}
      >
        <div className="content-section">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="footer">
          <div className="date">
            <span className="material-symbols-outlined">timer</span>
            <p className="creation-time">
              {creationDay} {creationDate}, {creationTime}
            </p>
          </div>
          <span
            onClick={openModal}
            className="material-symbols-outlined edit-btn"
            
          >
            edit
          </span>
        </div>
      </div>
      {isModalOpen && <NoteFormModal closeModal={closeModal} note={note} />}
    </>
  );
};
