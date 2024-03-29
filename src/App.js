import logo from "./logo.svg";
import "./App.css";
import ContextApp from "./component/ContextApp";
import BudgetScreen from "./screen/BudgetScreen";

function App() {
  return (
    <ContextApp>
      <BudgetScreen></BudgetScreen>
    </ContextApp>
  );
}

export default App;
