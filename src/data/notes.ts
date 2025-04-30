import { Note, NoteColors } from "../types/note";

export const notes: Note[] = [
  {
    id: 0,
    title: "Hi, I'm Andrea",
    description:
      "Full-Stack developer specializing in Front-end development. Now looking for new job opportunities",
    color: NoteColors.blue,
    creationDate: "February 5",
    creationTime: "21:30",
    creationDay: "Fri",
  },
  {
    id: 1,
    title: "Try me",
    description:
      "Try adding your own note, choosing the colour, editing and deleting it.",
    color: NoteColors.green,
    creationDate: "February 5",
    creationTime: "21:30",
    creationDay: "Fri",
  },
  {
    id: 2,
    title: "GitHub ",
    description:
      "This is a personal project to practice and improve my skills. You can find the code on my GitHub @AndreaAlarconValdes",
    creationDate: "February 5",
    creationTime: "15:21",
    color: NoteColors.pink ,
    creationDay: "Fri",
  },
  {
    id: 3,
    title: "Contact me",
    description:
      "You can contact me through my email address alarconvaldes.a@gmail.com or through Linkedin @andreaalarconvaldes",
    creationDate: "February 5",
    creationTime: "11:04",
    color: NoteColors.orange,
    creationDay: "Fri",
  },
];
