import FabricRepository from "@/repositories/FabricRepository";

class FabricService {
  // ----------------------------------
  // Get All Fabrics
  // ----------------------------------
  getAllFabrics() {
    return FabricRepository.getAll();
  }

  // ----------------------------------
  // Get Single Fabric
  // ----------------------------------
  getFabric(id) {
    return FabricRepository.getById(id);
  }

  // ----------------------------------
  // Get By Sort Number
  // ----------------------------------
  getBySortNo(sortNo) {
    return FabricRepository.getBySortNo(sortNo);
  }

  // ----------------------------------
  // Get By Category
  // ----------------------------------
  getByCategory(category) {
    return FabricRepository.getByCategory(category);
  }

  // ----------------------------------
  // Search
  // ----------------------------------
  search(keyword) {
    return FabricRepository.search(keyword);
  }

  // ----------------------------------
  // Filter
  // ----------------------------------
  filter(filters = {}) {
    return FabricRepository.filter(filters);
  }

  // ----------------------------------
  // Search + Filter
  // ----------------------------------
  searchAndFilter(keyword = "", filters = {}) {
    let fabrics = this.getAllFabrics();

    if (keyword) {
      const search = keyword.toLowerCase();

      fabrics = fabrics.filter((fabric) =>
        [
          fabric.sortNo,
          fabric.category,
          fabric.weave,
          fabric.width,
          fabric.weight,
          fabric.shade,
          fabric.type,
          fabric.construction,
          fabric.finish,
          fabric.composition,
        ]
          .filter(Boolean)
          .some((value) =>
            String(value)
              .toLowerCase()
              .includes(search)
          )
      );
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (
        value !== "" &&
        value !== null &&
        value !== undefined
      ) {
        fabrics = fabrics.filter(
          (fabric) =>
            String(fabric[key] ?? "").toLowerCase() ===
            String(value).toLowerCase()
        );
      }
    });

    return fabrics;
  }

  // ----------------------------------
  // Sort
  // ----------------------------------
  sort(fabrics, field = "sortNo", direction = "asc") {
    return [...fabrics].sort((a, b) => {
      const first = String(a[field] ?? "");
      const second = String(b[field] ?? "");

      const result = first.localeCompare(second, undefined, {
        numeric: true,
        sensitivity: "base",
      });

      return direction === "asc" ? result : -result;
    });
  }

  // ----------------------------------
  // Pagination
  // ----------------------------------
  paginate(fabrics, page = 0, rowsPerPage = 10) {
    const start = page * rowsPerPage;
    return fabrics.slice(start, start + rowsPerPage);
  }

  // ----------------------------------
  // Categories
  // ----------------------------------
  getCategories() {
    return FabricRepository.getUnique("category").map(
      (name, index) => ({
        id: index + 1,
        name: String(name).trim(),
      })
    );
  }

  // ----------------------------------
  // Filter Dropdown Options
  // ----------------------------------
  getFilterOptions() {
    return FabricRepository.getFilterOptions();
  }

  // ----------------------------------
  // Dashboard Statistics
  // ----------------------------------
  getStatistics() {
    return FabricRepository.getStatistics();
  }
}

export default new FabricService();