document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer p:nth-of-type(2)");
    const now = new Date();
  
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
  
    footer.textContent = `Last Update: ${now.toLocaleString("en-US", options)}`;
  });
  