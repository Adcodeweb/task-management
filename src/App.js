import Home from "./views/Home";
import Layout from "./views/Layout";

function App() {
  return (
    <div className="bg-slate-200 relative">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
