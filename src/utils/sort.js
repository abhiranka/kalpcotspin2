export function sortData(
  data,
  field,
  direction = "asc"
) {
  if (!field) return [...data];

  return [...data].sort((a, b) => {
    const first = String(a[field]).toLowerCase();
    const second = String(b[field]).toLowerCase();

    if (first < second) {
      return direction === "asc" ? -1 : 1;
    }

    if (first > second) {
      return direction === "asc" ? 1 : -1;
    }

    return 0;
  });
}