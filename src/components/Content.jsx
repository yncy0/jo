import Card from "./Card";
import {sample} from "../data/Data";
export default function Content() {
  return (
    <section className="p-10 flex flex-col gap-4">
      <div className="flex flex-col gap-5 text-white pl-30">
        <h1 className="text-4xl">
          Hi, I'm <span className="font-bold">Moises</span>
        </h1>
        <h2 className="text-3xl">From BSIT 4B</h2>
      </div>
      <div className="pl-30">
        <h1 className="text-4xl font-semibold text-red-400">SKILL SET</h1>
        <hr className="w-45 border-3 border-t border-red-400" />
      </div>
      <div className="flex flex-wrap gap-15 justify-center items-start">
        {sample.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
}
