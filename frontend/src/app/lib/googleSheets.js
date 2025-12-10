import { google } from "googleapis";
import fs from "fs";
import path from "path";

const CREDENTIALS_PATH = path.join(process.cwd(), "frontend/secret.json");
const SPREADSHEET_ID = "1_xn3rCaD-uZTEdAlXGRx6O8QvDWsGDcuTIcZXutLqyU";

export interface Event {
  id: string;
  title: string;
  cover: string;
  genre: string;
  date: string;
  time: string;
  location: { city: string };
}

export const getSheetData = async (): Promise<Event[]> => {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A:G", // adapter selon colonnes dans la sheet
  });

  const rows = res.data.values || [];
  // Première ligne = header
  const events: Event[] = rows.slice(1).map((row, index) => ({
    id: String(index + 1),
    title: row[0] || "",
    cover: row[1] || "",
    genre: row[2] || "",
    date: row[3] || "",
    time: row[4] || "",
    location: { city: row[5] || "" },
  }));

  return events;
};
