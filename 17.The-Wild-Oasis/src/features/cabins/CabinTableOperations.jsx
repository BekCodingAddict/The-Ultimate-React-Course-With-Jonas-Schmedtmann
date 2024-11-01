import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterFielt={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "widh-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          {
            value: "name-asc",
            label: "Sort by name (A-Z)",
          },

          {
            value: "name-disc",
            label: "Sort by name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "Sort by price (low frist)",
          },
          {
            value: "regularPrice-disc",
            label: "Sort by price (high frist)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by capacity (low frist)",
          },
          {
            value: "maxCapacity-disc",
            label: "Sort by capacity (high frist)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
