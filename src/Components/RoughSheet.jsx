import { useState, useCallback, useEffect } from "react";

export default function RoughSheet() {
  const [event, setEvent] = useState([]);

  const handleClick = () => {
    setEvent((pre) => [...pre, 1]);
  };
  const delayFunc = () => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => console.log("Hello timer 1"), 2000);
    };
  };

  const delayFunc3 = useCallback(() => {
    let timer3;
    return function () {
      clearTimeout(timer3);
      timer3 = setTimeout(() => console.log("Hello timeout3"), 2000);
    };
  }, []);

  const debounce = useCallback(delayFunc(), []);

  useEffect(() => {
    if (event?.length > 0) {
      debounce();
      delayFunc3()();
    }
  }, [event]);

  console.log("Debounce",debounce)
  console.log("Delay",delayFunc)
  console.log("delayFunc3",delayFunc3)
  console.log("--------------")
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}