import Todo from "./Todo";

function Column({ title }) {
  return (
    <div classname="">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
        <h3 classname="tracking-widest">{title}</h3>
      </div>
      <div classname="">
        <Todo />
      </div>
    </div>
  );
}

export default Column;
