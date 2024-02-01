import { useRoutes } from "react-router-dom";
import Themeroutes from "./components/routes/Router";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
    <>
      <div>
        {routing}
      </div>
    </>
  );
};

export default App;
