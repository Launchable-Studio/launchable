const hasNone = (...values) => values.every((v) => !v);
const hasAll = (...values) => values.every((v) => v);

export { hasNone, hasAll };
