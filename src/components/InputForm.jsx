import { useEffect, useState } from "react";
import styled from "styled-components";
const Counter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem;
  border: 1px solid;

  padding: 1rem;

  .items {
    border: 1px dotted;
    padding: 1rem;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px grey;
  }
`;
export default function InputForm() {
  const [queue, setQueue] = useState([[10], [10], [15], [15], [15]]);
  const [input, setInput] = useState(0);
  const handleChange = (event) => {
    setInput(event.currentTarget.valueAsNumber);
  };

  const addItemToQueue = () => {
    let minQueueItem = Math.exp(12);
    let minQueueIndexItem = [];
    queue.forEach((item) => {
      let totalItems = item.reduce((a, b) => {
        return a + b;
      }, 0);
      if (minQueueItem > totalItems) {
        minQueueItem = totalItems;
        minQueueIndexItem = item;
      }
    });
    console.log(minQueueIndexItem);
    // console.log(minQueueIndexItem)
    let tempArr = [...queue];
    tempArr = tempArr.map((item) => {
      if (item === minQueueIndexItem) {
        return [...item, input];
      } else {
        return item;
      }
    });
    console.log(tempArr);
    setQueue(tempArr);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    addItemToQueue();
    setInput(0);
  };
  return (
    <>
      <div className="form input">
        <form onSubmit={handelSubmit}>
          <label>Enter The Total Items </label>
          <input
            name="checkoutItem"
            value={input}
            onChange={handleChange}
            type="number"
            placeholder="Enter Here"
            min="1"
          ></input>
          <input type="submit"></input>
        </form>

        <Counter className="queue">
          {queue.map((currentMap, index) => {
            return (
              <div key={index}>
                <h4> Counter {index}</h4>
                {currentMap.map((item, index1) => {
                  return (
                    <div className="items" key={index1}>
                      {item}{" "}
                    </div>
                  );
                })}{" "}
              </div>
            );
          })}
        </Counter>
      </div>
    </>
  );
}
