export function paginate(
  data,
  page = 1,
  rowsPerPage = 10
) {
  const start = (page - 1) * rowsPerPage;

  return {
    data: data.slice(start, start + rowsPerPage),
    totalRecords: data.length,
    totalPages: Math.ceil(data.length / rowsPerPage),
    currentPage: page,
    rowsPerPage
  };
}