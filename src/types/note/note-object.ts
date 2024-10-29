export interface Note {
  id: number;
  title: string;
  description: string;
  creationDate: string;
  creationTime: string;
  creationDay: string;
  color: NoteColors;
}

export enum NoteColors {
  orange = "#facf7c",
  green = "#e7f199",
  salmon = "#f4a57d",
}
