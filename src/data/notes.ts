import { Note, NoteColors } from "../types/note";

export const notes: Note[] = [
  {
    id: 0,
    title: "Try me",
    description:
      "Try adding your own note, choosing the colour, editing and deleting it.",
    color: NoteColors.orange,
    creationDate: "October 28, 2024",
    creationTime: "21:30",
    creationDay: "Tuesday",
  },
  {
    id: 1,
    title: "GitHub",
    description:
      "This is a personal project to practice and improve my skills. You can find the code on my GitHub @AndreaAlarconValdes",
    creationDate: "October 28, 2024",
    creationTime: "15:21",
    color: NoteColors.green ,
    creationDay: "Tuesday",
  },
  {
    id: 2,
    title: "Contact me",
    description:
      "You can contact me through my email address alarconvaldes.a@gmail.com or through Linkedin @andreaalarconvaldes",
    creationDate: "October 28, 2024",
    creationTime: "11:04",
    color: NoteColors.salmon,
    creationDay: "Tuesday",
  },
];
