import fs from "fs";
import path from 'path';
import { ProjectInterface } from "../interfaces";

export const getData = (): ProjectInterface[] => {
  const dataDirectory: string = path.join(process.cwd(), 'data');
  const filenames: string[] = fs.readdirSync(dataDirectory);

  const data = filenames.map((filename: string): ProjectInterface[] => {
    const filePath: string = path.join(dataDirectory, filename);
    const fileContents: string = fs.readFileSync(filePath, 'utf8');
  
    return JSON.parse(fileContents);
  })

  const [result] = data;
  return result;
}