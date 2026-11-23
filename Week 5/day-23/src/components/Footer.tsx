import { memo } from "react";

// memo can skip rerenders when props have not changed.
const Footer = memo(function Footer() {
  console.log("Footer rendered");

  return (
    <footer>
      <p>TaskFlow Footer — No Context used here.</p>
    </footer>
  );
});

export default Footer;