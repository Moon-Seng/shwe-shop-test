import { useState } from "react";

const useProducts = (initialProducts) => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  return {
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
  };
};

export default useProducts;
