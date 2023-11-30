import React from "react";

export default function Input({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  icon,
  disabled,
  onFocus,
}) {
  return (
    <div className="flex items-center space-x-3">
      <label className="block mb-2 text-[13px] 2xl:text-[14px] font-semibold text-gray-900 dark:text-white">
        {label}
      </label>

      <div className="border rounded-md border-[#2e2d2c]">
        <input
          type={type}
          name={name}
          value={value}
          onFocus={onFocus}
          className={`h-full outline-none rounded text-gray-900 text-sm py-2  px-3  block w-full `}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
