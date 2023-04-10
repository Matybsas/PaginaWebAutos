function pago(selectElement) {
  var selectedValue = selectElement.value;
  if (selectedValue !== "") {
    window.location.href = selectedValue;
  }
}