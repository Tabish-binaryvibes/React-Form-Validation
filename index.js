// validationLibrary.js
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    const errorMessage = isValid ? '' : 'Invalid email address';
    return { isValid, errorMessage };
};

const validateTextInput = (text, options = {}) => {
    const {
        minLength = 0,
        maxLength = Infinity,
        required = false,
        customMessage = '',
    } = options;

    const trimmedText = text.trim();
    const isNotEmpty = trimmedText.length > 0;
    const isWithinMinLength = trimmedText.length >= minLength;
    const isWithinMaxLength = trimmedText.length <= maxLength;

    let isValid = true;
    let errorMessage = '';

    if (required && !isNotEmpty) {
        isValid = false;
        errorMessage = customMessage || 'Field is required.';
    } else if (!isWithinMinLength) {
        isValid = false;
        errorMessage = customMessage || `Minimum ${minLength} characters required.`;
    } else if (!isWithinMaxLength) {
        isValid = false;
        errorMessage = customMessage || `Maximum ${maxLength} characters allowed.`;
    }

    return { isValid, errorMessage };
};

const validateNumberInput = (value, options = {}) => {
    const {
        min = Number.NEGATIVE_INFINITY,
        max = Number.POSITIVE_INFINITY,
        required = false,
        customMessage = '',
    } = options;

    const isValid = (value !== '' && !isNaN(value) && value >= min && value <= max);
    const errorMessage = isValid ? '' : customMessage || 'Please enter a valid number.';

    return { isValid, errorMessage };
};

const validateCheckbox = (isChecked, options = {}) => {
    const { required = false, customMessage = '' } = options;

    const isValid = !required || isChecked;
    const errorMessage = isValid ? '' : customMessage || 'Please check the checkbox.';

    return { isValid, errorMessage };
};

const validateAll = (validations) => {
    const results = validations.map(validation => validation());
    const isValid = results.every(result => result.isValid);
    const errorMessages = results.map(result => result.errorMessage).filter(message => message !== '');

    return {
        isValid,
        errorMessages,
    };
};

const validateRadioGroup = (selectedValue, options = {}) => {
    const { required = false, customMessage = '' } = options;

    const isValid = !required || selectedValue !== '';
    const errorMessage = isValid ? '' : customMessage || 'Please select a value from the radio group.';

    return { isValid, errorMessage };
};

const validatePassword = (password, options = {}) => {
    const {
        minLength = 0,
        maxLength = Infinity,
        requireUppercase = false,
        requireLowercase = false,
        requireNumber = false,
        requireSpecialChar = false,
        customMessage = '',
    } = options;

    const isWithinMinLength = password.length >= minLength;
    const isWithinMaxLength = password.length <= maxLength;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let isValid = true;
    let errorMessage = '';

    if (!isWithinMinLength) {
        isValid = false;
        errorMessage = customMessage || `Minimum ${minLength} characters required.`;
    } else if (!isWithinMaxLength) {
        isValid = false;
        errorMessage = customMessage || `Maximum ${maxLength} characters allowed.`;
    } else if (requireUppercase && !hasUppercase) {
        isValid = false;
        errorMessage = customMessage || 'Password must contain at least one uppercase letter.';
    } else if (requireLowercase && !hasLowercase) {
        isValid = false;
        errorMessage = customMessage || 'Password must contain at least one lowercase letter.';
    } else if (requireNumber && !hasNumber) {
        isValid = false;
        errorMessage = customMessage || 'Password must contain at least one number.';
    } else if (requireSpecialChar && !hasSpecialChar) {
        isValid = false;
        errorMessage = customMessage || 'Password must contain at least one special character.';
    }

    return { isValid, errorMessage };
};

export {
    validateEmail,
    validateTextInput,
    validateNumberInput,
    validateCheckbox,
    validateRadioGroup,
    validatePassword,
    validateAll
};
