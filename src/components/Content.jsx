import Card from "./Card";
import Title from "./Title";
import { sample } from "../Data/Data";

export default function Content() {
  return (
    <section className="px-20 py-10 flex flex-col gap-4">
      <Title />
      <div className="flex flex-wrap basis-1/3 gap-15 justify-center items-start">
        {sample.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
}
