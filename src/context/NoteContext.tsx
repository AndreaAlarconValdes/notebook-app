import { createContext, useState, useEffect, ReactNode } from "react";
import { notes as data } from "../data/notes";
import { Note } from "../types/note";



interface NoteContextProps {
  notes: Note[];
  createNote: (note: Omit<Note, "id">) => void;
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
      },
    ]);
  }

  useEffect(() => {
    setNotes(data);
  }, []);

  return (
    <NoteContext.Provider
      value={{
        notes,
        createNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
