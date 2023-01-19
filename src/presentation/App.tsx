import DataProvider from "../infrastructure/Provider";
import Routes from "./Routes";

function App() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
};

export default App;
