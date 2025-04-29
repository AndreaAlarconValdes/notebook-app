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
    <>
      <div className="notes-page">
        <div className="button-section">
          <button onClick={openModal}>
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
        <div className="notes-container">
          <NoteList />
        </div>
      </div>
      {isModalOpen && <NoteFormModal closeModal={closeModal} />}
    </>
  );
}
