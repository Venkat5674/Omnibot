# OmniBot

![Chatbot Icon](https://img.icons8.com/?size=100&id=44823&format=png&color=000000)

OmniBot is an advanced AI chatbot designed to handle **text-to-text** and **text-to-code** prompts with ease. Powered by the **Google Gemini API** and built using **React.js**, OmniBot delivers fast and accurate responses, making it an ideal assistant for developers, learners, and anyone looking to streamline their workflows.

---

## Features

- **Text-to-Text Prompts**: Seamlessly handle conversational or informational queries.
- **Text-to-Code Prompts**: Generate efficient and readable code snippets for your programming needs.
- **Dynamic UI**: A responsive and user-friendly interface built with React.js.
- **AI-Powered Intelligence**: Backed by Google Gemini API for state-of-the-art performance.

---

## Technologies Used

- **Frontend**: React.js
- **AI Integration**: Google Gemini API
- **Styling**: CSS and modern UI design principles
- **Backend** (optional): Firebase for chat data storage (if applicable)

---



# Creatation Steps React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Deploying OmniBot on Netlify

Follow these steps to deploy OmniBot on **Netlify**:

---

### Prerequisites

1. Ensure your project is set up and tested locally.
2. Create a build of your React.js app.
3. A Netlify account (sign up at [Netlify](https://www.netlify.com/) if you don’t have one).

---

### Deployment Steps

1. **Build the React App**:
   Run the following command in your project directory:
   ```bash
   npm run build
2. **Log In to Netlify**:

    - Go to Netlify.
    - Log in with your credentials.
  
3. **Create a New Site**:

    - Click on the "Add New Site" button.

    - Select "Deploy manually".

5. **Upload the Build Folder**:

    - Drag and drop the build folder (generated in Step 1) into the upload area on the Netlify dashboard.

5. **Configure Environment Variables**:

    - Go to the Site Settings.
    - Under Environment Variables, click "Edit variables".
    - Add your API key for the Google Gemini API:
      ```bash
      REACT_APP_GOOGLE_GEMINI_API_KEY=your_api_key_here

6. **Set Build Commands (Optional)**:

   - If you're connecting a Git repository to Netlify, set the following build commands:
   - Build command: npm run build
   - Publish directory: build

7.**Deploy the App**:

   - Netlify will automatically build and deploy the app.
   - Once deployed, you’ll receive a unique domain name (e.g., https://omnibot.netlify.app).

## 👩‍💻 Author
Developed by Venkatesh Pamudurti

[GitHub](https://github.com/Venkat5674/)
[LinkedIn](https://www.linkedin.com/in/venkatesh-pamudurti-2a134a252/)
