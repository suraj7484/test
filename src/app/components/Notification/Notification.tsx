import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Icon } from "./Icon";

interface notificationProps {
  variant?: "danger" | "success" | "warning" | "info";
  content?: string;
  open: boolean;
  onClose?: () => void;
  closeTime?: number;
}

const Notification = (props: notificationProps) => {
  const {
    variant = "success",
    content,
    open = true,
    onClose,
    closeTime,
  } = props;

  const [status, setStatus] = useState(open);

  if (closeTime) {
    setInterval(function () {
      console.log("sjkdbcskd");
      setStatus(false);
    }, closeTime);
  }
  useEffect(() => {
    setStatus(open);
  }, [open]);

  if (status) {
    return (
      <div className={["notification-div", variant].join(" ")}>
        <div className="icons">{Icon(variant)}</div>
        <p className="content">{content}</p>
        <div className="action">
          <button className="close-btn" onClick={onClose}>
            <MdClose className="icon-btn" />
          </button>
        </div>
      </div>
    );
  }
  return null;
};

export default Notification;
