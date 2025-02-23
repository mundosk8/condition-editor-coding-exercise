# Condition editor

## Table of Contents

- [Getting Started](#getting-started)
- [Software Design](#software-design)
  - [General Architecture and Way of Thinking](#general-architecture-and-way-of-thinking)
  - [State Management Approach](#state-management-approach)
  - [Input Dependencies Handling](#input-dependencies-handling)
- [Testing Strategy](#testing-strategy)
- [Time Taken](#time-taken)
- [Features](#features)

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

First, install the dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the battery of unit tests:

```bash
npm run test
```

To run the battery of e2e tests:

```bash
npm run test:e2e
```

## Software design

### General Architecture and Way of Thinking

I began by analyzing the provided mocked responses and wireframes. My initial step was to decompose the UI into smaller, manageable components and assign clear responsibilities to each. This led to the creation of a `Filters` component and a `Products` component.

For the `Filters`, given that the options are dynamically populated, I developed three distinct components: one for managing `Properties`, another for handling `Operators`, and a third for managing `Values` based on the previously selected filters. Initially, I divided the third component into three sub-components to handle different input types: a text input for string types, a number input for numeric types, and a select input for enumerable types. However, due to the requirement to filter using the `"Is any of"` operator, where property values are separated by commas, a number input was not feasible. Therefore, I decided against creating a separate component for numeric inputs.

With these components established, I implemented the logic to apply the appropriate operator to the selected property. Finally, I ensured conditional filtering of the operators based on the provided table, making sure that only valid operators are available for each property type.

### State Management Approach

The application uses React's useState, useReducer and useEffect hooks for filter state management rather than URL parameters. This decision was made because:

- State management scales better with complex filter combinations
- Avoids URL length limitations with multiple filters
- Provides better separation between UI state and navigation state
- Enables immediate validation feedback without page reloads

### Input Dependencies Handling

The component implements strict dependency rules:

1. Operator select is disabled until property is selected
2. Operator state resets automatically when property changes
3. Property Value resets automatically when operator changes
4. Value input validation depends on both property type and selected operator

### Testing strategy

Unit tests for each operator logic.
e2e test to see if the operator logic is being applied correctly to the list of products.

### Time taken

To develop every thing, since setup of the project, code development, unit and e2e tests it took me around 8 hours to finish this project.

### Features

Dynamic filter options
Conditional filtering based on property type
Immediate validation feedback
Unit and e2e tests
