import { PlusIcon, PrintIcon } from "./Icons";

const ProductListHeader = ({ onPrint, onAddNew }) => (
  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
    <div>
      <h2 className="text-3xl font-normal tracking-tight text-black">
        Product Listing
      </h2>
    </div>
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={onPrint}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-600)] bg-white px-5 py-2 text-sm font-medium text-[var(--brand-900)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand-700)] hover:shadow-md"
      >
        <PrintIcon />
        Print
      </button>
      <button
        type="button"
        onClick={onAddNew}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow-500)] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[var(--yellow-600)]"
      >
        <PlusIcon />
        Add New
      </button>
    </div>
  </div>
);

export default ProductListHeader;
