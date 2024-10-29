import { createContext, useState, useEffect, ReactNode } from "react";
import { notes as data } from "../data/notes";
import { Note } from "../types/note";

interface NoteContextProps {
  notes: Note[];
  createNote: (note: Omit<Note, "id">) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: number) => void
}

export const NoteContext = createContext<NoteContextProps>(null as any);

interface NoteContextProviderProps {
  children: ReactNode;
}

export function NoteContextProvider({ children }: NoteContextProviderProps) {
  const [notes, setNotes] = useState<Note[]>([]);

  function createNote(note: Omit<Note, "id">) {
    setNotes([
      ...notes,
      {
        id: notes.length,
        title: note.title,
        description: note.description,
        color: note.color,
        creationDate: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        creationTime: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        creationDay: new Date().toLocaleDateString("en-US", {
          weekday: "long",
        }),
      },
    ]);
  }

  function updateNote(updatedNote: Note) {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  }

  function deleteNote(id: number) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  useEffect(() => {
    setNotes(data);
  }, []);

  return (
    <NoteContext.Provider
      value={{
        notes,
        createNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
