
export function filterRowsBySearch<T>(array: T[], filterString: string): T[] {
    return array.filter((item) => {
      for (const key in item) {
        if (String(item[key]).includes(filterString)) {
          return true;
        }
      }
      return false;
    });
  }
  
  export function IncidentTableService() {  
    return {
      filterRowsBySearch,
      // Other service methods...
    };
  }