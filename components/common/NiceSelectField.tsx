"use client";

import { useEffect, useRef } from "react";
import type { NiceSelect } from "nice-select2";


type Option = {
  value: string;
  label: string;
};

type NiceSelectFieldProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
};

export default function NiceSelectField({
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "selectize border-2 border-border-color-9 text-[14px] leading-60px h-65px",
}: NiceSelectFieldProps) {
  const selectRef = useRef<HTMLSelectElement>(null);
  const niceSelectInstanceRef = useRef<NiceSelect | null>(null);
  const changeHandlerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Dynamic import so the UMD module only evaluates in the browser
    // (it references `self`, which doesn't exist during Next.js SSR).
    // Use the named `bind` export (not `NiceSelect.bind`, which would
    // resolve to Function.prototype.bind and never initialize the widget).
    import("nice-select2").then(({ bind }) => {
      if (!isMounted || !selectRef.current) return;

      niceSelectInstanceRef.current = bind(selectRef.current, {
        placeholder,
        searchable: false,
      });

      const handleNativeChange = () => {
        if (selectRef.current) onChange(selectRef.current.value);
      };
      changeHandlerRef.current = handleNativeChange;
      selectRef.current.addEventListener("change", handleNativeChange);
    });

    return () => {
      isMounted = false;
      if (selectRef.current && changeHandlerRef.current) {
        selectRef.current.removeEventListener("change", changeHandlerRef.current);
      }
      changeHandlerRef.current = null;
      niceSelectInstanceRef.current?.destroy();
      niceSelectInstanceRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <select
      ref={selectRef}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}