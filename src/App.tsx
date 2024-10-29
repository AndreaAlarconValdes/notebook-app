import { NoteForm } from "./components/NoteForm"
import NoteList from "./components/NoteList"
import { NoteContextProvider } from "./context/NoteContext"

function App() {

  return (
    <NoteContextProvider>
      <NoteForm/>
      <NoteList/>
    </NoteContextProvider>
  )
}

export default App
