import { fetchPlantContent, PlantTag } from "../lib/plants";

type PlantsTableProps = {
  tag: PlantTag;
};

/*
const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Price = (props: { price: number }) => (
  <>{props.price ? USDollar.format(props.price) : ""} </>
);
*/

const Tags = (props: { value: string[] }) => (
  <>{Array.isArray(props.value) ? props.value.join(", ") : props.value}</>
);

const Checkmark = (props: { value: boolean }) =>
  props.value ? <>&#x2713;</> : "";

export const PlantsTable = (props: PlantsTableProps) => {
  const { tag } = props;

  const allPlants = fetchPlantContent();
  const plants = allPlants.filter(
    (plant) => plant.visible && plant.tags.includes(tag),
  );

  return (
    <div className="p-4">
      <table className={`table-auto w-full border border-gray-400 p-4 text-sm`}>
        <thead className="bg-gray-300">
          <tr>
            <th className="border border-gray-400 px-2 py-1">Latin Name</th>
            <th className="border border-gray-400 px-2 py-1">Common Name</th>
            <th className="border border-gray-400 px-2 py-1">4 Inch</th>
            <th className="border border-gray-400 px-2 py-1">1 Gallon</th>
            <th className="border border-gray-400 px-2 py-1">3 Gallon</th>
            <th className="border border-gray-400 px-2 py-1">5 Gallon</th>
            <th className="border border-gray-400 px-2 py-1">Light</th>
            <th className="border border-gray-400 px-2 py-1">Water</th>
            <th className="border border-gray-400 px-2 py-1">Height</th>
            <th className="border border-gray-400 px-2 py-1">Bloom</th>
            <th className="border border-gray-400 px-2 py-1">Benefits</th>
            <th className="border border-gray-400 px-2 py-1 print:hidden">
              Addtional Info
            </th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, i) => (
            <tr key={i}>
              <td className="border border-gray-400 px-2 py-1">
                {plant.latinName}
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {plant.commonName}
              </td>
              <td className="border border-gray-400 px-2 py-1 text-center">
                <Checkmark value={plant.size4inch} />
              </td>
              <td className="border border-gray-400 px-2 py-1 text-center">
                <Checkmark value={plant.size1gallon} />
              </td>
              <td className="border border-gray-400 px-2 py-1 text-center">
                <Checkmark value={plant.size3gallon} />
              </td>
              <td className="border border-gray-400 px-2 py-1 text-center">
                <Checkmark value={plant.size5gallon} />
              </td>
              <td className="border border-gray-400 px-2 py-1">
                <Tags value={plant.lightConditions} />
              </td>
              <td className="border border-gray-400 px-2 py-1">
                <Tags value={plant.waterConditions} />
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {plant.height}
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {plant.bloom}
              </td>
              <td className="border border-gray-400 px-2 py-1">
                {plant.benefits}
              </td>
              <td className="border border-gray-400 px-2 py-1 font-bold print:hidden">
                {plant.link && (
                  <a target="_blank" href={plant.link}>
                    Learn More
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
