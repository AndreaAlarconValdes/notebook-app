import { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";

export const NoteForm: React.FC = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [creationTime, setCreationTime] = useState("");
  const [creationDay, setCreationDay] = useState("");
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
      creationDate,
      creationTime,
      creationDay,
    });
    setTitle("");
    setDescription("");
    setCreationDate("");
    setCreationTime("");
    setCreationDay("");
  };

  return (
    <div className="note-form-container">
      <form className="form" onSubmit={handleSubmit}>
        <p>{creationDate}</p>
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
