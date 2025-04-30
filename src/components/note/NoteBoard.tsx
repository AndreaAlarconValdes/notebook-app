import { useContext, useState } from "react";
import "./NoteBoard.css";
import { NoteFormModal } from "./NoteFormModal";
import { NoteCategory } from "../../types/note";
import { NoteContext } from "../../context/NoteContext";
import { NoteCard } from "./NoteCard";

export function NoteBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { notes } = useContext(NoteContext);
  const [filter, setFilter] = useState<NoteCategory | "todas">("todas");

  const filterOptions: { key: "todas" | NoteCategory; label: string; color: string }[] = [
  { key: "todas", label: "All", color: "white" },
  { key: "important", label: "Important", color: "#f4d79a" },
  { key: "reminder", label: "Reminder", color: "#f4a89e" },
  { key: "ideas", label: "Ideas", color: "#8cd5cb" },
  { key: "pending", label: "Pending", color: "#84daf6" },
  { key: "others", label: "Others", color: "#d59ef6" },
];

const filteredNotes = notes.filter((note) =>
filter === "todas" ? true : note.category === filter
);

const sortedNotes = [...filteredNotes].sort(
(a, b) => b.timestamp! - a.timestamp!
);

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
          <h1>All in order, all in notes. </h1>
         
          <button onClick={openModal}>
            <span className="material-symbols-outlined add-symbol">add</span>
          </button>
        </div>
        <div className="notes-container">
          <div className="filters">
          {filterOptions.map(({ key, label, color }) => (
    <button
      key={key}
      onClick={() => setFilter(key)}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  ))}
          </div>
          <div className="notes-list-container">
          {sortedNotes.length === 0 ? (
            <p>This category is empty</p>
          ) : (
            sortedNotes.map((note) => <NoteCard key={note.id} {...note} />)
          )}
          </div>
        </div>
      </div>
      {isModalOpen && <NoteFormModal closeModal={closeModal} />}
    </>
  );
}
