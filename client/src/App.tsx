import { FC } from "react";
import "./App.css";
import Dashboard from "./components/admin/Dashboard";
import { Router } from "@reach/router";
import Homepage from "./Homepage";

const App: FC = () => {
  return (
    <Router>
      <Homepage path="/" />
      <Dashboard path="admin" />
    </Router>
  );
};

export default App;
