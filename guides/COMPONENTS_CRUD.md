# CRUD Package Reference

**Check JSDoc in your IDE** - Hover over any component import to see props, types, and examples.

**Import from:** `@donotdev/crud` (CRUD operations and forms)

---

## Core Hook

- **useCrud** - React hook for CRUD operations (create, read, update, delete, query) with automatic validation and backend abstraction.

---

## Service

- **getCrudService** - Get CrudService singleton instance for direct service access.

---

## Form Components

- **EntityFormRenderer** - Renders complete entity forms with automatic field mapping.
- **FormFieldRenderer** - Renders individual form fields based on schema.
- **FormLayout** - Form layout component with spacing and structure.
- **CrudButton** - Button component integrated with CRUD operations.

---

## Form Field Components

- **TextFieldComponent** - Text input field component.
- **NumberFieldComponent** - Number input field component.
- **TextAreaComponent** - Textarea input field component.
- **PasswordFieldComponent** - Password input field component.
- **DateFieldComponent** - Date picker field component.
- **CheckboxFieldComponent** - Checkbox field component.
- **RadioFieldComponent** - Radio button field component.
- **DropdownComponent** - Single-select dropdown field component.
- **MultiDropdownComponent** - Multi-select dropdown field component.
- **FileFieldComponent** - File upload field component.
- **ImageFieldComponent** - Image upload field component.
- **AvatarFieldComponent** - Avatar upload field component.
- **BadgeFieldComponent** - Badge display/input field component.
- **PhoneNumberComponent** - Phone number input field component.
- **GeoPointFieldComponent** - Geographic point input field component.
- **MapFieldComponent** - Map picker field component.
- **TimestampFieldComponent** - Timestamp input field component.
- **ReferenceFieldComponent** - Reference/link field component.
- **MultiInputTextFieldComponent** - Multiple text inputs field component.
- **ButtonFieldComponent** - Button field component.
- **HiddenFieldComponent** - Hidden field component.

---

## Controlled Fields

- **ControlledFields** - Controlled form field components with validation.

---

## Utilities

- **loadDeterministicRange** - Load deterministic range from collections.
- **upsertDeterministic** - Upsert with deterministic ID.
- **appendToCollection** - Append item to collection.

---

**All props documented in JSDoc** - Hover in IDE for complete reference.
