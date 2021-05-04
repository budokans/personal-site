import fs from "fs";
import path from 'path';

export const getData = () => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const filenames = fs.readdirSync(dataDirectory);

  const [data] = filenames.map(async (filename) => {
    const filePath = path.join(dataDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
  
    return JSON.parse(fileContents);
  })

  return data;
}