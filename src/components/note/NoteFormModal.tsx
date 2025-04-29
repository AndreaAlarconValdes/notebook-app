import "./NoteFormModal.css";
import { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import { Note, NoteColors } from "../../types/note";

interface NoteFormModalProps {
  closeModal: () => void;
  note?: Note | null;
}
export function NoteFormModal({ closeModal, note = null }: NoteFormModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [creationTime, setCreationTime] = useState("");
  const [creationDay, setCreationDay] = useState("");
  const [color, setColor] = useState<NoteColors>(NoteColors.green);
  const { createNote, updateNote, deleteNote } = useContext(NoteContext);

  const [isVisible, setIsVisible] = useState(false);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10); // activa la animación
  }, []);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
      setColor(note.color);
      setCreationDate(note.creationDate);
      setCreationTime(note.creationTime);
      setCreationDay(note.creationDay);
    } else {
      setTitle("");
      setDescription("");
      setColor(NoteColors.green);
      setCreationDate("");
      setCreationTime("");
      setCreationDay("");
    }
  }, [note]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      alert("This field cannot be empty");
      return;
    }

    setIsShrinking(true);
    setTimeout(() => {
      if (note) {
        updateNote({
          ...note,
          title,
          description,
          color,
          creationDate,
          creationTime,
          creationDay,
        });
      } else {
        createNote({
          title,
          description,
          color,
          creationDate,
          creationTime,
          creationDay,
        });
      }
      setTitle("");
      setDescription("");
      setCreationDate("");
      setCreationTime("");
      setCreationDay("");
      closeModal();
    }, 400);
  };

  //   setTitle("");
  //   setDescription("");
  //   setCreationDate("");
  //   setCreationTime("");
  //   setCreationDay("");
  //   closeModal();
  // }

  return (
    <div className="modal-overlay">
      <form
        className={`form ${isVisible ? "show" : ""} ${
          isShrinking ? "shrink-out" : ""
        }`}
        onSubmit={handleSubmit}
      >
        <span
          className="material-symbols-outlined close-button"
          onClick={closeModal}
        >
          close
        </span>
        <header>
          <h3>{note ? "Edit note" : "Create new note"}</h3>
          <h5>
            {note
              ? "Edit your note details."
              : "Customize and create your note."}
          </h5>
        </header>
        <p>Title</p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <p>Description</p>
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          value={description}
        ></textarea>
        <p>Pick a color</p>
        <div className="color-buttons">
          {Object.values(NoteColors).map((colorValue) => (
            <button
              key={colorValue}
              type="button"
              className={`color-button ${color === colorValue ? "active" : ""}`}
              style={{ backgroundColor: colorValue }}
              onClick={() => setColor(colorValue as NoteColors)}
            ></button>
          ))}
        </div>
        {note && (
          <p>
            {creationDay} {creationDate} - {creationTime}
          </p>
        )}
        <footer>
          {note && <button onClick={() => deleteNote(note.id)}>Delete</button>}
          <button type="submit">{note ? "Save changes" : "Create note"}</button>
        </footer>
      </form>
    </div>
  );
}
