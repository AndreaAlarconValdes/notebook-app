export interface Note {
  id: number;
  title: string;
  description: string;
  creationDate: string;
  creationTime: string;
  creationDay: string;
  color: NoteColors;
  timestamp?: number;
}

export enum NoteColors {
  blue ="#b0e4db",
  orange = "#facf7c",
  green = "#e7f199",
  pink = "#ffd6e8",
}
