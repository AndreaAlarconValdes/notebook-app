import { Note } from "../types/note"

export const NoteCard: React.FC<Note> = ({
   title,
   description
  }) => {
    return(
        <div className="card-container">
           <h1>{title}</h1>
           <p>{description}</p>
        </div>
    )
}