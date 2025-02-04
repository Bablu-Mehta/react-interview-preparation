import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slices/counterSlice";

const ReduxCounter = () => {
  const { count } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => (count <= 0 ? null : dispatch(decrement()))}>
          Decrement
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default ReduxCounter;
