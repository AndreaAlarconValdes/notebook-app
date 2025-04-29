import "./NoteList.css"
import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import { NoteCard } from "./NoteCard";

export function NoteList() {
  const { notes } = useContext(NoteContext);

  if (notes.length === 0) {
    return <h1 >The note board is empty</h1>;
  }
  const sortedNotes = [...notes].sort((a, b) => b.timestamp! - a.timestamp!);


  return (
    <>
      {sortedNotes.map((note) => (
        <NoteCard key={note.id} id={note.id} title={note.title} description={note.description} color={note.color} creationDate={note.creationDate} creationTime={note.creationTime} creationDay={note.creationDay}/>
      ))}
      </>
  );
}

