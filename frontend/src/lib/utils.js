export function getPlainText(htmlString) {
  // Step 1: Decode unicode escape sequences like \u003C to actual characters
  const unicodeDecoded = htmlString.replace(/\\u[\dA-F]{4}/gi, match => {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
  });

  // Step 2: Create a temporary DOM element to strip HTML tags
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = unicodeDecoded;

  return tempDiv.textContent || tempDiv.innerText || "";
}
