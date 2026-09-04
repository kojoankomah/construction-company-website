# ApexStone Construction Website

A responsive, multi-page construction company website built with semantic HTML, modern CSS, and vanilla JavaScript. The project demonstrates how a clear visual identity, useful interactions, and responsive layouts can turn a fictional business brief into a professional web experience.

> **Portfolio project:** ApexStone Construction is a fictional company. The company details, project names, statistics, addresses, and contact information are demonstration content.

## Live Website

[View the live ApexStone website](https://kojoankomah.github.io/construction-company-website/)

![ApexStone Construction homepage](assets/images/hero/home-hero.webp)

## Project Overview

The website was created to give a construction company a credible online presence. It helps visitors understand the company, explore its services, review example projects, and prepare a project enquiry through a structured contact form.

The finished website contains five pages:

- **Home:** Introduces the company and its main value proposition.
- **About:** Presents the company story, mission, values, and approach.
- **Services:** Explains six construction and project-support services.
- **Projects:** Displays a filterable portfolio of completed work.
- **Contact:** Provides company details and a validated quotation form.

## Key Features

- Responsive navigation with a mobile menu
- Reusable visual design across all pages
- Project filtering by construction category
- Expandable service FAQs
- Service enquiry links that preselect the relevant contact-form option
- Client-side form validation with accessible error feedback
- Responsive layouts for mobile, tablet, and desktop screens
- Optimized WebP images with descriptive alternative text
- Semantic HTML landmarks and accessible form labels
- Social-sharing metadata, a favicon, robots file, and sitemap
- Static deployment through GitHub Pages

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- GitHub Pages
- Visual Studio CodeAdd professional project README
- Live Server

No frontend framework or external JavaScript library was used.

## Project Structure

```text
construction-company-website/
├── index.html
├── about.html
├── services.html
├── projects.html
├── contact.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── icons/
│   └── images/
│       ├── hero/
│       ├── projects/
│       └── team/
├── css/
│   └── style.css
└── js/
    ├── main.js
    ├── projects.js
    └── contact.js
```

## JavaScript Functionality

### Navigation

`main.js` controls the mobile navigation menu and supports the shared navigation experience across the website.

### Project Filtering

`projects.js` filters portfolio cards using each card's `data-category` value. It also updates the selected filter's visual and accessibility state.

### Contact Form

`contact.js` validates required fields, checks email and telephone input, displays field-level feedback, and shows a demonstration success message without reloading the page.

It also reads the `service` query parameter from URLs such as:

```text
contact.html?service=Residential%20Construction
```

This allows a service enquiry button to open the Contact page with the appropriate service already selected.

## Responsive Design

The layout adapts at several breakpoints to preserve readability and usability:

- Multi-column sections become simpler grids on tablets.
- Content and forms become single-column layouts on small screens.
- Navigation changes to a touch-friendly mobile menu.
- Images retain useful crops using responsive sizing and `object-fit`.
- Buttons and form controls remain easy to use on smaller screens.

## Accessibility Considerations

- Semantic page landmarks and heading structure
- Descriptive image alternative text
- Keyboard-accessible navigation and controls
- Visible focus styles
- Properly connected form labels and fields
- `aria-invalid` feedback for form errors
- Live status messages for filters and successful form validation
- Sufficient color contrast across the main interface

## Testing

The completed website was checked at mobile, tablet, and desktop widths. Testing included:

- Navigation and internal links
- Mobile-menu behaviour
- Project-category filtering
- FAQ controls
- Service preselection
- Contact-form validation
- Image loading and cropping
- Horizontal overflow
- Browser console errors
- GitHub Pages deployment

## Running the Project Locally

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` with the Live Server extension.

Because the project uses only HTML, CSS, and JavaScript, it does not require package installation or a build command.

## Future Improvements

- Connect the contact form to a secure backend or form service.
- Add a content-management system for projects and services.
- Introduce individual project-detail pages.
- Add automated accessibility and performance testing.
- Replace the fictional company information with verified business content for production use.

## Author

**Kojo Ankomah**  
Frontend development portfolio project

