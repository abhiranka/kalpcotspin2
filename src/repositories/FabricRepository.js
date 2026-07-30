import fabrics from "@/data/fabrics.json";

class FabricRepository {
  constructor() {
    this.fabrics = fabrics;
  }

  // ----------------------------------
  // Get All Fabrics
  // ----------------------------------
  getAll() {
    return [...this.fabrics];
  }

  // ----------------------------------
  // Get Fabric By ID
  // ----------------------------------
  getById(id) {
    return this.fabrics.find(
      (fabric) => fabric.id === Number(id)
    );
  }

  // ----------------------------------
  // Get By Sort Number
  // ----------------------------------
  getBySortNo(sortNo) {
    return this.fabrics.find(
      (fabric) =>
        String(fabric.sortNo).toLowerCase() ===
        String(sortNo).toLowerCase()
    );
  }

  // ----------------------------------
  // Get By Category
  // ----------------------------------
  getByCategory(category) {
    if (!category) return this.getAll();

    return this.fabrics.filter(
      (fabric) =>
        String(fabric.category).trim().toLowerCase() ===
        String(category).trim().toLowerCase()
    );
  }

  // ----------------------------------
  // Search
  // ----------------------------------
  search(keyword) {
    if (!keyword) return this.getAll();

    const search = keyword.toLowerCase();

    return this.fabrics.filter((fabric) =>
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

  // ----------------------------------
  // Filter
  // ----------------------------------
  filter(filters = {}) {
    return this.fabrics.filter((fabric) =>
      Object.entries(filters).every(([key, value]) => {
        if (
          value === "" ||
          value === null ||
          value === undefined
        ) {
          return true;
        }

        return (
          String(fabric[key] ?? "")
            .toLowerCase() ===
          String(value)
            .toLowerCase()
        );
      })
    );
  }

  // ----------------------------------
  // Unique Values
  // ----------------------------------
  getUnique(field) {
    return [
      ...new Set(
        this.fabrics
          .map((fabric) => fabric[field])
          .filter(Boolean)
      ),
    ].sort();
  }

  // ----------------------------------
  // Filter Options
  // ----------------------------------
  getFilterOptions() {
    return {
      categories: this.getUnique("category"),
      weaves: this.getUnique("weave"),
      shades: this.getUnique("shade"),
      weights: this.getUnique("weight"),
      types: this.getUnique("type"),
    };
  }

  // ----------------------------------
  // Statistics
  // ----------------------------------
  getStatistics() {
    return {
      totalFabrics: this.fabrics.length,
      totalCategories: this.getUnique("category").length,
      totalWeaves: this.getUnique("weave").length,
      totalShades: this.getUnique("shade").length,
    };
  }
}

export default new FabricRepository();