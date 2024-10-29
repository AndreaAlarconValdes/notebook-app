import { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

export const NoteForm: React.FC = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createNote } = useContext(NoteContext);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      alert("This field cannot be empty");
      return;
    }
    createNote({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="note-form-container">
      <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Create note</button>
      </form>
    </div>
  );
};
