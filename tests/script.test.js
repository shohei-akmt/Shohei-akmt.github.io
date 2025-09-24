/**
 * Unit tests for script.js functionality
 */

describe('Portfolio JavaScript Functionality', () => {
  let mockIntersectionObserver;
  let observeSpy;
  let disconnectSpy;

  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = '';
    
    // Mock IntersectionObserver
    observeSpy = jest.fn();
    disconnectSpy = jest.fn();
    
    mockIntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: observeSpy,
      disconnect: disconnectSpy,
      unobserve: jest.fn(),
    }));
    
    global.IntersectionObserver = mockIntersectionObserver;
    
    // Clear any existing modules
    jest.resetModules();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Project Animation Setup', () => {
    test('should create IntersectionObserver when projects exist', () => {
      // Create mock project elements
      const project1 = document.createElement('div');
      project1.className = 'project';
      const project2 = document.createElement('div');
      project2.className = 'project';
      
      document.body.appendChild(project1);
      document.body.appendChild(project2);

      // Load the script
      require('../script.js');

      // Verify IntersectionObserver was created
      expect(mockIntersectionObserver).toHaveBeenCalledWith(expect.any(Function));
    });

    test('should observe all project elements', () => {
      // Create mock project elements
      const project1 = document.createElement('div');
      project1.className = 'project';
      const project2 = document.createElement('div');
      project2.className = 'project';
      const nonProject = document.createElement('div');
      nonProject.className = 'other';
      
      document.body.appendChild(project1);
      document.body.appendChild(project2);
      document.body.appendChild(nonProject);

      // Load the script
      require('../script.js');

      // Verify observe was called for each project
      expect(observeSpy).toHaveBeenCalledTimes(2);
      expect(observeSpy).toHaveBeenCalledWith(project1);
      expect(observeSpy).toHaveBeenCalledWith(project2);
    });

    test('should handle case when no projects exist', () => {
      // Load the script with no project elements
      require('../script.js');

      // IntersectionObserver should not be created when no projects exist
      expect(mockIntersectionObserver).not.toHaveBeenCalled();
      expect(observeSpy).not.toHaveBeenCalled();
    });
  });

  describe('IntersectionObserver Callback', () => {
    test('should add show class when element is intersecting', () => {
      const project = document.createElement('div');
      project.className = 'project';
      document.body.appendChild(project);

      // Load the script
      require('../script.js');

      // Get the callback function passed to IntersectionObserver
      const callback = mockIntersectionObserver.mock.calls[0][0];

      // Create mock entry
      const mockEntry = {
        target: project,
        isIntersecting: true
      };

      // Call the callback
      callback([mockEntry]);

      // Verify show class was added
      expect(project.classList.contains('show')).toBe(true);
    });

    test('should remove show class when element is not intersecting', () => {
      const project = document.createElement('div');
      project.className = 'project show'; // Start with show class
      document.body.appendChild(project);

      // Load the script
      require('../script.js');

      // Get the callback function passed to IntersectionObserver
      const callback = mockIntersectionObserver.mock.calls[0][0];

      // Create mock entry
      const mockEntry = {
        target: project,
        isIntersecting: false
      };

      // Call the callback
      callback([mockEntry]);

      // Verify show class was removed
      expect(project.classList.contains('show')).toBe(false);
    });

    test('should handle multiple entries in callback', () => {
      const project1 = document.createElement('div');
      project1.className = 'project';
      const project2 = document.createElement('div');
      project2.className = 'project show';
      
      document.body.appendChild(project1);
      document.body.appendChild(project2);

      // Load the script
      require('../script.js');

      // Get the callback function passed to IntersectionObserver
      const callback = mockIntersectionObserver.mock.calls[0][0];

      // Create mock entries
      const mockEntries = [
        { target: project1, isIntersecting: true },
        { target: project2, isIntersecting: false }
      ];

      // Call the callback
      callback(mockEntries);

      // Verify both projects were handled correctly
      expect(project1.classList.contains('show')).toBe(true);
      expect(project2.classList.contains('show')).toBe(false);
    });
  });

  describe('Error Handling', () => {
    test('should handle missing DOM elements gracefully', () => {
      // Mock querySelectorAll to return null
      const originalQuerySelectorAll = document.querySelectorAll;
      document.querySelectorAll = jest.fn().mockReturnValue(null);

      // This should not throw an error
      expect(() => {
        require('../script.js');
      }).not.toThrow();

      // Restore original method
      document.querySelectorAll = originalQuerySelectorAll;
    });

    test('should handle IntersectionObserver not being available', () => {
      // Remove IntersectionObserver from global scope
      const originalIntersectionObserver = global.IntersectionObserver;
      delete global.IntersectionObserver;

      // This should not throw an error
      expect(() => {
        require('../script.js');
      }).not.toThrow();

      // Restore original IntersectionObserver
      global.IntersectionObserver = originalIntersectionObserver;
    });
  });
});
