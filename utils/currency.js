export const currencyFormatter = price => {
  try {
    const parts = price.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "Rp. " + parts.join(",")
  } catch (exception) {
    throw exception;
  }
}