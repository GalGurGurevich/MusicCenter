# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

---

Hello Priority Team 👋,

Thank you for the opportunity to work on this assignment. Below are a few notes regarding the implementation and my thought process:

## 📝 Notes & Considerations

1. **Styling Approach**  
   Ideally, I would place a dedicated style file next to each component inside the `components/` folder to support modular and maintainable styling.  
   Due to time constraints, I used a single global stylesheet for this version (`App.css`) for simplicity.

2. **State Management**  
   For this scale, React’s built-in state hooks (`useState`, `useEffect`) were sufficient.  
   However, I can see how a global state management tool (like Redux) could be introduced as the app scales — especially for managing the selected track, search history, view mode, etc.

3. **Testing**  
   Given more time, I would have added unit and integration tests using a framework like Jest. Testing is good for ensuring long-term stability and confidence during refactors.

4. **Animations**  
   I’ve implemented basic entrance/exit animations using DOM cloning and transitions. In general this is an area I’d refine further with a library.

5. **TypeScript**  
   I would add actual types instead of (`any`) of course, simply due to time and being unfamiliar with the API objects.

## 🛠️ Getting Started

Make sure you have the following installed on your machine:

-   **Node.js** (version 16 or above recommended)  
    [Download Node.js](https://nodejs.org/)

-   **npm** (comes with Node.js)

npm install
npm run dev
