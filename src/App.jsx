import { useEffect, useMemo, useRef, useState } from "react";
import { useSnackbar } from "notistack";
import HeaderBar from "./components/HeaderBar";
import SubMenuBar from "./components/SubMenuBar";
import CustomSelect from "./components/CustomSelect";
import ProductListHeader from "./components/ProductListHeader";
import ProductTable from "./components/ProductTable";
import useFilters from "./hooks/useFilters";
import usePagination from "./hooks/usePagination";
import useProducts from "./hooks/useProducts";
import {
  BarcodeIcon,
  BackIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  FilterIcon,
  PrintIcon,
  QRCodeIcon,
  RefreshIcon,
  SaveIcon,
  SearchIcon,
  SectionBarcodeIcon,
  SectionCalendarIcon,
  SectionImageIcon,
  SectionListIcon,
  SectionScaleIcon,
  SectionTagIcon,
  UploadIcon,
} from "./components/Icons";
import { initialProducts } from "./data/appData";
import { formatDate, parseNumber } from "./utils/formatters";

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const fileInputRef = useRef(null);
  const {
    products,
    setProducts,
    selectedProduct,
    setSelectedProduct,
    createModalOpen,
    setCreateModalOpen,
    editingProductId,
    setEditingProductId,
    deleteModalOpen,
    setDeleteModalOpen,
    deleteTarget,
    setDeleteTarget,
  } = useProducts(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });
  const {
    filterModalOpen,
    setFilterModalOpen,
    filterDraft,
    setFilterDraft,
    filters,
    setFilters,
    filterOptions,
  } = useFilters(products);
  const [newProduct, setNewProduct] = useState({
    date: "2025-12-30",
    code: "",
    goldType: "24K",
    productType: "",
    productName: "",
    category: "Jewelry",
    shop: "Downtown",
    location: "Yangon",
    discountType: "Standard",
    weightType: "Gram",
    status: "Hold",
    priceType: "GS",
    quantity: "1",
    sellType: "",
    weight: "",
    imageUrl: "",
    laborFee: "0",
    flowerLaborFee: "0",
    profitFee: "0",
    splitFee: "0",
    serviceFee: "0",
    adjustFee: "0",
    optionalFee: "0",
    note: "",
    paymentAmount: "0",
    weightIn: ["1", "1", "2", "3.00"],
    weightOut: ["1", "1", "2", "3.00"],
    weightDiff: ["1", "2", "3.00", "3.00"],
    weightIn2: ["1", "1", "2", "3.00"],
    weightFlower: ["1", "1", "2", "3.00"],
    weightProfit: ["1", "1", "2", "3.00"],
    barcodeGenerated: "T 1-2-3.00",
    barcodeItemCode: "UAR2301-1",
    barcodeLabel1: "G 1-2-3.00",
    barcodeLabel2: "L 0-1-2.00",
    barcodeLabel3: "J 0-0-0.00",
    barcodeLabel4: "J 0",
    barcodeFormat: "",
    barcodeMode: "Barcode",
  });

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    setProducts((current) =>
      current.filter((product) => product.id !== deleteTarget.id)
    );
    if (selectedProduct?.id === deleteTarget.id) {
      setSelectedProduct(null);
    }
    if (editingProductId === deleteTarget.id) {
      setEditingProductId(null);
      setCreateModalOpen(false);
    }
    setDeleteTarget(null);
    setDeleteModalOpen(false);
    enqueueSnackbar("Product deleted successfully.", { variant: "success" });
  };

  useEffect(() => {
    if (!createModalOpen) return;
    if (editingProductId !== null) {
      const editingProduct = products.find(
        (product) => product.id === editingProductId
      );
      if (editingProduct) {
        setNewProduct({
          date: formatDate(editingProduct.date || "2025-12-30"),
          code: editingProduct.code || "",
          goldType: editingProduct.goldType || "24K",
          productType: editingProduct.productType || "",
          productName: editingProduct.productName || "",
          category: editingProduct.category || "Jewelry",
          shop: editingProduct.shop || "Downtown",
          location: editingProduct.location || "Yangon",
          discountType: editingProduct.discountType || "Standard",
          weightType: editingProduct.weightType || "Gram",
          status: editingProduct.status || "Hold",
          priceType: editingProduct.priceType || "GS",
          quantity: editingProduct.quantity || "1",
          sellType: editingProduct.sellType || "",
          weight: editingProduct.weight || "",
          imageUrl: editingProduct.imageUrl || "",
          laborFee: editingProduct.laborFee || "0",
          flowerLaborFee: editingProduct.flowerLaborFee || "0",
          profitFee: editingProduct.profitFee || "0",
          splitFee: editingProduct.splitFee || "0",
          serviceFee: editingProduct.serviceFee || "0",
          adjustFee: editingProduct.adjustFee || "0",
          optionalFee: editingProduct.optionalFee || "0",
          note: editingProduct.note || "",
          paymentAmount: editingProduct.paymentAmount || "0",
          weightIn: editingProduct.weightIn || ["1", "1", "2", "3.00"],
          weightOut: editingProduct.weightOut || ["1", "1", "2", "3.00"],
          weightDiff: editingProduct.weightDiff || ["1", "2", "3.00", "3.00"],
          weightIn2: editingProduct.weightIn2 || ["1", "1", "2", "3.00"],
          weightFlower: editingProduct.weightFlower || ["1", "1", "2", "3.00"],
          weightProfit: editingProduct.weightProfit || ["1", "1", "2", "3.00"],
          barcodeGenerated: editingProduct.barcodeGenerated || "T 1-2-3.00",
          barcodeItemCode: editingProduct.barcodeItemCode || "UAR2301-1",
          barcodeLabel1: editingProduct.barcodeLabel1 || "G 1-2-3.00",
          barcodeLabel2: editingProduct.barcodeLabel2 || "L 0-1-2.00",
          barcodeLabel3: editingProduct.barcodeLabel3 || "J 0-0-0.00",
          barcodeLabel4: editingProduct.barcodeLabel4 || "J 0",
          barcodeFormat: editingProduct.barcodeFormat || "",
          barcodeMode: editingProduct.barcodeMode || "Barcode",
        });
        return;
      }
    }
    setNewProduct({
      date: formatDate("2025-12-30"),
      code: "",
      goldType: "24K",
      productType: "",
      productName: "",
      category: "Jewelry",
      shop: "Downtown",
      location: "Yangon",
      discountType: "Standard",
      weightType: "Gram",
      status: "Hold",
      priceType: "GS",
      quantity: "1",
      sellType: "",
      weight: "",
      imageUrl: "",
      laborFee: "0",
      flowerLaborFee: "0",
      profitFee: "0",
      splitFee: "0",
      serviceFee: "0",
      adjustFee: "0",
      optionalFee: "0",
      note: "",
      paymentAmount: "0",
      weightIn: ["1", "1", "2", "3.00"],
      weightOut: ["1", "1", "2", "3.00"],
      weightDiff: ["1", "2", "3.00", "3.00"],
      weightIn2: ["1", "1", "2", "3.00"],
      weightFlower: ["1", "1", "2", "3.00"],
      weightProfit: ["1", "1", "2", "3.00"],
      barcodeGenerated: "T 1-2-3.00",
      barcodeItemCode: "UAR2301-1",
      barcodeLabel1: "G 1-2-3.00",
      barcodeLabel2: "L 0-1-2.00",
      barcodeLabel3: "J 0-0-0.00",
      barcodeLabel4: "J 0",
      barcodeFormat: "",
      barcodeMode: "Barcode",
    });
  }, [createModalOpen, editingProductId, products]);

  useEffect(() => {
    const handleAfterPrint = () => {
      document.body.classList.remove("print-list", "print-modal");
    };
    window.addEventListener("afterprint", handleAfterPrint);
    return () => window.removeEventListener("afterprint", handleAfterPrint);
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      if (query && !product.productName.toLowerCase().includes(query)) {
        return false;
      }
      if (filters.category) {
        const category = String(product.category || "").toLowerCase();
        if (!category.includes(filters.category.toLowerCase())) {
          return false;
        }
      }
      if (filters.productType) {
        const productType = String(product.productType || "").toLowerCase();
        if (!productType.includes(filters.productType.toLowerCase())) {
          return false;
        }
      }
      if (filters.shop) {
        const shop = String(product.shop || "").toLowerCase();
        if (!shop.includes(filters.shop.toLowerCase())) {
          return false;
        }
      }
      if (filters.location) {
        const location = String(product.location || "").toLowerCase();
        if (!location.includes(filters.location.toLowerCase())) {
          return false;
        }
      }
      if (filters.discountType) {
        const discountType = String(product.discountType || "").toLowerCase();
        if (!discountType.includes(filters.discountType.toLowerCase())) {
          return false;
        }
      }
      if (filters.code) {
        const code = String(product.code || "").toLowerCase();
        if (!code.includes(filters.code.toLowerCase())) {
          return false;
        }
      }
      if (filters.weightType) {
        const weightType = String(product.weightType || "").toLowerCase();
        if (!weightType.includes(filters.weightType.toLowerCase())) {
          return false;
        }
      }
      if (filters.fromDate) {
        const fromDate = new Date(filters.fromDate);
        const productDate = new Date(product.date);
        if (productDate < fromDate) {
          return false;
        }
      }
      if (filters.toDate) {
        const toDate = new Date(filters.toDate);
        const productDate = new Date(product.date);
        if (productDate > toDate) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, products, filters]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    const { key, direction } = sortConfig;

    sorted.sort((a, b) => {
      let left = a[key];
      let right = b[key];

      if (key === "date") {
        left = new Date(left);
        right = new Date(right);
      } else if (key === "code") {
        left = Number(left);
        right = Number(right);
      } else if (key === "weight") {
        left = Number(String(left).split(" ")[0]);
        right = Number(String(right).split(" ")[0]);
      } else {
        left = String(left).toLowerCase();
        right = String(right).toLowerCase();
      }

      if (left < right) return direction === "asc" ? -1 : 1;
      if (left > right) return direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredProducts, sortConfig]);

  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    pageSizeOptions,
    totalPages,
    currentPage,
    pagedItems: pagedProducts,
  } = usePagination(sortedProducts, {
    initialPageSize: 5,
    pageSizeOptions: [5, 10, 15],
  });

  const handleSort = (key) => {
    setPage(1);
    setSortConfig((current) => {
      if (current.key === key) {
        return {
          key,
          direction: current.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setNewProduct((current) => {
      if (current.imageUrl) {
        if (current.imageUrl.startsWith("blob:")) {
          URL.revokeObjectURL(current.imageUrl);
        }
      }
      return { ...current, imageUrl };
    });
  };

  const handleSaveRecord = () => {
    const trimmedName = newProduct.productName.trim();
    const requiredFields = [
      { key: "date", label: "Date" },
      { key: "location", label: "Counter" },
      { key: "productName", label: "Product Name" },
      { key: "productType", label: "Product Type" },
      { key: "priceType", label: "Price Type" },
      { key: "weight", label: "Weight" },
      { key: "quantity", label: "Quantity" },
      { key: "goldType", label: "Gold Type" },
    ];
    const missing = requiredFields
      .filter(({ key }) => {
        if (key === "productName") return !trimmedName;
        const value = String(newProduct[key] ?? "").trim();
        return value.length === 0;
      })
      .map(({ label }) => label);
    if (missing.length) {
      enqueueSnackbar(`Please fill: ${missing.join(", ")}`, {
        variant: "error",
      });
      return;
    }
    if (editingProductId !== null) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProductId
            ? {
                ...product,
                date: newProduct.date || product.date,
                code: newProduct.code || product.code,
                goldType: newProduct.goldType || product.goldType,
                productType: newProduct.productType || product.productType,
                productName: trimmedName,
                category: newProduct.category || product.category,
                shop: newProduct.shop || product.shop,
                location: newProduct.location || product.location,
                discountType: newProduct.discountType || product.discountType,
                weightType: newProduct.weightType || product.weightType,
                status: newProduct.status || product.status,
                priceType: newProduct.priceType || product.priceType,
                quantity: newProduct.quantity || product.quantity,
                sellType: newProduct.sellType || product.sellType,
                laborFee: newProduct.laborFee || product.laborFee,
                flowerLaborFee:
                  newProduct.flowerLaborFee || product.flowerLaborFee,
                profitFee: newProduct.profitFee || product.profitFee,
                splitFee: newProduct.splitFee || product.splitFee,
                serviceFee: newProduct.serviceFee || product.serviceFee,
                adjustFee: newProduct.adjustFee || product.adjustFee,
                optionalFee: newProduct.optionalFee || product.optionalFee,
                note: newProduct.note || product.note,
                paymentAmount:
                  newProduct.paymentAmount || product.paymentAmount,
                weightIn: newProduct.weightIn || product.weightIn,
                weightOut: newProduct.weightOut || product.weightOut,
                weightDiff: newProduct.weightDiff || product.weightDiff,
                weightIn2: newProduct.weightIn2 || product.weightIn2,
                weightFlower: newProduct.weightFlower || product.weightFlower,
                weightProfit: newProduct.weightProfit || product.weightProfit,
                barcodeGenerated:
                  newProduct.barcodeGenerated || product.barcodeGenerated,
                barcodeItemCode:
                  newProduct.barcodeItemCode || product.barcodeItemCode,
                barcodeLabel1:
                  newProduct.barcodeLabel1 || product.barcodeLabel1,
                barcodeLabel2:
                  newProduct.barcodeLabel2 || product.barcodeLabel2,
                barcodeLabel3:
                  newProduct.barcodeLabel3 || product.barcodeLabel3,
                barcodeLabel4:
                  newProduct.barcodeLabel4 || product.barcodeLabel4,
                barcodeFormat:
                  newProduct.barcodeFormat || product.barcodeFormat,
                barcodeMode: newProduct.barcodeMode || product.barcodeMode,
                weight: newProduct.weight || product.weight,
                imageUrl: newProduct.imageUrl || product.imageUrl,
              }
            : product
        )
      );
      setCreateModalOpen(false);
      setEditingProductId(null);
      enqueueSnackbar("Product updated successfully.", {
        variant: "success",
      });
      return;
    }
    const tonePalette = [
      "from-amber-200 to-amber-500",
      "from-rose-200 to-orange-500",
      "from-amber-300 to-yellow-500",
      "from-orange-200 to-amber-500",
      "from-amber-200 to-yellow-600",
    ];
    const nextTone = tonePalette[products.length % tonePalette.length];
    const nextId =
      products.reduce((maxId, product) => Math.max(maxId, product.id), 0) + 1;
    setProducts((prev) => [
      {
        id: nextId,
        date: newProduct.date || "2025-12-30",
        code: newProduct.code || "0",
        goldType: newProduct.goldType || "24K",
        productType: newProduct.productType || "Product",
        productName: trimmedName,
        category: newProduct.category || "Jewelry",
        shop: newProduct.shop || "Downtown",
        location: newProduct.location || "Yangon",
        discountType: newProduct.discountType || "Standard",
        weightType: newProduct.weightType || "Gram",
        status: newProduct.status || "Hold",
        priceType: newProduct.priceType || "GS",
        quantity: newProduct.quantity || "1",
        sellType: newProduct.sellType || "",
        laborFee: newProduct.laborFee || "0",
        flowerLaborFee: newProduct.flowerLaborFee || "0",
        profitFee: newProduct.profitFee || "0",
        splitFee: newProduct.splitFee || "0",
        serviceFee: newProduct.serviceFee || "0",
        adjustFee: newProduct.adjustFee || "0",
        optionalFee: newProduct.optionalFee || "0",
        note: newProduct.note || "",
        paymentAmount: newProduct.paymentAmount || "0",
        weightIn: newProduct.weightIn || ["1", "1", "2", "3.00"],
        weightOut: newProduct.weightOut || ["1", "1", "2", "3.00"],
        weightDiff: newProduct.weightDiff || ["1", "2", "3.00", "3.00"],
        weightIn2: newProduct.weightIn2 || ["1", "1", "2", "3.00"],
        weightFlower: newProduct.weightFlower || ["1", "1", "2", "3.00"],
        weightProfit: newProduct.weightProfit || ["1", "1", "2", "3.00"],
        barcodeGenerated: newProduct.barcodeGenerated || "T 1-2-3.00",
        barcodeItemCode: newProduct.barcodeItemCode || "UAR2301-1",
        barcodeLabel1: newProduct.barcodeLabel1 || "G 1-2-3.00",
        barcodeLabel2: newProduct.barcodeLabel2 || "L 0-1-2.00",
        barcodeLabel3: newProduct.barcodeLabel3 || "J 0-0-0.00",
        barcodeLabel4: newProduct.barcodeLabel4 || "J 0",
        barcodeFormat: newProduct.barcodeFormat || "",
        barcodeMode: newProduct.barcodeMode || "Barcode",
        weight: newProduct.weight || "0",
        action: "Invoice",
        tone: nextTone,
        imageUrl: newProduct.imageUrl,
      },
      ...prev,
    ]);
    setCreateModalOpen(false);
    enqueueSnackbar("Product created successfully.", { variant: "success" });
  };

  const handlePrint = (mode) => {
    document.body.classList.remove("print-list", "print-modal");
    document.body.classList.add(
      mode === "modal" ? "print-modal" : "print-list"
    );
    window.setTimeout(() => window.print(), 0);
  };

  const updateWeightArray = (key, index, value) => {
    setNewProduct((current) => {
      const next = [...(current[key] || [])];
      next[index] = value;
      return { ...current, [key]: next };
    });
  };

  const totalCost = [
    "laborFee",
    "flowerLaborFee",
    "profitFee",
    "splitFee",
    "serviceFee",
    "adjustFee",
    "optionalFee",
  ].reduce((sum, key) => sum + parseNumber(newProduct[key]), 0);

  const isEditing = editingProductId !== null;

  return (
    <div className="app-shell min-h-screen bg-[radial-gradient(circle_at_top,_var(--brand-200)_0,_var(--brand-100)_45%,_var(--brand-50)_100%)] text-[var(--brand-900)]">
      <HeaderBar />
      <SubMenuBar />
      <div className="print-list mx-auto max-w-6xl my-6">
        <ProductListHeader
          onPrint={() => handlePrint("list")}
          onAddNew={() => {
            setEditingProductId(null);
            setCreateModalOpen(true);
          }}
        />

        <div className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-xl backdrop-blur">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <label className="flex items-center gap-2 rounded-full border border-[var(--yellow-200)] bg-[var(--yellow-50)] px-4 py-2 text-[var(--brand-700)] shadow-sm">
              <span className="text-[var(--yellow-500)]">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setPage(1);
                }}
                className="w-56 bg-transparent text-sm text-[var(--brand-900)] placeholder:text-[var(--brand-700)] focus:outline-none"
              />
            </label>
            <button
              type="button"
              onClick={() => setFilterModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[#E0E0E0] bg-white px-4 py-2 text-sm font-medium text-[var(--brand-900)] shadow-sm"
            >
              <FilterIcon />
              Filter By
              <ChevronDownIcon className="h-4 w-4" />
            </button>
          </div>

          <ProductTable
            products={pagedProducts}
            sortConfig={sortConfig}
            onSort={handleSort}
            onView={(product) => setSelectedProduct(product)}
            onEdit={(product) => {
              setEditingProductId(product.id);
              setCreateModalOpen(true);
            }}
            onDelete={(product) => {
              setDeleteTarget(product);
              setDeleteModalOpen(true);
            }}
            formatDate={formatDate}
          />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--brand-200)] pt-4 text-sm text-[var(--brand-700)]">
            <span>Total Results: {filteredProducts.length}</span>
            <div className="flex flex-wrap items-center gap-4">
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex items-center gap-2">
                <span>View :</span>
                <div className="relative">
                  <select
                    value={pageSize}
                    onChange={(event) => {
                      setPageSize(Number(event.target.value));
                      setPage(1);
                    }}
                    className="appearance-none rounded-md border border-[var(--brand-600)] bg-white px-3 py-1 pr-8 text-[var(--brand-900)] focus:outline-none"
                  >
                    {pageSizeOptions.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-[var(--brand-700)]" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[var(--brand-700)]">
                <button
                  className="rounded-full border border-[var(--brand-600)] p-1 transition hover:text-[var(--yellow-600)] disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
                <button
                  className="rounded-full border border-[var(--brand-600)] p-1 text-[var(--brand-900)] transition hover:text-[var(--yellow-600)] disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() =>
                    setPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedProduct ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 py-10">
          <div className="absolute left-6 top-4 text-sm text-white/70">
            View Details
          </div>
          <div className="no-scrollbar w-full max-w-3xl max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="flex items-center gap-4 text-xl font-semibold text-[var(--brand-900)]"
              >
                <BackIcon className="h-6 w-6" />
                View Details
              </button>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close"
                className="rounded-full p-1 text-[var(--brand-700)] transition hover:text-[var(--yellow-600)]"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 space-y-6 text-sm text-[var(--brand-800)]">
              <div className="max-w-md overflow-hidden rounded-2xl bg-[var(--brand-100)]">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.productName}
                  className="h-56 w-full object-cover sm:h-64"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[var(--brand-900)]">
                  Date
                </label>
                <div className="mt-2 flex items-center gap-3 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                  {formatDate(selectedProduct.date)}
                  <CalendarIcon className="ml-auto h-5 w-5 text-[var(--brand-700)]" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-[var(--brand-900)]">
                    Product Category *
                  </label>
                  <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                    {selectedProduct.category || "-"}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[var(--brand-900)]">
                    Product Type *
                  </label>
                  <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                    {selectedProduct.productType || "-"}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[var(--brand-900)]">
                    Shop *
                  </label>
                  <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                    {selectedProduct.shop || "-"}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[var(--brand-900)]">
                    Location *
                  </label>
                  <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                    {selectedProduct.location || "-"}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[var(--brand-900)]">
                    Discount Type / To Type *
                  </label>
                  <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                    {selectedProduct.discountType || "-"}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[var(--brand-900)]">
                    Code No. *
                  </label>
                  <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                    {selectedProduct.code || "-"}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[var(--brand-900)]">
                  Weight Type *
                </label>
                <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                  {selectedProduct.weightType || "-"}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {createModalOpen ? (
        <div className="create-modal-overlay fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 py-10 print:items-start print:bg-transparent">
          <div className="create-modal no-scrollbar w-full max-w-4xl max-h-[calc(100vh-5rem)] overflow-y-auto rounded-[28px] bg-white p-8 shadow-2xl print:max-h-none print:overflow-visible print:shadow-none">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[var(--brand-900)]">
                {isEditing ? "Edit Product" : "Create New"}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setCreateModalOpen(false);
                  setEditingProductId(null);
                }}
                aria-label="Close"
                className="rounded-full p-1 text-[var(--brand-700)] transition hover:text-[var(--yellow-600)]"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-[var(--brand-900)]">
                ရွှေထည် Code သတ်မှတ်ခြင်း
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handlePrint("modal")}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--brand-600)] bg-white px-4 py-2 text-sm font-medium text-[var(--brand-900)] shadow-sm"
                >
                  <PrintIcon />
                  Print
                </button>
                <button
                  type="button"
                  onClick={handleSaveRecord}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--yellow-500)] px-4 py-2 text-sm font-semibold text-white shadow-sm"
                >
                  <SaveIcon className="h-4 w-4" />

                  {isEditing ? "Save Changes" : "Save Record"}
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-6 text-sm text-[var(--brand-800)]">
              <div className="overflow-visible rounded-2xl border border-[var(--brand-200)] bg-white">
                <div className="flex items-center gap-3 bg-[var(--brand-100)] px-5 py-3 text-[var(--yellow-600)]">
                  <SectionCalendarIcon className="h-5 w-5" />
                  အရောင်းမှတ်တမ်း
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-black">
                      Date
                    </label>
                    <div className="mt-2 flex items-center gap-3 input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3">
                      <input
                        type="date"
                        value={newProduct.date}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            date: event.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-sm text-black focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      Counter
                    </label>
                    <div className="mt-2">
                      <CustomSelect
                        value={newProduct.location}
                        onChange={(value) =>
                          setNewProduct((current) => ({
                            ...current,
                            location: value,
                          }))
                        }
                        options={["S1_Counter", "S2_Counter", "S3_Counter"]}
                        placeholder="S1_Counter"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 text-[var(--brand-900)]">
                      <input
                        type="radio"
                        name="status"
                        checked={newProduct.status === "Read"}
                        onChange={() =>
                          setNewProduct((current) => ({
                            ...current,
                            status: "Read",
                          }))
                        }
                      />
                      Read
                    </label>
                    <label className="flex items-center gap-2 text-[var(--brand-900)]">
                      <input
                        type="radio"
                        name="status"
                        checked={newProduct.status === "Hold"}
                        onChange={() =>
                          setNewProduct((current) => ({
                            ...current,
                            status: "Hold",
                          }))
                        }
                      />
                      Hold
                    </label>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[var(--brand-200)] bg-white">
                <div className="flex items-center gap-3 bg-[var(--brand-100)] px-5 py-3 text-[var(--yellow-600)]">
                  <SectionTagIcon className="h-5 w-5" />
                  ပစ္စည်းနှင့်ပတ်သက်သော အသေးစိတ်အချက်အလက်
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-black">
                      ပစ္စည်းအမည်
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                      <input
                        type="text"
                        value={newProduct.productName}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            productName: event.target.value,
                          }))
                        }
                        placeholder="မောင်းကွင်းလက်စွပ်"
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      ပစ္စည်းအမျိုးအစား
                    </label>
                    <div className="mt-2">
                      <CustomSelect
                        value={newProduct.productType}
                        onChange={(value) =>
                          setNewProduct((current) => ({
                            ...current,
                            productType: value,
                          }))
                        }
                        options={filterOptions.productTypes}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      ကုဒ်နံပါတ်
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-700)]">
                      <input
                        type="text"
                        value={newProduct.barcodeItemCode}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            barcodeItemCode: event.target.value,
                          }))
                        }
                        placeholder="Item Code"
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      ပန်းထိမ်ဆရာ
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3">
                      <input
                        type="text"
                        value={newProduct.priceType}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            priceType: event.target.value,
                          }))
                        }
                        placeholder="GS"
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      အတိုင်းအရှည်
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-700)]">
                      <input
                        type="text"
                        value={newProduct.weight}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            weight: event.target.value,
                          }))
                        }
                        placeholder="2.5"
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      အရေအတွက်
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3">
                      <input
                        type="text"
                        value={newProduct.quantity}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            quantity: event.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none text-right"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      ရွှေအမျိုးအစား
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3">
                      <input
                        type="text"
                        value={newProduct.sellType}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            sellType: event.target.value,
                          }))
                        }
                        placeholder="Sell Type"
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      အရည်အသွေး
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3">
                      <input
                        type="text"
                        value={newProduct.goldType}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            goldType: event.target.value,
                          }))
                        }
                        placeholder="??????????????"
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[var(--brand-200)] bg-white">
                <div className="flex items-center gap-3 bg-[var(--brand-100)] px-5 py-3 text-[var(--yellow-600)]">
                  <SectionListIcon className="h-5 w-5" />
                  ကျသင့်ငွေ တွက်ချက်ခြင်း
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-3">
                  <div>
                    <label className="text-xs font-semibold text-black">
                      လက်ခ
                    </label>
                    <div className="mt-2 flex items-center justify-between input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-700)]">
                      MMK
                      <input
                        type="text"
                        value={newProduct.laborFee}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            laborFee: event.target.value,
                          }))
                        }
                        className="w-20 bg-transparent text-right text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      ပန်းထိမ် (လက်ခ)
                    </label>
                    <div className="mt-2 flex items-center justify-between input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-700)]">
                      MMK
                      <input
                        type="text"
                        value={newProduct.flowerLaborFee}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            flowerLaborFee: event.target.value,
                          }))
                        }
                        className="w-20 bg-transparent text-right text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      အမြတ် (လက်ခ)
                    </label>
                    <div className="mt-2 flex items-center justify-between input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                      MMK
                      <input
                        type="text"
                        value={newProduct.profitFee}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            profitFee: event.target.value,
                          }))
                        }
                        className="w-20 bg-transparent text-right text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      အရောင်တင်ခ
                    </label>
                    <div className="mt-2 flex items-center justify-between input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-700)]">
                      MMK
                      <input
                        type="text"
                        value={newProduct.splitFee}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            splitFee: event.target.value,
                          }))
                        }
                        className="w-20 bg-transparent text-right text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      ကျောက်ဖိုးသင့်ငွေ
                    </label>
                    <div className="mt-2 flex items-center justify-between input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-700)]">
                      MMK
                      <input
                        type="text"
                        value={newProduct.serviceFee}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            serviceFee: event.target.value,
                          }))
                        }
                        className="w-20 bg-transparent text-right text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      ရွှေဖိုးသင့်ငွေ
                    </label>
                    <div className="mt-2 flex items-center justify-between input-field rounded-xl border border-[var(--brand-300)] bg-[var(--brand-50)] px-4 py-3 text-[var(--brand-900)]">
                      MMK
                      <input
                        type="text"
                        value={newProduct.adjustFee}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            adjustFee: event.target.value,
                          }))
                        }
                        className="w-20 bg-transparent text-right text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      ချိတ်ချိန် (Optional)
                    </label>
                    <div className="mt-2 flex items-center justify-between input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-700)]">
                      MMK
                      <input
                        type="text"
                        value={newProduct.optionalFee}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            optionalFee: event.target.value,
                          }))
                        }
                        className="w-20 bg-transparent text-right text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <div className="rounded-2xl border border-[var(--yellow-100)] bg-[var(--yellow-50)] px-5 py-4 text-[var(--brand-800)]">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        စုစုပေါင်း ကျသင့်ငွေ
                      </span>
                      <span className="text-xl font-semibold text-[var(--yellow-600)]">
                        {totalCost.toLocaleString()}{" "}
                        <span className="text-xs">MMK</span>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-semibold text-black">
                      မှတ်ချက်
                    </label>
                    {/* <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3"> */}
                    <textarea
                      value={newProduct.note}
                      onChange={(event) =>
                        setNewProduct((current) => ({
                          ...current,
                          note: event.target.value,
                        }))
                      }
                      rows="3"
                      placeholder="မှတ်ချက်"
                      className="w-full resize-none px-4 py-3 bg-transparent border rounded-xl mt-2 border-[#D1D5DB] text-sm text-black placeholder:text-[#CCCCCC] focus:outline-none"
                    />
                    {/* </div> */}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[var(--brand-200)] bg-white">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm font-semibold text-[var(--brand-900)]">
                    ပေါက်စျေး
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-xl border border-[var(--yellow-100)] bg-[var(--yellow-50)] px-4 py-2 text-sm text-[var(--brand-700)]">
                      <span>MMK</span>
                      <input
                        type="text"
                        value={newProduct.paymentAmount}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            paymentAmount: event.target.value,
                          }))
                        }
                        className="w-28 bg-transparent text-right text-sm text-[var(--yellow-600)] focus:outline-none"
                      />
                    </div>
                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center input-field rounded-xl border border-[var(--brand-300)] text-[var(--brand-700)]"
                      onClick={() =>
                        setNewProduct((current) => ({
                          ...current,
                          paymentAmount: "0",
                        }))
                      }
                    >
                      <RefreshIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="border-t border-[var(--brand-200)]">
                  <div className="flex items-center gap-3 bg-[var(--brand-100)] px-5 py-3 text-[var(--yellow-600)]">
                    <SectionScaleIcon className="h-5 w-5" />
                    အလေးချိန် တွက်ချက်ခြင်း
                  </div>
                  <div className="grid gap-4 p-5">
                    <div className="grid grid-cols-[120px_repeat(4,1fr)] items-start gap-3 text-xs text-[var(--brand-700)]">
                      <div />
                      <div className="flex items-center justify-center gap-2">
                        <span className="h-3.5 w-3.5 rounded-full border border-[var(--brand-700)]" />
                        Gram
                      </div>
                      <div className="text-center">Kyat</div>
                      <div className="text-center">Pae</div>
                      <div className="text-center">Yway</div>
                      <div />
                      <div className="text-center text-[10px] text-[var(--brand-600)]">
                        ဂရမ်ချိန်
                      </div>
                      <div className="text-center text-[10px] text-[var(--brand-600)]">
                        ကျပ်
                      </div>
                      <div className="text-center text-[10px] text-[var(--brand-600)]">
                        ပဲ
                      </div>
                      <div className="text-center text-[10px] text-[var(--brand-600)]">
                        ရွေး
                      </div>
                    </div>

                    <div className="grid grid-cols-[120px_repeat(4,1fr)] items-center gap-3 text-sm text-[var(--brand-700)]">
                      <div>အထည်ချိန်</div>
                      {newProduct.weightIn.map((value, index) => (
                        <div
                          key={`in-${index}`}
                          className="input-field rounded-lg border border-[var(--brand-300)] bg-white px-4 py-2 text-right text-[var(--brand-900)]"
                        >
                          <input
                            type="text"
                            value={value}
                            onChange={(event) =>
                              updateWeightArray(
                                "weightIn",
                                index,
                                event.target.value
                              )
                            }
                            className="w-full bg-transparent text-right text-sm text-black focus:outline-none"
                          />
                        </div>
                      ))}
                      <div>‌ကျောက်ချိန်</div>
                      {newProduct.weightOut.map((value, index) => (
                        <div
                          key={`out-${index}`}
                          className="input-field rounded-lg border border-[var(--brand-300)] bg-white px-4 py-2 text-right text-[var(--brand-900)]"
                        >
                          <input
                            type="text"
                            value={value}
                            onChange={(event) =>
                              updateWeightArray(
                                "weightOut",
                                index,
                                event.target.value
                              )
                            }
                            className="w-full bg-transparent text-right text-sm text-black focus:outline-none"
                          />
                        </div>
                      ))}
                      <div className="text-[var(--yellow-600)]"></div>
                      {newProduct.weightDiff.map((value, index) => (
                        <div
                          key={`diff-${index}`}
                          className="rounded-lg border border-[var(--yellow-200)] bg-[var(--yellow-50)] px-4 py-2 text-right text-[var(--yellow-600)]"
                        >
                          <input
                            type="text"
                            value={value}
                            onChange={(event) =>
                              updateWeightArray(
                                "weightDiff",
                                index,
                                event.target.value
                              )
                            }
                            className="w-full bg-transparent text-right text-sm text-[var(--yellow-600)] focus:outline-none"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-dashed border-[var(--brand-300)] pt-4" />

                    <div className="grid grid-cols-[120px_repeat(4,1fr)] items-center gap-3 text-sm text-[var(--brand-700)]">
                      <div>အလျော့တွက်</div>
                      {newProduct.weightIn2.map((value, index) => (
                        <div
                          key={`in2-${index}`}
                          className="input-field rounded-lg border border-[var(--brand-300)] bg-white px-4 py-2 text-right text-[var(--brand-900)]"
                        >
                          <input
                            type="text"
                            value={value}
                            onChange={(event) =>
                              updateWeightArray(
                                "weightIn2",
                                index,
                                event.target.value
                              )
                            }
                            className="w-full bg-transparent text-right text-sm text-black focus:outline-none"
                          />
                        </div>
                      ))}
                      <div>ပန်းထိမ် (အလျော့)</div>
                      {newProduct.weightFlower.map((value, index) => (
                        <div
                          key={`flower-${index}`}
                          className="input-field rounded-lg border border-[var(--brand-300)] bg-white px-4 py-2 text-right text-[var(--brand-900)]"
                        >
                          <input
                            type="text"
                            value={value}
                            onChange={(event) =>
                              updateWeightArray(
                                "weightFlower",
                                index,
                                event.target.value
                              )
                            }
                            className="w-full bg-transparent text-right text-sm text-black focus:outline-none"
                          />
                        </div>
                      ))}
                      <div>အမြတ် (အလျော့)</div>
                      {newProduct.weightProfit.map((value, index) => (
                        <div
                          key={`profit-${index}`}
                          className="input-field rounded-lg border border-[var(--brand-300)] bg-white px-4 py-2 text-right text-[var(--brand-900)]"
                        >
                          <input
                            type="text"
                            value={value}
                            onChange={(event) =>
                              updateWeightArray(
                                "weightProfit",
                                index,
                                event.target.value
                              )
                            }
                            className="w-full bg-transparent text-right text-sm text-black focus:outline-none"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-[var(--yellow-100)] bg-[var(--yellow-50)] px-5 py-4 text-[var(--brand-800)]">
                      <div className="grid grid-cols-[140px_repeat(4,1fr)] items-center gap-3 text-sm">
                        <span className="font-semibold">
                          စုစုပေါင်း ရွှေချိန်
                        </span>
                        <span className="text-center text-[var(--brand-900)]">
                          {newProduct.weightDiff[0] || ""}
                        </span>
                        <span className="text-center text-[var(--brand-900)]">
                          {newProduct.weightDiff[1] || ""}
                        </span>
                        <span className="text-center text-[var(--brand-900)]">
                          {newProduct.weightDiff[2] || ""}
                        </span>
                        <span className="text-center text-[var(--brand-900)]">
                          {newProduct.weightDiff[3] || ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[var(--brand-200)] bg-white">
                <div className="flex items-center gap-3 bg-[var(--brand-100)] px-5 py-3 text-[var(--yellow-600)]">
                  <SectionImageIcon className="h-5 w-5" />
                  ပစ္စည်းပုံ
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-black">
                    Item Image
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-3 flex h-48 max-w-md w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#D1D5DB] bg-white text-center text-[var(--brand-700)]"
                  >
                    {newProduct.imageUrl ? (
                      <img
                        src={newProduct.imageUrl}
                        alt="Upload preview"
                        className="h-full w-full rounded-2xl object-cover"
                      />
                    ) : (
                      <>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-100)]">
                          <UploadIcon className="h-12 w-12 text-[var(--brand-600)]" />
                        </div>
                        <span className="text-sm font-semibold text-[var(--brand-900)]">
                          Click to upload image
                        </span>
                        <span className="text-xs text-[#6B7280]">
                          PNG, JPG up to 5MB
                        </span>
                      </>
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[var(--brand-200)] bg-white">
                <div className="flex items-center gap-3 bg-[var(--brand-100)] px-5 py-3 text-[var(--yellow-600)]">
                  <SectionBarcodeIcon className="h-5 w-5" />
                  Barcode ထုတ်ခြင်း
                </div>
                <div className="grid gap-4 p-5 text-sm text-[var(--brand-800)] sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-black">
                      Generated Text
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-900)]">
                      <input
                        type="text"
                        value={newProduct.barcodeGenerated}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            barcodeGenerated: event.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-black">
                      Item Code
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-900)]">
                      <input
                        type="text"
                        value={newProduct.barcodeItemCode}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            barcodeItemCode: event.target.value,
                          }))
                        }
                        placeholder="Item Code"
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      Label 1
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-900)]">
                      <input
                        type="text"
                        value={newProduct.barcodeLabel1}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            barcodeLabel1: event.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      Label 2
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-900)]">
                      <input
                        type="text"
                        value={newProduct.barcodeLabel2}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            barcodeLabel2: event.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      Label 3
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-900)]">
                      <input
                        type="text"
                        value={newProduct.barcodeLabel3}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            barcodeLabel3: event.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black">
                      Label 4
                    </label>
                    <div className="mt-2 input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-[var(--brand-900)]">
                      <input
                        type="text"
                        value={newProduct.barcodeLabel4}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            barcodeLabel4: event.target.value,
                          }))
                        }
                        className="w-full bg-transparent text-sm text-black placeholder:text-[var(--brand-600)] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="input-field rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-center text-[var(--brand-700)]">
                      <input
                        type="text"
                        value={newProduct.barcodeFormat}
                        onChange={(event) =>
                          setNewProduct((current) => ({
                            ...current,
                            barcodeFormat: event.target.value,
                          }))
                        }
                        placeholder="Set Barcode Format"
                        className="w-full bg-transparent text-sm text-black  focus:outline-none text-center"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      className={
                        newProduct.barcodeMode === "Barcode"
                          ? "inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--yellow-500)] px-4 py-2 text-sm font-semibold text-white"
                          : "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--yellow-500)] bg-white px-4 py-2 text-sm font-semibold text-[var(--yellow-600)]"
                      }
                      onClick={() =>
                        setNewProduct((current) => ({
                          ...current,
                          barcodeMode: "Barcode",
                        }))
                      }
                    >
                      <BarcodeIcon className="h-4 w-4" />
                      Barcode
                    </button>
                    <button
                      type="button"
                      className={
                        newProduct.barcodeMode === "QRCode"
                          ? "inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--yellow-500)] px-4 py-2 text-sm font-semibold text-white"
                          : "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--yellow-500)] bg-white px-4 py-2 text-sm font-semibold text-[var(--yellow-600)]"
                      }
                      onClick={() =>
                        setNewProduct((current) => ({
                          ...current,
                          barcodeMode: "QRCode",
                        }))
                      }
                    >
                      <QRCodeIcon className="h-4 w-4" />
                      QRCode
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {filterModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 py-10">
          <div className="no-scrollbar w-full max-w-4xl max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-black">Filter By</h2>
              <button
                type="button"
                onClick={() => setFilterModalOpen(false)}
                aria-label="Close"
                className="rounded-full p-1 text-[var(--brand-700)] transition hover:text-[var(--yellow-600)]"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 grid gap-5 text-sm text-[var(--brand-800)] sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-black">
                  From Date
                </label>
                <div className="input-field mt-2 flex items-center rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3">
                  <input
                    type="date"
                    value={filterDraft.fromDate}
                    onChange={(event) =>
                      setFilterDraft((current) => ({
                        ...current,
                        fromDate: event.target.value,
                      }))
                    }
                    className="w-full bg-transparent text-sm text-black focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-black">
                  To Date
                </label>
                <div className="input-field mt-2 flex items-center rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3">
                  <input
                    type="date"
                    value={filterDraft.toDate}
                    onChange={(event) =>
                      setFilterDraft((current) => ({
                        ...current,
                        toDate: event.target.value,
                      }))
                    }
                    className="w-full bg-transparent text-sm text-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-black">
                  Product Category *
                </label>
                <div className="mt-2">
                  <CustomSelect
                    value={filterDraft.category}
                    onChange={(value) =>
                      setFilterDraft((current) => ({
                        ...current,
                        category: value,
                      }))
                    }
                    options={filterOptions.categories}
                    placeholder="Please Select Price Type"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-black">
                  Product Type *
                </label>
                <div className="mt-2">
                  <CustomSelect
                    value={filterDraft.productType}
                    onChange={(value) =>
                      setFilterDraft((current) => ({
                        ...current,
                        productType: value,
                      }))
                    }
                    options={filterOptions.productTypes}
                    placeholder="Please Select Product"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-black">
                  Shop *
                </label>
                <div className="mt-2">
                  <CustomSelect
                    value={filterDraft.shop}
                    onChange={(value) =>
                      setFilterDraft((current) => ({
                        ...current,
                        shop: value,
                      }))
                    }
                    options={filterOptions.shops}
                    placeholder="Please Select Price Type"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-black">
                  Location *
                </label>
                <div className="mt-2">
                  <CustomSelect
                    value={filterDraft.location}
                    onChange={(value) =>
                      setFilterDraft((current) => ({
                        ...current,
                        location: value,
                      }))
                    }
                    options={filterOptions.locations}
                    placeholder="Please Select Product"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-black">
                  Discount Type / To Type *
                </label>
                <div className="mt-2">
                  <CustomSelect
                    value={filterDraft.discountType}
                    onChange={(value) =>
                      setFilterDraft((current) => ({
                        ...current,
                        discountType: value,
                      }))
                    }
                    options={filterOptions.discountTypes}
                    placeholder="Please Select Discount Type"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-black">
                  Code No. *
                </label>
                <div className="input-field mt-2 rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3">
                  <input
                    type="text"
                    value={filterDraft.code}
                    onChange={(event) =>
                      setFilterDraft((current) => ({
                        ...current,
                        code: event.target.value,
                      }))
                    }
                    placeholder="Enter Bag Net Price"
                    className="w-full bg-transparent text-sm text-black  focus:outline-none"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-black">
                  Weight Type *
                </label>
                <div className="mt-2">
                  <CustomSelect
                    value={filterDraft.weightType}
                    onChange={(value) =>
                      setFilterDraft((current) => ({
                        ...current,
                        weightType: value,
                      }))
                    }
                    options={filterOptions.weightTypes}
                    placeholder="Select Weight Type"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  const cleared = {
                    fromDate: "",
                    toDate: "",
                    category: "",
                    productType: "",
                    shop: "",
                    location: "",
                    discountType: "",
                    code: "",
                    weightType: "",
                  };
                  setFilterDraft(cleared);
                  setFilters(cleared);
                }}
                className="flex-1 rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-sm font-medium text-black"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => {
                  setFilters(filterDraft);
                  setFilterModalOpen(false);
                }}
                className="flex-1 rounded-xl bg-[var(--yellow-500)] px-4 py-3 text-sm font-semibold text-white"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {deleteModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8">
          <div className="no-scrollbar w-full max-w-md max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold text-black">
                Delete Product
              </h2>
              <button
                type="button"
                onClick={() => {
                  setDeleteModalOpen(false);
                  setDeleteTarget(null);
                }}
                aria-label="Close"
                className="rounded-full p-1 text-[var(--brand-700)] transition hover:text-[var(--yellow-600)]"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-3 text-sm text-[var(--brand-800)]">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-black">
                {deleteTarget?.productName || "this product"}
              </span>
              ?
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setDeleteModalOpen(false);
                  setDeleteTarget(null);
                }}
                className="rounded-xl border border-[var(--brand-300)] bg-white px-4 py-2 text-sm font-medium text-black"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="rounded-xl bg-[var(--yellow-500)] px-4 py-2 text-sm font-semibold text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
