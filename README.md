# React Context Demo

This project demonstrates the usage of React Context API for managing global state across multiple levels of components.

## Features

- Theme switching (light/dark) using Context API
- User management with data provided through Context
- Multiple component levels accessing the same context

## Project Structure

- `src/context/AppContext.jsx` - Contains the context definition and provider
- `src/components/` - Contains various components using the context
- `App.jsx` - Main component wrapped with the context provider

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone <your-repo-url>
   cd my-context-app
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment

This project can be deployed to platforms like Vercel or Netlify.

### Build for production

```
npm run build
```

## Live Demo

[Demo Link](https://your-deployed-app-url.netlify.app) 