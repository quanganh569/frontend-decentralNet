import React from "react";

const Button = ({
  className = "",
  type = "submit",
  fullWidth = false,
  loading = false,
  disabled = false,
  variant = "",
  padding = "p-3",
  preventDefault = false,
  onClick = () => { },
  children,
}) => {
  return (
    <div
      className={` ${fullWidth && "w-full"} ${className}`}
    >
      <button
        type={type}
        disabled={disabled || loading}
        onClick={(e) => {
          preventDefault && e.preventDefault();
          onClick()
        }}
        className={`whitespace-nowrap box-border flex justify-center items-center 
          ${padding} 
          ${fullWidth && "w-full"}
          ${variant === "primary" && "button-primary"}
          ${variant === "secondary" && "button-secondary"}
          ${variant === "create" && "button-create"}
          ${variant === "schedule" && "button-schedule"}
          ${variant === "support" && "button-support"}
          ${variant === "send" && "button-send"}
          ${variant === "danger" && "button-danger"}
          ${variant === "domain" && "button-domain"}
          ${variant === "cart" && "button-cart"}
          ${variant === "profile" && "button-profile"}
        `}
      >
        {loading && (
          <div className="h-[18px] w-[18px] relative mr-2">
            <div className="rounded-full h-[12px] w-[12px] bg-[#e4e4e4] absolute-center z-40" />
            <div className="h-[18px] w-[18px] absolute-center bg-white dark:bg-dark-800 dark:text-dark-100 border dark:border-dark-800 opacity-50 rounded-full z-20" />
            <div className="rounded-tr-full h-[8px] w-[8px] absolute z-30 bottom-1/2 left-1/2 bg-white dark:bg-dark-800 dark:text-dark-100 border dark:border-dark-800 loading-spin" />
          </div>
        )}
        {children}
      </button>
    </div>
  );
};

export default Button;
