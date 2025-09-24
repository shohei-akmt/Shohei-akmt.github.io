/**
 * Unit tests for CSS styles and responsive design
 */

const fs = require('fs');
const path = require('path');

describe('CSS Styles and Responsive Design', () => {
  let cssContent;

  beforeAll(() => {
    // Read the CSS file
    const cssPath = path.join(__dirname, '../styles.css');
    cssContent = fs.readFileSync(cssPath, 'utf8');
  });

  describe('General Styles', () => {
    test('should have body styles defined', () => {
      expect(cssContent).toMatch(/body\s*{/);
      expect(cssContent).toMatch(/font-family:\s*'Lora',\s*serif/);
      expect(cssContent).toMatch(/margin:\s*0/);
      expect(cssContent).toMatch(/padding:\s*0/);
      expect(cssContent).toMatch(/background-color:\s*#e9e4d8ff/);
      expect(cssContent).toMatch(/color:\s*#3a3a3aff/);
      expect(cssContent).toMatch(/line-height:\s*1\.6/);
    });

    test('should have container styles', () => {
      expect(cssContent).toMatch(/\.container\s*{/);
      expect(cssContent).toMatch(/max-width:\s*1100px/);
      expect(cssContent).toMatch(/margin:\s*0\s+auto/);
      expect(cssContent).toMatch(/padding:\s*0\s+20px/);
    });

    test('should have heading styles', () => {
      expect(cssContent).toMatch(/h1,\s*h2,\s*h3,\s*h4\s*{/);
      expect(cssContent).toMatch(/margin-bottom:\s*15px/);
      expect(cssContent).toMatch(/font-weight:\s*600/);
      expect(cssContent).toMatch(/color:\s*#3a3a3aff/);
    });

    test('should have specific h1 styles', () => {
      expect(cssContent).toMatch(/h1\s*{/);
      expect(cssContent).toMatch(/font-family:\s*'Playfair Display',\s*serif/);
      expect(cssContent).toMatch(/font-size:\s*3rem/);
    });

    test('should have link styles', () => {
      expect(cssContent).toMatch(/a\s*{/);
      expect(cssContent).toMatch(/text-decoration:\s*none/);
      expect(cssContent).toMatch(/color:\s*#b37070ff/);
      expect(cssContent).toMatch(/transition:\s*color\s+0\.3s\s+ease/);
    });

    test('should have link hover styles', () => {
      expect(cssContent).toMatch(/a:hover\s*{/);
      expect(cssContent).toMatch(/color:\s*#fff/);
    });
  });

  describe('Header Styles', () => {
    test('should have header styles', () => {
      expect(cssContent).toMatch(/header\s*{/);
      expect(cssContent).toMatch(/background:\s*#cfaba5ff/);
      expect(cssContent).toMatch(/color:\s*#3d444a/);
      expect(cssContent).toMatch(/padding:\s*1rem\s+0/);
      expect(cssContent).toMatch(/text-align:\s*center/);
      expect(cssContent).toMatch(/box-shadow:\s*0\s+2px\s+5px\s+rgba\(0,\s*0,\s*0,\s*0\.05\)/);
    });

    test('should have header h1 styles', () => {
      expect(cssContent).toMatch(/header\s+h1\s*{/);
      expect(cssContent).toMatch(/margin-bottom:\s*0/);
    });

    test('should have navigation styles', () => {
      expect(cssContent).toMatch(/header\s+nav\s+ul\s*{/);
      expect(cssContent).toMatch(/list-style:\s*none/);
      expect(cssContent).toMatch(/padding:\s*0/);
    });

    test('should have navigation link styles', () => {
      expect(cssContent).toMatch(/header\s+nav\s+ul\s+li\s+a\s*{/);
      expect(cssContent).toMatch(/color:\s*#3d444a/);
    });
  });

  describe('About Section Styles', () => {
    test('should have about section styles', () => {
      expect(cssContent).toMatch(/#about\s*{/);
      expect(cssContent).toMatch(/padding:\s*60px\s+0/);
      expect(cssContent).toMatch(/background-color:\s*#fff/);
      expect(cssContent).toMatch(/box-shadow:\s*0\s+2px\s+5px\s+rgba\(0,\s*0,\s*0,\s*0\.05\)/);
    });

    test('should have about-content flexbox styles', () => {
      expect(cssContent).toMatch(/\.about-content\s*{/);
      expect(cssContent).toMatch(/display:\s*flex/);
      expect(cssContent).toMatch(/flex-wrap:\s*wrap/);
      expect(cssContent).toMatch(/justify-content:\s*space-between/);
      expect(cssContent).toMatch(/gap:\s*20px/);
    });

    test('should have about-image styles', () => {
      expect(cssContent).toMatch(/\.about-image\s*{/);
      expect(cssContent).toMatch(/flex:\s*1/);
      expect(cssContent).toMatch(/min-width:\s*300px/);
      expect(cssContent).toMatch(/max-width:\s*530px/);
    });

    test('should have about-image img styles', () => {
      expect(cssContent).toMatch(/\.about-image\s+img\s*{/);
      expect(cssContent).toMatch(/width:\s*100%/);
      expect(cssContent).toMatch(/height:\s*auto/);
      expect(cssContent).toMatch(/border-radius:\s*10px/);
      expect(cssContent).toMatch(/box-shadow:\s*0\s+4px\s+8px\s+rgba\(0,\s*0,\s*0,\s*0\.1\)/);
    });

    test('should have about-text styles', () => {
      expect(cssContent).toMatch(/\.about-text\s*{/);
      expect(cssContent).toMatch(/margin-top:\s*-20px/);
      expect(cssContent).toMatch(/flex:\s*2/);
      expect(cssContent).toMatch(/min-width:\s*300px/);
      expect(cssContent).toMatch(/font-size:\s*1\.1rem/);
    });
  });

  describe('Projects Section Styles', () => {
    test('should have projects section styles', () => {
      expect(cssContent).toMatch(/#projects,\s*#future-projects\s*{/);
      expect(cssContent).toMatch(/padding:\s*60px\s+0/);
    });

    test('should have projects-grid styles', () => {
      expect(cssContent).toMatch(/\.projects-grid\s*{/);
      expect(cssContent).toMatch(/display:\s*grid/);
      expect(cssContent).toMatch(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(300px,\s*1fr\)\)/);
      expect(cssContent).toMatch(/gap:\s*30px/);
    });

    test('should have project card styles', () => {
      expect(cssContent).toMatch(/\.project\s*{/);
      expect(cssContent).toMatch(/background:\s*#fff/);
      expect(cssContent).toMatch(/padding:\s*25px/);
      expect(cssContent).toMatch(/border-radius:\s*10px/);
      expect(cssContent).toMatch(/box-shadow:\s*0\s+4px\s+8px\s+rgba\(0,\s*0,\s*0,\s*0\.1\)/);
      expect(cssContent).toMatch(/transition:\s*transform\s+0\.3s\s+ease,\s*box-shadow\s+0\.3s\s+ease/);
    });

    test('should have project hover effects', () => {
      expect(cssContent).toMatch(/\.project:hover\s*{/);
      expect(cssContent).toMatch(/transform:\s*translateY\(-5px\)/);
      expect(cssContent).toMatch(/box-shadow:\s*0\s+6px\s+12px\s+rgba\(0,\s*0,\s*0,\s*0\.15\)/);
    });

    test('should have project image styles', () => {
      expect(cssContent).toMatch(/\.project\s+img\s*{/);
      expect(cssContent).toMatch(/width:\s*100%/);
      expect(cssContent).toMatch(/min-width:\s*150px/);
      expect(cssContent).toMatch(/max-width:\s*265px/);
      expect(cssContent).toMatch(/height:\s*auto/);
      expect(cssContent).toMatch(/margin-bottom:\s*15px/);
      expect(cssContent).toMatch(/border-radius:\s*10px/);
    });

    test('should have project link styles', () => {
      expect(cssContent).toMatch(/\.project-link\s*{/);
      expect(cssContent).toMatch(/display:\s*block/);
      expect(cssContent).toMatch(/margin-top:\s*15px/);
      expect(cssContent).toMatch(/background-color:\s*#b37070ff/);
      expect(cssContent).toMatch(/color:\s*#fff/);
      expect(cssContent).toMatch(/padding:\s*12px/);
      expect(cssContent).toMatch(/text-align:\s*center/);
      expect(cssContent).toMatch(/border-radius:\s*8px/);
      expect(cssContent).toMatch(/transition:\s*background-color\s+0\.3s\s+ease/);
    });

    test('should have project skills styles', () => {
      expect(cssContent).toMatch(/\.project-skills\s*{/);
      expect(cssContent).toMatch(/list-style:\s*none/);
      expect(cssContent).toMatch(/padding:\s*0/);
      expect(cssContent).toMatch(/margin-bottom:\s*15px/);
      expect(cssContent).toMatch(/display:\s*flex/);
      expect(cssContent).toMatch(/flex-wrap:\s*wrap/);
      expect(cssContent).toMatch(/gap:\s*10px/);
    });

    test('should have project skills list item styles', () => {
      expect(cssContent).toMatch(/\.project-skills\s+li\s*{/);
      expect(cssContent).toMatch(/background-color:\s*#cfaba5ff/);
      expect(cssContent).toMatch(/padding:\s*5px\s+10px/);
      expect(cssContent).toMatch(/border-radius:\s*5px/);
      expect(cssContent).toMatch(/font-size:\s*0\.9rem/);
    });
  });

  describe('Skills Section Styles', () => {
    test('should have skills section styles', () => {
      expect(cssContent).toMatch(/#skills\s*{/);
      expect(cssContent).toMatch(/padding:\s*60px\s+0/);
      expect(cssContent).toMatch(/background-color:\s*#fff/);
      expect(cssContent).toMatch(/box-shadow:\s*0\s+2px\s+5px\s+rgba\(0,\s*0,\s*0,\s*0\.05\)/);
    });

    test('should have skills-content styles', () => {
      expect(cssContent).toMatch(/\.skills-content\s*{/);
      expect(cssContent).toMatch(/display:\s*flex/);
      expect(cssContent).toMatch(/flex-wrap:\s*wrap/);
      expect(cssContent).toMatch(/gap:\s*20px/);
    });

    test('should have skills-list styles', () => {
      expect(cssContent).toMatch(/\.skills-list\s*{/);
      expect(cssContent).toMatch(/list-style:\s*none/);
      expect(cssContent).toMatch(/padding:\s*0/);
      expect(cssContent).toMatch(/display:\s*flex/);
      expect(cssContent).toMatch(/flex-wrap:\s*wrap/);
      expect(cssContent).toMatch(/gap:\s*15px/);
    });

    test('should have skills-list item styles', () => {
      expect(cssContent).toMatch(/\.skills-list\s+li\s*{/);
      expect(cssContent).toMatch(/background:\s*#cfaba5ff/);
      expect(cssContent).toMatch(/padding:\s*8px\s+15px/);
      expect(cssContent).toMatch(/border-radius:\s*8px/);
    });
  });

  describe('Contact and Footer Styles', () => {
    test('should have contact section styles', () => {
      expect(cssContent).toMatch(/#contact\s*{/);
      expect(cssContent).toMatch(/padding:\s*60px\s+0/);
    });

    test('should have footer styles', () => {
      expect(cssContent).toMatch(/footer\s*{/);
      expect(cssContent).toMatch(/background:\s*#cfaba5ff/);
      expect(cssContent).toMatch(/color:\s*#3d444a/);
      expect(cssContent).toMatch(/text-align:\s*center/);
      expect(cssContent).toMatch(/padding:\s*1rem\s+0/);
    });
  });

  describe('Animation Styles', () => {
    test('should have project animation styles', () => {
      expect(cssContent).toMatch(/\.project\s*{/);
      expect(cssContent).toMatch(/opacity:\s*0/);
      expect(cssContent).toMatch(/transform:\s*translateY\(20px\)/);
      expect(cssContent).toMatch(/transition:\s*opacity\s+0\.5s\s+ease,\s*transform\s+0\.5s\s+ease/);
    });

    test('should have project show animation styles', () => {
      expect(cssContent).toMatch(/\.project\.show\s*{/);
      expect(cssContent).toMatch(/opacity:\s*1/);
      expect(cssContent).toMatch(/transform:\s*translateY\(0\)/);
    });
  });

  describe('Responsive Design', () => {
    test('should have mobile responsive styles', () => {
      expect(cssContent).toMatch(/@media\s+\(max-width:\s*768px\)/);
    });

    test('should have responsive projects grid', () => {
      expect(cssContent).toMatch(/\.projects-grid\s*{/);
      expect(cssContent).toMatch(/grid-template-columns:\s*1fr/);
    });

    test('should have responsive about content', () => {
      expect(cssContent).toMatch(/\.about-content\s*{/);
      expect(cssContent).toMatch(/flex-direction:\s*column/);
    });
  });

  describe('Color Scheme', () => {
    test('should use consistent color palette', () => {
      // Check for main color variables usage
      expect(cssContent).toMatch(/#e9e4d8ff/); // Alabaster
      expect(cssContent).toMatch(/#cfaba5ff/); // Tea rose red
      expect(cssContent).toMatch(/#b37070ff/); // Old rose
      expect(cssContent).toMatch(/#3a3a3aff/); // Jet
    });

    test('should have proper contrast ratios', () => {
      // Check that dark text is used on light backgrounds
      expect(cssContent).toMatch(/color:\s*#3a3a3aff/); // Dark text
      expect(cssContent).toMatch(/background-color:\s*#fff/); // White background
    });
  });

  describe('Typography', () => {
    test('should have proper font families', () => {
      expect(cssContent).toMatch(/font-family:\s*'Lora',\s*serif/);
      expect(cssContent).toMatch(/font-family:\s*'Playfair Display',\s*serif/);
    });

    test('should have proper font sizes', () => {
      expect(cssContent).toMatch(/font-size:\s*3rem/); // h1
      expect(cssContent).toMatch(/font-size:\s*2rem/); // h2
      expect(cssContent).toMatch(/font-size:\s*1\.5rem/); // h3
      expect(cssContent).toMatch(/font-size:\s*1\.2rem/); // h4
      expect(cssContent).toMatch(/font-size:\s*1\.1rem/); // about text
    });
  });

  describe('Spacing and Layout', () => {
    test('should have consistent padding and margins', () => {
      expect(cssContent).toMatch(/padding:\s*60px\s+0/); // Section padding
      expect(cssContent).toMatch(/padding:\s*25px/); // Project padding
      expect(cssContent).toMatch(/margin-bottom:\s*15px/); // Consistent margins
    });

    test('should have proper gaps in flexbox and grid', () => {
      expect(cssContent).toMatch(/gap:\s*20px/); // About content gap
      expect(cssContent).toMatch(/gap:\s*30px/); // Projects grid gap
      expect(cssContent).toMatch(/gap:\s*15px/); // Skills gap
    });
  });
});
