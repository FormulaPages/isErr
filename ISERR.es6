
import error from 'formula-errors';

export default function ISERR(value) {
    if (typeof value === 'undefined' || value === null) { return false; }
    value = value.valueOf();
    return ([error.value, error.ref, error.div0, error.num, error.name, error.nil]).indexOf(value) >= 0 ||
        (typeof value === 'number' && (value !== value || !isFinite(value))); // ensure numbers are not NaN or Infinity

}
