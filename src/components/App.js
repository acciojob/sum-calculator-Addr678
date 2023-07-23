
import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const calculateSum = async () => {
      // Simulate asynchronous calculation to prevent UI freezes
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (isMounted) {
        const totalSum = numbers.reduce((acc, num) => acc + num, 0);
        setSum(totalSum);
      }
    };

    calculateSum();

    return () => {
      isMounted = false;
    };
  }, [numbers]);

  const handleNumberChange = (event) => {
    const newNumbers = event.target.value
      .split(',')
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));

    setNumbers(newNumbers);
  };

  return (
    <div>
      <h2>Sum Calculator</h2>
      <div>
        <label htmlFor="numbersInput">Enter numbers separated by commas:</label>
        <input
          type="text"
          id="numbersInput"
          onChange={handleNumberChange}
          placeholder="e.g., 1, 2, 3"
        />
      </div>
      <div>
        <p>Sum: {sum}</p>
      </div>
    </div>
  );
};

export default SumCalculator;
