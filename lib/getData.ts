import fs from "fs";
import { SiteMetadata, Projects } from "../types";
import path from "path";
import { either as E, function as F } from "fp-ts";
import { formatValidationErrors } from "io-ts-reporters";

const dataDirectory = path.join(process.cwd(), "data");

export const getProjectData = (): E.Either<string[], Projects> =>
  F.pipe(
    fs.readFileSync(`${dataDirectory}/projectsData.json`, "utf8"),
    JSON.parse,
    Projects.decode,
    E.mapLeft(formatValidationErrors)
  );

export const getSiteMetadata = (): E.Either<string[], SiteMetadata> =>
  F.pipe(
    fs.readFileSync(`${dataDirectory}/metadata.json`, "utf8"),
    JSON.parse,
    SiteMetadata.decode,
    E.mapLeft(formatValidationErrors)
  );
