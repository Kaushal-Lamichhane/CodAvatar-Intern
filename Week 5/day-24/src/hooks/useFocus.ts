
import { useRef } from "react";

// A reusable Hook for creating a reference to an HTML element.
function useFocus<T extends HTMLElement>() {
  // Store a reference to the actual HTML element.
  const ref = useRef<T>(null);

  return ref;
}

export default useFocus;
