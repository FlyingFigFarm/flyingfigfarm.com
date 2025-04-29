import { PlantTag } from "../lib/plants";
import { PlantsTable } from "./PlantsTable";

type PlantsPageProps = {
  title: string;
  tag: PlantTag;
};

export default function PlantsPage(props: PlantsPageProps) {
  const { tag, title } = props;

  return (
    <div>
      <h1 className="title text-center py-8">{title}</h1>
      <PlantsTable tag={tag} />
    </div>
  );
}
