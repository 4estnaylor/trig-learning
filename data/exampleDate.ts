const date = new Date();

export interface dateSchedule {
  date: Date;
  availability: boolean;
  hours: number[];
}

export interface Session {
  date: Date;
  studentPreferredName: string | null;
  lessonNotes: string | null;
  zoomLink: string | null;
}

const exampleDate = {
  date: date,
  availability: true,
  hours: [11, 2, 3],
};

export const exampleDateUnavailable = {
  date: date,
  availability: false,
  hours: [12, 2, 4, 5],
};

export const getAvailableHoursForDate = (date: Date) => {
  return [14, 15, 16, 17, 18];
};

export default exampleDate;
