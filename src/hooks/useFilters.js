import { useEffect, useMemo, useState } from "react";

const useFilters = (products) => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filterDraft, setFilterDraft] = useState({
    fromDate: "",
    toDate: "",
    category: "",
    productType: "",
    shop: "",
    location: "",
    discountType: "",
    code: "",
    weightType: "",
  });
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    category: "",
    productType: "",
    shop: "",
    location: "",
    discountType: "",
    code: "",
    weightType: "",
  });

  useEffect(() => {
    if (!filterModalOpen) return;
    setFilterDraft(filters);
  }, [filterModalOpen, filters]);

  const filterOptions = useMemo(() => {
    const unique = (key) =>
      Array.from(
        new Set(
          products
            .map((product) => product[key])
            .filter((value) => value !== undefined && value !== "")
        )
      );
    const defaults = {
      categories: ["Jewelry"],
      productTypes: [],
      shops: ["Downtown", "Uptown", "City Mall"],
      locations: ["Yangon", "Mandalay", "Naypyidaw"],
      discountTypes: ["Standard", "Seasonal", "VIP"],
      weightTypes: ["Gram", "Kyat/Pae/Yway"],
    };
    const categories = unique("category");
    const productTypes = unique("productType");
    const shops = unique("shop");
    const locations = unique("location");
    const discountTypes = unique("discountType");
    const weightTypes = unique("weightType");
    return {
      categories: categories.length ? categories : defaults.categories,
      productTypes: productTypes.length ? productTypes : defaults.productTypes,
      shops: shops.length ? shops : defaults.shops,
      locations: locations.length ? locations : defaults.locations,
      discountTypes: discountTypes.length ? discountTypes : defaults.discountTypes,
      weightTypes: weightTypes.length ? weightTypes : defaults.weightTypes,
    };
  }, [products]);

  return {
    filterModalOpen,
    setFilterModalOpen,
    filterDraft,
    setFilterDraft,
    filters,
    setFilters,
    filterOptions,
  };
};

export default useFilters;
