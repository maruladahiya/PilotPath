# PilotPrep — interactive front-end starter

This is a front-end prototype for PilotPrep, built with React, Vite and Framer Motion.

## Run it on your computer

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this project folder.
3. Open a terminal in the `pilotprep-starter` folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually http://localhost:5173).

## Publish it with GitHub + Cloudflare Pages

1. Create a new **public or private** GitHub repository named `pilotprep`.
2. Upload the contents of this folder to the repository (the files inside this folder, not an extra nested folder).
3. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
4. Select your `pilotprep` repository.
5. Set:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click **Save and Deploy**. Cloudflare will provide a public preview URL.

## What works in this prototype

- Responsive landing page and mobile navigation
- Animated transitions and scroll progress
- Interactive pathway selector
- Sample aptitude quiz with scoring and explanations
- Expandable FAQ
- Training, pricing and product sections

## What is not connected yet

This is a front-end prototype. It does not yet have:
- User accounts or secure login
- A database or saved student progress
- Real payment processing
- Admin/content management
- Production AI features
- Advanced psychomotor simulations

Those features need backend services and careful security work before accepting real users or payments.

## Important content note

PilotPrep is an independent preparation concept. This prototype uses original sample questions and does not reproduce confidential airline or assessment-provider tests, imply official affiliation, or guarantee selection.
