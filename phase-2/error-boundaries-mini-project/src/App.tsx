import "./App.css";
import BuggyComponent from "./components/BuggyComponent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <h1>Error Boundary Mini Project</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
