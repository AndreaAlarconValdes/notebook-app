import { NoteBoard } from "./components/note/NoteBoard"
// import { NoteForm } from "./components/NoteForm"
import { NoteContextProvider } from "./context/NoteContext"

function App() {

  return (
    <NoteContextProvider>
      {/* <NoteForm/> */}
      <NoteBoard/>
    </NoteContextProvider>
  )
}

export default App
