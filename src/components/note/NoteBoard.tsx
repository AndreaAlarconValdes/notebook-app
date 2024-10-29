import { useState } from "react";
import "./NoteBoard.css";
import { NoteList } from "./NoteList";
import { NoteFormModal } from "./NoteFormModal";

export function NoteBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="note-board-container">
      <h1>My Notes</h1>
      <div className="notes-section">
      <NoteList />
      <button className="add-note-button" onClick={openModal}>
        <span
          className="material-symbols-outlined"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "999px",
          }}
        >
          add
        </span>
        New Note
      </button>
      </div>
      {isModalOpen && <NoteFormModal closeModal={closeModal} />}
    </div>
  );
}
