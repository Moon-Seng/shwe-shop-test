import { EditIcon, EyeIcon, SortIcon, TrashIcon } from "./Icons";
import ProductAvatar from "./ProductAvatar";

const ProductTable = ({
  products,
  sortConfig,
  onSort,
  onView,
  onEdit,
  onDelete,
  formatDate,
}) => (
  <div className="overflow-x-auto">
    <table className="min-w-[920px] w-full text-left text-sm">
      <thead className="text-xs text-[var(--brand-700)]">
        <tr className="border-y border-[var(--brand-300)] bg-[var(--brand-100)]">
          <th className="px-3 py-3 font-semibold text-[var(--brand-900)]">
            <button
              type="button"
              onClick={() => onSort("productName")}
              className="flex items-center gap-2"
            >
              Product
              <SortIcon
                active={sortConfig.key === "productName"}
                direction={sortConfig.direction}
              />
            </button>
          </th>
          <th className="px-3 py-3 font-semibold text-[var(--brand-900)]">
            <button
              type="button"
              onClick={() => onSort("date")}
              className="flex items-center gap-2"
            >
              Date
              <SortIcon
                active={sortConfig.key === "date"}
                direction={sortConfig.direction}
              />
            </button>
          </th>
          <th className="px-3 py-3 font-semibold text-[var(--brand-900)]">
            <button
              type="button"
              onClick={() => onSort("code")}
              className="flex items-center gap-2"
            >
              Code No.
              <SortIcon
                active={sortConfig.key === "code"}
                direction={sortConfig.direction}
              />
            </button>
          </th>
          <th className="px-3 py-3 font-semibold text-[var(--brand-900)]">
            <button
              type="button"
              onClick={() => onSort("goldType")}
              className="flex items-center gap-2"
            >
              Gold Type
              <SortIcon
                active={sortConfig.key === "goldType"}
                direction={sortConfig.direction}
              />
            </button>
          </th>
          <th className="px-3 py-3 font-semibold text-[var(--brand-900)]">
            <button
              type="button"
              onClick={() => onSort("productType")}
              className="flex items-center gap-2"
            >
              Product Type
              <SortIcon
                active={sortConfig.key === "productType"}
                direction={sortConfig.direction}
              />
            </button>
          </th>
          <th className="px-3 py-3 font-semibold text-[var(--brand-900)]">
            <button
              type="button"
              onClick={() => onSort("productName")}
              className="flex items-center gap-2"
            >
              Product Name
              <SortIcon
                active={sortConfig.key === "productName"}
                direction={sortConfig.direction}
              />
            </button>
          </th>
          <th className="px-3 py-3 font-semibold text-[var(--brand-900)]">
            <button
              type="button"
              onClick={() => onSort("weight")}
              className="flex items-center gap-2"
            >
              Weight
              <SortIcon
                active={sortConfig.key === "weight"}
                direction={sortConfig.direction}
              />
            </button>
          </th>
          <th className="px-3 py-3 font-semibold text-[var(--brand-900)]">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="text-[var(--brand-800)]">
        {products.map((product) => (
          <tr
            key={product.id}
            className="border-b border-[var(--brand-200)] even:bg-[var(--brand-100)] last:border-none"
          >
            <td className="px-3 py-4">
              <ProductAvatar
                tone={product.tone}
                imageUrl={product.imageUrl}
                name={product.productName}
              />
            </td>
            <td className="px-3 py-4">{formatDate(product.date)}</td>
            <td className="px-3 py-4">{product.code}</td>
            <td className="px-3 py-4">{product.goldType}</td>
            <td className="px-3 py-4">{product.productType}</td>
            <td className="px-3 py-4 font-medium text-[var(--brand-900)]">
              {product.productName}
            </td>
            <td className="px-3 py-4">{product.weight}</td>
            <td className="px-3 py-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[var(--brand-900)]">
                  {product.action}
                </span>
                <button
                  className="p-1"
                  aria-label="View"
                  onClick={() => onView(product)}
                >
                  <EyeIcon />
                </button>
                <button
                  className="p-1"
                  aria-label="Edit"
                  onClick={() => onEdit(product)}
                >
                  <EditIcon />
                </button>
                <button
                  className="p-1"
                  aria-label="Delete"
                  onClick={() => onDelete(product)}
                >
                  <TrashIcon />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable;
