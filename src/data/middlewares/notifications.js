import { toast } from "react-toastify";
const notificationsMiddleware = () => (next) => (action) => {
  if (action.successMessage && /(.*)_(SUCCESS)/.test(action.type)) {
    toast.success(action.successMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  next(action);
};

export default notificationsMiddleware;
