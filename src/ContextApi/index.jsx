import {
  CounterProvider,
  CounterContext,
  UserProvider,
  UserContext,
} from "./CounterProvider";
import { useContext } from "react";

const Child = () => {
  const { counter, setCounter } = useContext(CounterContext);
  console.log("child context", useContext(CounterContext));
  console.log("child", useContext(UserContext));
  return (
    <div>
      {counter}
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
    </div>
  );
};

const ThirdChild = () => {
  const { counter, setCounter } = useContext(CounterContext);

  console.log("third child context", useContext(CounterContext));
  console.log("user", useContext(UserContext));
  return <div style={{ color: "red" }}>{counter}</div>;
};

export default function ContextApp() {
  return (
    <div className="App">
      <UserProvider>
        <CounterProvider>
          <Child />
          <ThirdChild />
        </CounterProvider>
      </UserProvider>
    </div>
  );
}
