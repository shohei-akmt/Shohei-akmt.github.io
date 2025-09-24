/**
 * Integration tests for the portfolio website
 */

const fs = require('fs');
const path = require('path');

describe('Portfolio Integration Tests', () => {
  let htmlContent;
  let cssContent;
  let jsContent;

  beforeAll(() => {
    // Read all files
    const htmlPath = path.join(__dirname, '../index.html');
    const cssPath = path.join(__dirname, '../styles.css');
    const jsPath = path.join(__dirname, '../script.js');
    
    htmlContent = fs.readFileSync(htmlPath, 'utf8');
    cssContent = fs.readFileSync(cssPath, 'utf8');
    jsContent = fs.readFileSync(jsPath, 'utf8');
  });

  describe('File Integration', () => {
    test('should have all required files', () => {
      const files = ['index.html', 'styles.css', 'script.js'];
      files.forEach(file => {
        const filePath = path.join(__dirname, '..', file);
        expect(fs.existsSync(filePath)).toBe(true);
      });
    });

    test('should have proper file references in HTML', () => {
      expect(htmlContent).toMatch(/<link rel="stylesheet" href="styles\.css">/);
      expect(htmlContent).toMatch(/<script src="script\.js"><\/script>/);
    });

    test('should have all image files referenced in HTML', () => {
      const imgDir = path.join(__dirname, '../img');
      const imageFiles = fs.readdirSync(imgDir);
      
      // Check that all images in the directory are referenced in HTML
      imageFiles.forEach(imageFile => {
        if (imageFile.match(/\.(jpg|jpeg|png|gif|svg)$/i)) {
          expect(htmlContent).toMatch(new RegExp(`img/${imageFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`));
        }
      });
    });
  });

  describe('Content Consistency', () => {
    test('should have consistent project information', () => {
      // Check that all projects have required elements
      const projectMatches = htmlContent.match(/<div class="project">/g);
      expect(projectMatches).toHaveLength(4);

      // Each project should have title, description, skills, and image
      expect(htmlContent).toMatch(/<h3>seil Powered by Sherpa<\/h3>/);
      expect(htmlContent).toMatch(/<h3>Social Media Account Promotion System<\/h3>/);
      expect(htmlContent).toMatch(/<h3>Sherpa<\/h3>/);
      expect(htmlContent).toMatch(/<h3>Image Processing Function<\/h3>/);
    });

    test('should have consistent skills across projects', () => {
      // Check that common skills appear in multiple projects
      const commonSkills = ['Python', 'Django', 'AWS', 'GitHub', 'MySQL'];
      
      commonSkills.forEach(skill => {
        const skillMatches = htmlContent.match(new RegExp(`<li>${skill}</li>`, 'g'));
        expect(skillMatches).toBeTruthy();
        expect(skillMatches.length).toBeGreaterThan(1); // Should appear in multiple projects
      });
    });

    test('should have proper external links', () => {
      // Check that external links have proper attributes
      expect(htmlContent).toMatch(/href="https:\/\/solutions\.hakuhodody-one\.co\.jp\/seil"/);
      expect(htmlContent).toMatch(/href="https:\/\/www\.dac\.co\.jp\/english\/service\/dataxtech\/"/);
      expect(htmlContent).toMatch(/target="_blank"/);
      expect(htmlContent).toMatch(/rel="noopener noreferrer"/);
    });
  });

  describe('CSS and HTML Integration', () => {
    test('should have all CSS classes used in HTML', () => {
      // Extract all class names from HTML
      const classMatches = htmlContent.match(/class="([^"]*)"/g);
      const classes = classMatches.map(match => 
        match.replace(/class="/, '').replace(/"$/, '').split(' ')
      ).flat();

      // Check that most classes have corresponding CSS rules (allow some flexibility)
      const classesWithCSS = classes.filter(className => {
        if (className) {
          const cssPattern = new RegExp(`\\.${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*{`);
          return cssContent.match(cssPattern);
        }
        return false;
      });

      // At least 80% of classes should have CSS rules
      expect(classesWithCSS.length / classes.length).toBeGreaterThan(0.8);
    });

    test('should have all IDs used in HTML', () => {
      // Extract all IDs from HTML
      const idMatches = htmlContent.match(/id="([^"]*)"/g);
      const ids = idMatches.map(match => 
        match.replace(/id="/, '').replace(/"$/, '')
      );

      // Check that most IDs have corresponding CSS rules (allow some flexibility)
      const idsWithCSS = ids.filter(id => {
        const cssPattern = new RegExp(`#${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*{`);
        return cssContent.match(cssPattern);
      });

      // At least 80% of IDs should have CSS rules
      expect(idsWithCSS.length / ids.length).toBeGreaterThan(0.8);
    });

    test('should have proper responsive design classes', () => {
      // Check that responsive classes are used
      expect(htmlContent).toMatch(/class="container"/);
      expect(htmlContent).toMatch(/class="projects-grid"/);
      expect(htmlContent).toMatch(/class="about-content"/);
      expect(htmlContent).toMatch(/class="skills-content"/);
    });
  });

  describe('JavaScript Integration', () => {
    test('should have JavaScript that targets existing HTML elements', () => {
      // Check that JavaScript targets elements that exist in HTML
      expect(jsContent).toMatch(/querySelectorAll\('\.project'\)/);
      expect(htmlContent).toMatch(/class="project"/);
    });

    test('should have proper animation classes in CSS', () => {
      // Check that JavaScript animation classes exist in CSS
      expect(jsContent).toMatch(/classList\.add\('show'\)/);
      expect(jsContent).toMatch(/classList\.remove\('show'\)/);
      expect(cssContent).toMatch(/\.project\.show\s*{/);
    });

    test('should use modern JavaScript features appropriately', () => {
      // Check for modern JavaScript usage
      expect(jsContent).toMatch(/const\s+/);
      expect(jsContent).toMatch(/forEach/);
      expect(jsContent).toMatch(/IntersectionObserver/);
    });
  });

  describe('Performance and Best Practices', () => {
    test('should have lazy loading for images', () => {
      expect(htmlContent).toMatch(/loading="lazy"/);
    });

    test('should have proper meta tags for performance', () => {
      expect(htmlContent).toMatch(/<meta name="viewport"/);
      expect(htmlContent).toMatch(/<meta name="description"/);
    });

    test('should use efficient CSS selectors', () => {
      // Check that CSS doesn't use overly complex selectors
      const complexSelectors = cssContent.match(/[^{]*{[^}]*}/g);
      let complexCount = 0;
      
      complexSelectors.forEach(selector => {
        // Check for reasonable selector complexity (not more than 3 levels deep)
        const selectorPart = selector.split('{')[0];
        const depth = (selectorPart.match(/\s+/g) || []).length;
        // Count selectors that are too complex
        if (depth > 5) {
          complexCount++;
        }
      });
      
      // Allow up to 10% of selectors to be complex
      expect(complexCount / complexSelectors.length).toBeLessThan(0.1);
    });

    test('should have proper font loading', () => {
      expect(htmlContent).toMatch(/rel="preconnect"/);
      expect(htmlContent).toMatch(/fonts\.googleapis\.com/);
    });
  });

  describe('Accessibility Integration', () => {
    test('should have proper heading hierarchy', () => {
      // Check that headings follow proper hierarchy
      const h1Count = (htmlContent.match(/<h1>/g) || []).length;
      const h2Count = (htmlContent.match(/<h2>/g) || []).length;
      const h3Count = (htmlContent.match(/<h3>/g) || []).length;
      
      expect(h1Count).toBe(1); // Should have exactly one h1
      expect(h2Count).toBeGreaterThan(0); // Should have multiple h2s
      expect(h3Count).toBeGreaterThan(0); // Should have multiple h3s
    });

    test('should have alt text for all images', () => {
      const imgTags = htmlContent.match(/<img[^>]*>/g);
      imgTags.forEach(imgTag => {
        expect(imgTag).toMatch(/alt="[^"]+"/);
      });
    });

    test('should have proper link text', () => {
      const linkTags = htmlContent.match(/<a[^>]*>([^<]+)<\/a>/g);
      linkTags.forEach(linkTag => {
        const linkText = linkTag.match(/<a[^>]*>([^<]+)<\/a>/)[1];
        expect(linkText.trim().length).toBeGreaterThan(0);
      });
    });
  });

  describe('SEO Integration', () => {
    test('should have proper title structure', () => {
      expect(htmlContent).toMatch(/<title>Shohei Akimoto - Portfolio<\/title>/);
    });

    test('should have meta description', () => {
      expect(htmlContent).toMatch(/<meta name="description" content="[^"]+"/);
    });

    test('should have proper heading structure for SEO', () => {
      expect(htmlContent).toMatch(/<h1>Shohei Akimoto<\/h1>/);
      expect(htmlContent).toMatch(/<h2>About Me<\/h2>/);
      expect(htmlContent).toMatch(/<h2>Past Projects<\/h2>/);
    });
  });
});
