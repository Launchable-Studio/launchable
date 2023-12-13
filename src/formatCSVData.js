import defined from "./defined";

/**
 * `formatCSVData(data)`
 *
 * This function formats an array of objects into a CSV string.
 *
 * @param {Array} data - The data to be formatted into CSV. Each object in the array represents a row in the CSV, and the keys of the object represent the column headers.
 *
 * ### Example
 *
 * ```javascript
 * const data = [
 *   { ID: 1, Name: "John Doe", Age: 30 },
 *   { ID: 2, Name: "Jane Doe", Age: 25 }
 * ];
 *
 * const csvData = formatCSVData(data);
 * // csvData will be "ID,Name,Age\n1,John Doe,30\n2,Jane Doe,25"
 * ```
 */

const formatCSVData = (data) => {
  if (data.length === 0) return "";

  // Get the keys from the first item, which will be our CSV headers
  const headers = Object.keys(data[0]);

  // Map each item in the data array to a CSV row
  const rows = data.map((item) =>
    headers
      .map((header) => {
        const value = item[header];
        if (!defined(value)) {
          return "";
        } else if (typeof value === "object" || Array.isArray(value)) {
          // Convert Maps and Sets to an array before stringifying
          if (value instanceof Map || value instanceof Set) {
            return JSON.stringify(Array.from(value));
          } else {
            return JSON.stringify(value);
          }
        } else {
          return value;
        }
      })
      .join(",")
  );

  // Combine headers and rows
  const csvData = [headers.join(","), ...rows].join("\n");

  return csvData;
};

export default formatCSVData;
