import { formatDistance } from "date-fns";

/**
 * Function to calculate the distance between the current date and the provided date.
 *
 * @param {string} date - The date to compare with the current date. Should be in a format recognized by the JavaScript Date object.
 *
 * @returns {string} A string representing the distance of the provided date from the current date.
 *
 * @example
 * // returns "5 days ago"
 * dateFromNow('2022-03-01')
 *
 * @example
 * // returns "2 months ago"
 * dateFromNow('2022-01-06')
 */

export const dateFromNow = (date) => {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });
};
