# NextJS BMI Calculator

This is a BMI (Body Mass Index) calculator application built with Next.js. It allows users to input their personal data and body measurements to calculate their BMI, providing a visual representation of their health status.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- npm (comes with Node.js) or yarn package manager

### Installing

1. Clone the repository:
   ```
   git clone https://github.com/manullah/c862928b-af1f-4757-9a08-51498628b79a.git
   ```
2. Navigate to the project directory:
   ```
   cd c862928b-af1f-4757-9a08-51498628b79a
   ```
3. Install the dependencies:
   ```
   npm install
   # or
   yarn install
   ```

### Running the app

To run the app in development mode, use the following command:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for production

To build the app for production, run:

```
npm run build
# or
yarn build
```

Then, to start the production server:

```
npm start
# or
yarn start
```

## Packages Used

This project uses the following packages:

1. **next: ^14.2.13**

   - Purpose: The core framework for server-rendered React applications.
   - Usage: Used throughout the app for routing, server-side rendering, and API routes.

2. **react: ^18** and **react-dom: ^18**

   - Purpose: Core libraries for building user interfaces with React.
   - Usage: Used throughout the app for creating components and managing the UI.

3. **react-hook-form: ^3.9.0**

   - Purpose: Provides efficient form validation with minimal re-renders.
   - Usage: Used in the BMI input form for handling form state and validation.

4. **yup: ^1.4.0**

   - Purpose: Object schema validation.
   - Usage: Used in conjunction with react-hook-form for form validation.

5. **tailwindcss: ^3.4.1**
   - Purpose: A utility-first CSS framework.
   - Usage: Used for styling the components and layout of the application.

## Features

- Onboarding flow with gender selection and date of birth input
- Body measurements input form
- BMI calculation
- Visual representation of BMI status
- Profile page displaying all user information

## Project Structure

- `app/`: Contains the main pages of the application
  - `homepage/page.tsx`: Welcome page
  - `gender-selection/page.tsx`: Gender selection and date of birth input page
  - `calculate/page.tsx`: Body measurements input form
  - `profile./page.tsx`: Profile page with BMI calculation and visualization
- `components/`: Reusable React components
- `modules/`: Utility functions, including BMI calculation logic
