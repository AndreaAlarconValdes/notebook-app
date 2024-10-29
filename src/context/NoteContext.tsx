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
        creationDate: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        creationTime: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        creationDay: new Date().toLocaleDateString("en-US", {
          weekday: "long",
        }),
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
