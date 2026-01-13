import { useEffect, useRef, useState } from "react";

const CustomSelect = ({ value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const displayValue = value || placeholder;

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="input-field flex w-full items-center justify-between rounded-xl border border-[var(--brand-300)] bg-white px-4 py-3 text-sm text-black"
      >
        <span className="text-black">{displayValue}</span>
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
          <path
            d="m4 6 4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 max-h-56 overflow-auto rounded-xl border border-[var(--brand-300)] bg-white shadow-lg">
          <button
            type="button"
            className="w-full px-4 py-2 text-left text-sm text-black hover:bg-[var(--brand-100)]"
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            {placeholder}
          </button>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className="w-full px-4 py-2 text-left text-sm text-black hover:bg-[var(--brand-100)]"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CustomSelect;
