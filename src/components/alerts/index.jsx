// confirmAlert.js
import Swal from "sweetalert2";

export const confirmAlert = ({ 
  title = "Are you sure?", 
  text = "You won't be able to revert this!", 
  confirmText = "Yes, proceed!", 
  cancelText = "Cancel" 
}) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
  });
};


