import { toast } from "react-toastify";

export const getCurrentItems = () => {
  const exisItems = localStorage.getItem("estates");
  return exisItems ? JSON.parse(exisItems) : [];
};

const saveItem = (items) => {
  localStorage.setItem("estates", JSON.stringify(items));
};

export const saveItemToLS = (id) => {
  const exisEstates = getCurrentItems();
  if (!exisEstates.includes(id)) {
    exisEstates.push(id);
    saveItem(exisEstates);
    toast.success('Item saved!')
  } else {
    toast.error("Item already existed!");
  }
};
