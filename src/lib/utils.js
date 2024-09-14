import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ------- Update Table DATA -------
export function valueUpdater(updaterOrValue, ref) {
  ref.value = typeof updaterOrValue === 'function'
    ? updaterOrValue(ref.value)
    : updaterOrValue;
}



// --------- Make values As FormData ------------
export function ValuesToFormData(values) {
  if (!values) {
    return null;
  }
  const valuesList = Object.keys(values);

  const formData = new FormData();
  valuesList.forEach((item) => {
    formData.append(item, values[item]);
  })


  return formData
}