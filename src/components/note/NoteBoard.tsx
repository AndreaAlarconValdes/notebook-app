import "./NoteBoard.css";
import { NoteList } from "./NoteList";

export function NoteBoard() {
 
  return (
    <div className="note-board-container">
      <h1>My Notes</h1>
      <div className="notes-section">
      <NoteList />
      <button className="add-note-button" >
        <span
          className="material-symbols-outlined"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "999px",
          }}
        >
          add
        </span>
        New Note
      </button>
      </div>
    </div>
  );
}
