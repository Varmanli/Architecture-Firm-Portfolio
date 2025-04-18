# Architecture Firm Portfolio

Welcome to **Architecture Firm Portfolio**, a modern and responsive web application built with React to showcase an architecture firm's projects with elegance and functionality. This project delivers a seamless user experience, featuring a dynamic portfolio, interactive project details, and a user-friendly contact form. Designed with modularity and performance in mind, it serves as a robust platform for presenting architectural work to clients and visitors.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Live Demo](#live-demo)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Architecture Firm Portfolio is a front-end web application crafted to highlight an architecture firm's projects through a visually appealing and intuitive interface. It includes a responsive homepage, a portfolio grid with project cards, detailed project pages with image carousels, and a contact form with validation. Built with modern React practices, the application ensures fast performance, accessibility, and a delightful user experience across devices.

## Features

- **Responsive Homepage**: Showcases the firm's mission and featured projects with a clean, modern layout optimized for all screen sizes.
- **Portfolio Grid**: Displays projects in a dynamic grid, with each card featuring a project image and title, linking to detailed views.
- **Project Details Page**: Offers an immersive experience with a smooth image carousel, detailed project descriptions, and a call-to-action contact button.
- **Contact Form**: Includes a fully validated form (name, email, message) with real-time feedback for a seamless user interaction.
- **Fast & Optimized**: Leverages optimized images and efficient React rendering for quick load times and smooth navigation.
- **Modular Design**: Built with reusable components for easy maintenance and scalability.

## Technologies

- **React**: For building a dynamic and component-based user interface.
- **React Router**: Enables seamless navigation and dynamic routing.
- **React-Slick**: Powers the image carousel for project details.
- **Formik & Yup**: Handles form management and client-side validation.
- **CSS (Flexbox/Grid)**: Custom styles for responsive and modern layouts.
- **JavaScript (ES6+)**: Modern syntax for robust functionality.
- **Vite**: Fast build tool for development and production optimization.
- **Git/GitHub**: Version control and project hosting.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- **Node.js**: Version 16 or higher
- **npm**: Version 8 or higher (or **yarn**)
- A modern web browser (e.g., Chrome, Firefox, Edge)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Varmanli/Architecture-Firm-Portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Architecture-Firm-Portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running Locally

1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
2. Open your browser and visit:
   ```
   http://localhost:3000
   ```
   The application will reload automatically as you make changes.

## Live Demo

Explore the live version of the project:  
[https://architecture-firm.varmanli.ir/](https://architecture-firm.varmanli.ir/)

## Project Structure

```plaintext
Architecture-Firm-Portfolio/
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/             # Project images and media files
│   ├── components/         # Reusable components (Header, Footer, ProjectCard, etc.)
│   ├── pages/              # Page components (Home, Portfolio, ProjectDetails, Contact)
│   ├── data/               # Static JSON data for projects
│   ├── styles/             # Custom CSS for styling
│   ├── App.js              # Main app with routing logic
│   └── index.js            # Application entry point
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── .gitignore              # Files ignored by Git
```

## Usage

- **Homepage**: Browse the firm's mission and view featured projects. Click on project cards to explore details.
- **Portfolio**: Discover all projects in a grid layout. Use the navigation to filter or explore specific projects.
- **Project Details**: Dive into individual projects with a carousel of images and detailed descriptions. Use the contact button to reach out.
- **Contact Form**: Fill out the form with your name, email, and message. The form validates inputs and provides feedback on submission.
- **Navigation**: Use the header menu to switch between pages seamlessly, with responsive support for mobile and desktop.

## Screenshots

### Homepage

![Homepage](screenshots/homepage.png)

### Portfolio Grid

![Portfolio](screenshots/portfolio.png)

### Project Details

![Project Details](screenshots/project-details.png)

### Contact Form

![Contact Form](screenshots/contact.png)

_Note: Add screenshots to the `screenshots/` folder and update the paths above if you include them._

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the project's style guidelines and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, feedback, or collaboration:

- **GitHub**: [Varmanli](https://github.com/Varmanli)
- **Email**: [varmanliamirhosein@Gmail.com] (replace with your email if desired)

Thank you for exploring Architecture Firm Portfolio! Enjoy the experience.

