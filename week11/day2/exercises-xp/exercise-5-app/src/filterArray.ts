function filterArray<T>(array: T[], predicate: (element: T) => boolean): T[] {
    return array.filter(predicate);
  }
  
  export default filterArray;
  