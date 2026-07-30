export function searchData(data, keyword) {
  if (!keyword) return data;

  const search = keyword.toLowerCase().trim();

  return data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(search)
    )
  );
}