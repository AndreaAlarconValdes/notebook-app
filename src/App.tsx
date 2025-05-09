import { NoteBoard } from "./components/note/NoteBoard"
import { NoteContextProvider } from "./context/NoteContext"

function App() {

  return (
    <NoteContextProvider>
      <NoteBoard/>
    </NoteContextProvider>
  )
}

export default App
