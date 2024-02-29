const reverseArray = <T>(a: T[]): T[] => {
    return a.reverse();
  };
  
  const originalArray = ['hi','hello'];
  const reversedArray = reverseArray(originalArray);
  console.log(reversedArray); 
  