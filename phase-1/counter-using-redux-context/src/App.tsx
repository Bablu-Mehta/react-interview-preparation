import "./App.css";
import { Provider } from "react-redux";
import { store } from "../store";
import ReduxCounter from "./components/ReduxCounter";
import { ContextProvider } from "./CounterContext";
import ContextCounter from "./components/ContextCounter";

function App() {
  return (
    <>
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
      <ContextProvider>
        <ContextCounter />
      </ContextProvider>
    </>
  );
}

export default App;
