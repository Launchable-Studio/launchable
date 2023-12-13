/**
 * `downloadFile(data, filename, mimeType)`
 *
 * This function creates a downloadable file from the provided data.
 *
 * @param {string} data - The data to be written into the file.
 * @param {string} [filename="download.txt"] - The name of the file to be downloaded.
 * @param {string} [mimeType="text/plain"] - The MIME type of the file.
 *
 * ### Example
 *
 * ```javascript
 * // Download a plain text file named "example.txt" with the content "Hello, World!"
 * downloadFile("Hello, World!", "example.txt", "text/plain");
 *
 * // Download a CSV file named "data.csv" with some sample data
 * downloadFile("Name,Age\nJohn Doe,30\nJane Doe,25", "data.csv", "text/csv");
 *
 * // Download a JSON file named "data.json" with a JavaScript object
 * const obj = { name: "John Doe", age: 30 };
 * downloadFile(JSON.stringify(obj), "data.json", "application/json");
 * ```
 */

const downloadFile = (
  data,
  filename = "download.txt",
  mimeType = "text/plain"
) => {
  const blob = new Blob([data], { type: mimeType });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.click();
};

/**
 * `downloadCSV(data, filename)`
 *
 * This function creates a downloadable CSV file from the provided data.
 *
 * @param {string} data - The data to be written into the file.
 * @param {string} [filename="download.pdf"] - The name of the file to be downloaded.
 *
 * ### Example
 *
 * ```javascript
 * // Download a CSV file named "data.csv" with the content "ID,Name,Age"
 * downloadCSV("ID,Name,Age\n1,John Doe,30\n2,Jane Doe,25", "data.csv");
 * ```
 */
export const downloadCSV = (data, filename = "download.csv") => {
  downloadFile(data, filename, "text/csv");
};

/**
 * `downloadJSON(data, filename)`
 *
 * This function creates a downloadable JSON file from the provided data.
 *
 * @param {object} data - The data to be written into the file.
 * @param {string} [filename="download.json"] - The name of the file to be downloaded.
 *
 * ### Example
 *
 * ```javascript
 * // Download a JSON file named "example.json" with the content {"ID": 1, "Name": "John"}
 * downloadJSON({"ID": 1, "Name": "John"}, "example.json");
 * ```
 */

export const downloadJSON = (data, filename = "download.json") => {
  const jsonData = JSON.stringify(data);
  downloadFile(jsonData, filename, "application/json");
};
