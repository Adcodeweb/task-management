import Column from "../common/Column";

function Home() {
  return (
    <div className="grid auto-cols-fr md:grid-flow-col-dense gap-5 overflow-auto">
      <Column title={"Todo"} />
      <Column title={"Doing"} />
      <Column title={"Done"} />
    </div>
  );
}

export default Home;
