# CustomPagination

A React application that displays a paginated list of products fetched from [dummyjson.com](https://dummyjson.com/products). Users can navigate through pages using custom pagination controls.

## Features

- Fetches up to 200 products from a public API
- Displays products in a responsive grid
- Custom pagination component with previous, next, and direct page selection
- Lazy loading for product images
- Styled using CSS and SCSS modules

## Project Structure

```
.
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   ├── lib/
│   │   └── Constants.js
│   ├── Pagination/
│   │   └── Pagination.jsx
│   └── ProductCard/
│       ├── ProductCard.jsx
│       └── ProductCard.scss
├── package.json
├── .eslintrc.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/CustomPagination.git
   cd CustomPagination
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

```sh
npm run build
```

## Usage

- Browse products in a paginated view.
- Use the pagination controls to navigate between pages.

## Code Overview

- [`src/App.js`](src/App.js): Main component, handles fetching products and pagination logic.
- [`src/Pagination/Pagination.jsx`](src/Pagination/Pagination.jsx): Pagination controls.
- [`src/ProductCard/ProductCard.jsx`](src/ProductCard/ProductCard.jsx): Displays individual product cards.
- [`src/lib/Constants.js`](src/lib/Constants.js): Contains constants like `PAGE_SIZE`.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [dummyjson.com](https://dummyjson.com/) for providing the product data.
- [React](https://reactjs.org/) for the JavaScript library for building user interfaces.
- [CodeSandbox](https://codesandbox.io/) for the online code editor where this project was developed.
