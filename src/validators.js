export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

// Uses a regular expression (regex) to check whether it looks enough like an
// email address.  Broken down:
// ^ Matches the start the text
// \S+ Matches one or more non-whitespace characters before the @
// @ A literal at sign
// \S+ Matches one or more non-whitespace characters after the @
// $ Matches the end of the text
export const email = value =>
    /^\S+@\S+$/.test(value) ? undefined : 'Must be a valid email address';

export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';

export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';