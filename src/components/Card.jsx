export default function Card({ title, description, img }) {
  return (
    <article className="w-75 h-75 p-6 bg-[#2c2f48] rounded-lg flex flex-col items-start gap-4 shadow-md shadow-[#00000040] hover:scale-105 hover:shadow-lg hover:shadow-[#00000060] transition-all duration-300">
      <img src={img} alt={title} />
      <div className="flex gap-2 flex-col items-start text-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="font-light">{description}</h2>
      </div>
    </article>
  );
}
