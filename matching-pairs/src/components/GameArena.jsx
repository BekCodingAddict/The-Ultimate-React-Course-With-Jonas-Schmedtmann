import { useState } from "react";
import Box from "./Box";
import styles from "./GameArena.module.css";

const getEmoji = (index) => {
  const emojis = new Map([
    [[0], ["😀"]],
    [[1], ["😃"]],
    [[2], ["😄"]],
    [[3], ["😁"]],
    [[4], ["😆"]],
    [[5], ["🥹"]],
    [[6], ["😅"]],
    [[7], ["😂"]],
    [[8], ["🤣"]],
    [[9], ["🥲"]],
    [[10], ["😚"]],
    [[11], ["😊"]],
    [[12], ["😇"]],
    [[13], ["🙂"]],
    [[14], ["🙃"]],
    [[15], ["😉"]],
    [[16], ["😌"]],
    [[17], ["😍"]],
    [[18], ["🥰"]],
    [[19], ["😘"]],
    [[20], ["😗"]],
    [[21], ["😙"]],
  ]);

  const arr = [...emojis.keys()].find((key) => key.includes(index));
  if (!arr) return "Emoji Not Found";
  return emojis.get(arr);
};

function generateArray(count) {
  function generateUniqueRandomNumbers() {
    // Create an array containing numbers from 0 to 21
    var numbers = Array.from({ length: 22 }, (_, i) => i);

    // Shuffle the array
    for (var i = numbers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Return the first 'count' elements of the shuffled array
    return numbers.slice(0, count);
  }
  const arr1 = generateUniqueRandomNumbers(count);
  const arr2 = generateUniqueRandomNumbers(count);
  const newArr = [...arr1, ...arr2];
  return newArr;
}

function GameArea() {
  const [array, setArray] = useState(() => {
    const arr = generateArray(21);
    return arr;
  });
  console.log(array);

  return (
    <div className={styles.container}>
      {array.map((i) => (
        <Box emoji={getEmoji(i)} />
      ))}
    </div>
  );
}

export default GameArea;
