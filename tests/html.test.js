/**
 * Unit tests for HTML structure and content validation
 */

const fs = require('fs');
const path = require('path');

describe('HTML Structure and Content', () => {
  let htmlContent;

  beforeAll(() => {
    // Read the HTML file
    const htmlPath = path.join(__dirname, '../index.html');
    htmlContent = fs.readFileSync(htmlPath, 'utf8');
  });

  describe('HTML Document Structure', () => {
    test('should have proper DOCTYPE declaration', () => {
      expect(htmlContent).toMatch(/^<!DOCTYPE html>/);
    });

    test('should have html element with lang attribute', () => {
      expect(htmlContent).toMatch(/<html lang="en">/);
    });

    test('should have head section with required meta tags', () => {
      expect(htmlContent).toMatch(/<meta charset="UTF-8">/);
      expect(htmlContent).toMatch(/<meta name="viewport" content="width=device-width, initial-scale=1.0">/);
      expect(htmlContent).toMatch(/<meta name="description"/);
    });

    test('should have title tag', () => {
      expect(htmlContent).toMatch(/<title>Shohei Akimoto - Portfolio<\/title>/);
    });

    test('should link to external stylesheets', () => {
      expect(htmlContent).toMatch(/<link rel="stylesheet" href="styles\.css">/);
      expect(htmlContent).toMatch(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">/);
      expect(htmlContent).toMatch(/<link href="https:\/\/fonts\.googleapis\.com\/css2/);
    });
  });

  describe('Header Section', () => {
    test('should have header with proper structure', () => {
      expect(htmlContent).toMatch(/<header>/);
      expect(htmlContent).toMatch(/<div class="container">/);
      expect(htmlContent).toMatch(/<h1>Shohei Akimoto<\/h1>/);
      expect(htmlContent).toMatch(/<p>Full Stack Software Engineer \| Japanese Bilingual Tech Support<\/p>/);
    });

    test('should have navigation menu', () => {
      expect(htmlContent).toMatch(/<nav>/);
      expect(htmlContent).toMatch(/<ul>/);
      expect(htmlContent).toMatch(/<li><a href="#about">About<\/a><\/li>/);
      expect(htmlContent).toMatch(/<li><a href="#projects">Projects<\/a><\/li>/);
      expect(htmlContent).toMatch(/<li><a href="#future-projects">Future Projects<\/a><\/li>/);
      expect(htmlContent).toMatch(/<li><a href="#skills">Skills<\/a><\/li>/);
      expect(htmlContent).toMatch(/<li><a href="#contact">Contact<\/a><\/li>/);
    });
  });

  describe('About Section', () => {
    test('should have about section with proper structure', () => {
      expect(htmlContent).toMatch(/<section id="about">/);
      expect(htmlContent).toMatch(/<h2>About Me<\/h2>/);
      expect(htmlContent).toMatch(/<div class="about-content">/);
      expect(htmlContent).toMatch(/<div class="about-image">/);
      expect(htmlContent).toMatch(/<div class="about-text">/);
    });

    test('should have profile image with proper attributes', () => {
      expect(htmlContent).toMatch(/<img src="img\/profile_photo\.jpg" alt="Profile Picture of Shohei Akimoto" loading="lazy">/);
    });

    test('should have about text content', () => {
      expect(htmlContent).toMatch(/I am Shohei Akimoto, a Full Stack Software Engineer/);
      expect(htmlContent).toMatch(/around 5 years of professional experience/);
      expect(htmlContent).toMatch(/Python, Django, and other modern technologies/);
    });
  });

  describe('Projects Section', () => {
    test('should have projects section with proper structure', () => {
      expect(htmlContent).toMatch(/<section id="projects">/);
      expect(htmlContent).toMatch(/<h2>Past Projects<\/h2>/);
      expect(htmlContent).toMatch(/<div class="projects-grid">/);
    });

    test('should have all required projects', () => {
      // Check for project containers
      const projectMatches = htmlContent.match(/<div class="project">/g);
      expect(projectMatches).toHaveLength(4); // Should have 4 projects
    });

    test('should have seil project with proper content', () => {
      expect(htmlContent).toMatch(/<h3>seil Powered by Sherpa<\/h3>/);
      expect(htmlContent).toMatch(/<img src="img\/seil_logo\.jpeg" alt="seil Powered by Sherpa">/);
      expect(htmlContent).toMatch(/data feed management system/);
      expect(htmlContent).toMatch(/href="https:\/\/solutions\.hakuhodody-one\.co\.jp\/seil"/);
    });

    test('should have Social Media Account Promotion System project', () => {
      expect(htmlContent).toMatch(/<h3>Social Media Account Promotion System<\/h3>/);
      expect(htmlContent).toMatch(/<img src="img\/twitter_x\.png" alt="Account Promotion System">/);
      expect(htmlContent).toMatch(/automated social media promotion system/);
    });

    test('should have Sherpa project with proper content', () => {
      expect(htmlContent).toMatch(/<h3>Sherpa<\/h3>/);
      expect(htmlContent).toMatch(/<img src="img\/sherpa_logo\.jpeg" alt="Sherpa">/);
      expect(htmlContent).toMatch(/supporting tool for advertising operations/);
      expect(htmlContent).toMatch(/href="https:\/\/www\.dac\.co\.jp\/english\/service\/dataxtech\/"/);
    });

    test('should have Image Processing Function project', () => {
      expect(htmlContent).toMatch(/<h3>Image Processing Function<\/h3>/);
      expect(htmlContent).toMatch(/<img src="img\/Gemini_Generated_Image_image_processing_function\.png" alt="image processing function">/);
      expect(htmlContent).toMatch(/custom feature for a specific company's e-commerce site/);
    });

    test('should have project skills sections', () => {
      const skillsMatches = htmlContent.match(/<h4>Skills Used:<\/h4>/g);
      expect(skillsMatches).toHaveLength(4); // Should have 4 skills sections
    });

    test('should have project links with proper attributes', () => {
      expect(htmlContent).toMatch(/class="project-link"/);
      expect(htmlContent).toMatch(/target="_blank"/);
      expect(htmlContent).toMatch(/rel="noopener noreferrer"/);
    });
  });

  describe('Future Projects Section', () => {
    test('should have future projects section', () => {
      expect(htmlContent).toMatch(/<section id="future-projects">/);
      expect(htmlContent).toMatch(/<h2>Future Projects<\/h2>/);
    });

    test('should have MyBestBuys Timeline project', () => {
      expect(htmlContent).toMatch(/<h3>\(Temp\) MyBestBuys Timeline for Bluesky<\/h3>/);
      expect(htmlContent).toMatch(/<img src="img\/Gemini_Generated_shopping\.jpeg" alt="bluesky">/);
      expect(htmlContent).toMatch(/simple web application that allows users to record items/);
    });
  });

  describe('Skills Section', () => {
    test('should have skills section with proper structure', () => {
      expect(htmlContent).toMatch(/<section id="skills">/);
      expect(htmlContent).toMatch(/<h2>Skills<\/h2>/);
      expect(htmlContent).toMatch(/<div class="skills-content">/);
    });

    test('should have technical skills section', () => {
      expect(htmlContent).toMatch(/<h3>Technical Skills<\/h3>/);
      expect(htmlContent).toMatch(/<h4>Languages<\/h4>/);
      expect(htmlContent).toMatch(/<h4>Frameworks & Libraries<\/h4>/);
      expect(htmlContent).toMatch(/<h4>Databases<\/h4>/);
      expect(htmlContent).toMatch(/<h4>Cloud & Infrastructure<\/h4>/);
      expect(htmlContent).toMatch(/<h4>Tools & Methodologies<\/h4>/);
    });

    test('should have soft skills section', () => {
      expect(htmlContent).toMatch(/<h3>Soft Skills<\/h3>/);
    });
  });

  describe('Contact Section', () => {
    test('should have contact section', () => {
      expect(htmlContent).toMatch(/<section id="contact">/);
      expect(htmlContent).toMatch(/<h2>Contact Me<\/h2>/);
    });

    test('should have contact information', () => {
      expect(htmlContent).toMatch(/<p>Feel free to reach out!<\/p>/);
      expect(htmlContent).toMatch(/<a href="mailto:shohei\.akimoto@outlook\.com\?subject=Hello&body=This%20is%20from%20github%20pages\.">/);
      expect(htmlContent).toMatch(/<a href="https:\/\/www\.linkedin\.com\/in\/shohei-akimoto\/"/);
      expect(htmlContent).toMatch(/<a href="https:\/\/github\.com\/shohei-akmt"/);
    });
  });

  describe('Footer Section', () => {
    test('should have footer with proper structure', () => {
      expect(htmlContent).toMatch(/<footer>/);
      expect(htmlContent).toMatch(/<p>&copy; 2025 Shohei Akimoto\. All rights reserved\.<\/p>/);
    });
  });

  describe('Script References', () => {
    test('should reference script.js', () => {
      expect(htmlContent).toMatch(/<script src="script\.js"><\/script>/);
    });
  });

  describe('Accessibility', () => {
    test('should have alt attributes for all images', () => {
      const imgTags = htmlContent.match(/<img[^>]*>/g);
      imgTags.forEach(imgTag => {
        expect(imgTag).toMatch(/alt="[^"]*"/);
      });
    });

    test('should have proper heading hierarchy', () => {
      expect(htmlContent).toMatch(/<h1>/);
      expect(htmlContent).toMatch(/<h2>/);
      expect(htmlContent).toMatch(/<h3>/);
      expect(htmlContent).toMatch(/<h4>/);
    });

    test('should have proper link structure', () => {
      const linkTags = htmlContent.match(/<a[^>]*>/g);
      linkTags.forEach(linkTag => {
        expect(linkTag).toMatch(/href="[^"]*"/);
      });
    });
  });

  describe('SEO and Meta Tags', () => {
    test('should have proper meta description', () => {
      expect(htmlContent).toMatch(/<meta name="description" content="Shohei Akimoto's portfolio/);
    });

    test('should have proper title format', () => {
      expect(htmlContent).toMatch(/<title>Shohei Akimoto - Portfolio<\/title>/);
    });
  });
});
