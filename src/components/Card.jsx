import { Icon } from "@iconify/react";

export default function Card({ title, description, img }) {
  return (
    <article className="p-10 bg-base rounded-lg flex flex-1 flex-col basis-1/4 items-start gap-4 shadow-md shadow-[#00000040] hover:scale-105 hover:shadow-lg hover:shadow-[#00000060] transition-all duration-300">
      <Icon icon={img} fontSize={75}/>
      <div className="flex gap-2 flex-col items-start">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="font-light">{description}</h2>
      </div>
    </article>
  );
}
