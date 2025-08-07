# Contributing to JQX

Thank you for your interest in contributing to JQX! This guide will help you get started.

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/jqx.git
   cd jqx
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/components/` - React-like components
- `src/utils/` - Utility functions
- `src/createElement.js` - Core JSX transformation logic
- `examples/` - Example applications
- `docs/` - Documentation

## Code Style

We use ESLint and Prettier for code formatting. Before submitting a PR:

```bash
npm run lint
npm run format
```

## Testing

Run the test suite:

```bash
npm test
```

## Submitting Changes

1. Create a new branch for your feature/fix
2. Make your changes
3. Add tests if applicable
4. Ensure all tests pass
5. Submit a pull request

## Reporting Issues

Please use GitHub issues to report bugs or request features. Include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, etc.)

## Code of Conduct

Be respectful and inclusive. We want everyone to feel welcome to contribute.
