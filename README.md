```markdown
# Validation Library

A lightweight JavaScript library for client-side form input validation. This library provides various validation functions for common input types like email, text, number, checkbox, radio group, and password. It also includes a utility function to validate multiple inputs at once.

## Installation

You can install the validation library using npm or yarn:

```bash
npm install react-form-validation
# or
yarn add react-form-validation
```

## Usage

Import the necessary validation functions in your JavaScript/TypeScript file:

```javascript
import {
  validateEmail,
  validateTextInput,
  validateNumberInput,
  validateCheckbox,
  validateRadioGroup,
  validatePassword,
  validateAll,
} from 'react-form-validation';
```

Now, you can use these functions in your React or JavaScript application to perform input validations.

## Validation Functions

### `validateEmail(email: string): ValidationResult`

Validate an email address.

### `validateTextInput(text: string, options?: TextInputOptions): ValidationResult`

Validate a text input based on provided options.

### `validateNumberInput(value: string, options?: NumberInputOptions): ValidationResult`

Validate a number input based on provided options.

### `validateCheckbox(isChecked: boolean, options?: CheckboxOptions): ValidationResult`

Validate a checkbox input based on provided options.

### `validateRadioGroup(selectedValue: string, options?: RadioGroupOptions): ValidationResult`

Validate a radio group input based on provided options.

### `validatePassword(password: string, options?: PasswordOptions): ValidationResult`

Validate a password input based on provided options.

## Utility Function

### `validateAll(validations: (() => ValidationResult)[]): ValidationResult`

Validate multiple inputs at once by passing an array of validation functions.

## Examples

```javascript
// Examples here...

// YourReactComponent.js

// ... (import statements)

import { validateAll, validateEmail, validateTextInput, validateNumberInput } from 'react-form-validation';

function YourReactComponent() {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationResults = validateAll([
      () => validateEmail(email),
      () => validateTextInput(text, { minLength: 3, maxLength: 10, required: true }),
      () => validateNumberInput(number, { min: 0, max: 100, required: true }),
      // Add more validation functions as needed
    ]);

    if (validationResults.isValid) {
      console.log('Form submitted successfully!');
      // Additional form submission logic...
    } else {
      console.log('Form submission failed. Please fix errors.');
      console.log('Error messages:', validationResults.errorMessages);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email */}
      <label>Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      {/* Text Input */}
      <label>Text:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>

      {/* Number Input */}
      <label>Number:
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default YourReactComponent;
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```