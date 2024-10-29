import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import { NoteCard } from "./NoteCard";

export function NoteList() {
  const { notes } = useContext(NoteContext);

  if (notes.length === 0) {
    return <h1 >The note board is empty</h1>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteCard id={note.id} title={note.title} description={note.description} />
      ))}
    </div>
  );
}

