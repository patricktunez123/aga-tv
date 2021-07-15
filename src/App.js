import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
