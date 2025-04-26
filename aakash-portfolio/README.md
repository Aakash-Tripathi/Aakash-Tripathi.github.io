# Aakash Tripathi's Research Portfolio

Welcome to the portfolio website of Aakash Tripathi, a Ph.D. candidate conducting multimodal medical research at Moffitt Cancer Center. This website showcases my educational background, research interests, publications, and presentations.

## Project Structure

The project is organized as follows:

```
aakash-portfolio
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

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/Aakash-Tripathi/aakash-portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd aakash-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the portfolio.

## Deployment

This project is configured to be deployed on GitHub Pages. The deployment process is automated using GitHub Actions. Upon pushing changes to the main branch, the website will be automatically built and deployed.

## Acknowledgments

Special thanks to Moffitt Cancer Center for the opportunity to conduct research and to all collaborators and mentors who have supported my journey.

For more information, please visit my [GitHub](https://github.com/lab-rasool) and [Hugging Face](https://huggingface.co/Lab-Rasool) profiles.