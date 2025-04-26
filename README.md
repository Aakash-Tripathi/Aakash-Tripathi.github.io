# Aakash Tripathi's Research Portfolio

Welcome to the portfolio website of Aakash Tripathi, a Ph.D. candidate conducting multimodal medical research at Moffitt Cancer Center. This website showcases my educational background, research interests, publications, and presentations.

## Project Structure

The project is organized as follows:

```
├── public
│   ├── favicon.svg          # Favicon for the website
│   └── assets
│       └── profile-photo.jpg # Profile photo of Aakash Tripathi
├── src
│   ├── components
│   │   ├── Education.astro   # Component for the education section
│   │   ├── Footer.astro      # Component for the footer
│   │   ├── Header.astro      # Component for the header
│   │   ├── Navbar.astro      # Component for the navigation bar
│   │   ├── Publications.astro  # Component for the publications section
│   │   └── SectionContainer.astro # Wrapper for different sections
│   ├── layouts
│   │   ├── Layout.astro      # Main layout for the pages
│   │   └── PublicationLayout.astro # Layout for the publications page
│   ├── pages
│   │   ├── index.astro       # Main landing page
│   │   ├── publications.astro # Publications page
│   │   ├── research.astro     # Research interests page
│   │   └── contact.astro      # Contact information page
│   ├── data
│   │   ├── education.js      # Educational background data
│   │   ├── publications.js    # Publications data
│   │   └── presentations.js    # Presentations data
│   └── styles
│       └── global.css        # Global styles for the website
├── .github
│   └── workflows
│       └── deploy.yml        # GitHub Actions workflow for deployment
├── astro.config.mjs          # Astro project configuration
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```