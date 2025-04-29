import fs from "fs";
import matter from "gray-matter";
import path from "path";

const plantsDirectory = path.join(process.cwd(), "content/plants");

export type PlantTag = "Edible" | "Native" | "Pond";

export type PlantContent = {
  readonly latinName: string;
  readonly tags: PlantTag[];
  readonly commonName: string;
  readonly size4inch: boolean;
  readonly size1gallon: boolean;
  readonly size3gallon: boolean;
  readonly size5gallon: boolean;
  readonly lightConditions: string[];
  readonly waterConditions: string[];
  readonly height: string;
  readonly bloom: string;
  readonly benefits: string;
  readonly link: string;
  readonly visible: boolean;
};

let plantsCache: PlantContent[];

export function fetchPlantContent(): PlantContent[] {
  if (plantsCache) {
    return plantsCache;
  }

  const fileNames = fs.readdirSync(plantsDirectory);
  const allPlantsData = fileNames
    .filter((it) => it.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(plantsDirectory, fileName);
      return matter.read(fullPath).data as PlantContent;
    });

  plantsCache = allPlantsData.sort((a, b) => {
    if (a.latinName > b.latinName) {
      return 1;
    } else {
      return -1;
    }
  });
  return plantsCache;
}
