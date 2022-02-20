import {
  MdOutlineErrorOutline,
  MdWarningAmber,
  MdOutlineInfo,
  MdDoneAll,
} from "react-icons/md";

export const Icon = (variant: "danger" | "success" | "warning" | "info") => {
  let icon: JSX.Element;
  switch (variant) {
    case "danger":
      icon = <MdOutlineErrorOutline />;
      break;
    case "info":
      icon = <MdOutlineInfo />;
      break;
    case "success":
      icon = <MdDoneAll />;
      break;
    case "warning":
      icon = <MdWarningAmber />;
      break;
    default:
      return;
  }
  return icon;
};
