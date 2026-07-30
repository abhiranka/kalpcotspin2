export function filterData(data, filters = {}) {
  return data.filter((item) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;

      return (
        String(item[key]).toLowerCase() ===
        String(value).toLowerCase()
      );
    });
  });
}