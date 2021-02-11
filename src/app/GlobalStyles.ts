import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary: #3644F6;
    --secondary: #00DD88;
    --blue: #3644F6;
    --green: #00DD88;
    --red: #F83366;
    --yellow: #F8EE44;
    --lightgray: #F5F7F9;
    --mediumgray: #74818D;

    --font-family-sans: "Public Sans", sans-serif;
    
    // Amplify variables
    --amplify-primary-color: var(--primary);
    --amplify-primary-tint: var(--primary);
    --amplify-primary-shade: var(--primary);
    --amplify-font-family: var(--font-family-sans);
  }

  body {
    font-family: var(--font-family-sans);
    margin: 0;
    padding: 0;
    color: #242A31;
  }
`;
