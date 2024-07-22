const buildLabel = (elementType, text, hintText) => {
    const labelElement = document.createElement("label");
    labelElement.innerHTML = text;
    labelElement.style.fontWeight = elementType === "group" ? "bold" : "lighter";
  
    if (hintText) {
      const hintElement = document.createElement("span");
      hintElement.classList.add("tooltip");
      hintElement.innerHTML = " ⓘ";
  
      const hintTextElement = document.createElement("span");
      hintTextElement.classList.add("tooltip-text");
      hintTextElement.innerHTML = hintText;
  
      hintElement.appendChild(hintTextElement);
  
      labelElement.appendChild(hintElement);
    }
  
    return labelElement;
  };
  