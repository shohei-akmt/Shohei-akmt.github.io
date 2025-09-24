# Portfolio Testing Suite

This directory contains comprehensive unit tests for the Shohei Akimoto portfolio website.

## Test Structure

### Test Files

- **`script.test.js`** - Unit tests for JavaScript functionality
  - IntersectionObserver implementation
  - Project animation logic
  - Error handling

- **`html.test.js`** - HTML structure and content validation tests
  - Document structure validation
  - Content presence and correctness
  - Accessibility compliance
  - SEO optimization

- **`css.test.js`** - CSS styles and responsive design tests
  - Style rule validation
  - Responsive design implementation
  - Color scheme consistency
  - Typography and spacing

- **`integration.test.js`** - Integration tests
  - File integration validation
  - Content consistency across files
  - Performance and best practices
  - Cross-browser compatibility

### Setup Files

- **`setup.js`** - Jest configuration and global mocks
  - IntersectionObserver mock
  - Window.matchMedia mock
  - Console method mocks

## Running Tests

### Prerequisites

Install dependencies:
```bash
npm install
```

### Test Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests for CI/CD
npm run test:ci
```

## Test Coverage

The test suite covers:

- **JavaScript Functionality** (100% coverage)
  - IntersectionObserver setup and callback handling
  - DOM manipulation
  - Error handling scenarios

- **HTML Structure** (Comprehensive validation)
  - Document structure and meta tags
  - Content presence and accuracy
  - Accessibility features
  - SEO optimization

- **CSS Styles** (Style validation)
  - All CSS rules and selectors
  - Responsive design implementation
  - Color scheme consistency
  - Typography and spacing

- **Integration** (Cross-file validation)
  - File references and dependencies
  - Content consistency
  - Performance optimizations
  - Best practices compliance

## Test Categories

### Unit Tests
- Individual function testing
- Component isolation
- Mock dependencies

### Integration Tests
- Cross-file validation
- End-to-end functionality
- Performance checks

### Accessibility Tests
- ARIA compliance
- Keyboard navigation
- Screen reader compatibility

### SEO Tests
- Meta tag validation
- Heading hierarchy
- Content structure

## Adding New Tests

When adding new features to the portfolio:

1. **Update existing tests** if functionality changes
2. **Add new test cases** for new features
3. **Maintain test coverage** above 90%
4. **Follow naming conventions** for test files and functions

### Test Naming Convention

```javascript
describe('Feature Name', () => {
  describe('Specific Functionality', () => {
    test('should do something specific', () => {
      // test implementation
    });
  });
});
```

## Continuous Integration

The test suite is designed to run in CI/CD environments:

- **GitHub Actions** compatible
- **Coverage reporting** included
- **Performance benchmarks** available
- **Cross-browser testing** ready

## Troubleshooting

### Common Issues

1. **Tests failing due to missing images**
   - Ensure all referenced images exist in the `img/` directory
   - Check image file names match HTML references

2. **CSS tests failing**
   - Verify CSS syntax is correct
   - Check for missing semicolons or brackets

3. **JavaScript tests failing**
   - Ensure DOM elements exist in HTML
   - Check for proper class names and IDs

### Debug Mode

Run tests with verbose output:
```bash
npm test -- --verbose
```

## Contributing

When contributing to the test suite:

1. Follow existing test patterns
2. Add appropriate test coverage
3. Update documentation
4. Ensure all tests pass before submitting
