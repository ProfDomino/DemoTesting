
I took the ReMo webapp and gutted it to make a very very small application.  

The landing page you see on localhost:3000/me is the same

Clicking "Get started" will bring you to localhost:3000/me/signup

Which is a small demo page that works in the following way:

* You start in the "signed out" state.  It'll say "sign in" and give you a button to do so.

* clicking the "sign in" button will cause you to enter the "signed in" state.  The text you see on screen will be different and the button will now say "Sign out"

* clicking the button again will bring you back to the "signed out" state you started at



Want to try it out?
-------------------

1. clone this repo down 
1. create the same .env.local file you have in your regular webapp folder
1. start up the server and go to "localhost:3000/me" as you would normally


Want to try the integration tests?
----------------------------------

Install Playwright by following the directions here (should just be an npm install) `https://playwright.dev/docs/intro`
Navigate to the `IntegrationTesting/tests` folder.

This will take a minute to run.  If anything fails, it may redirect to a webpage to summarize the outcome.


*IN INTELLIJ*
Right click on the `demo_integration.spec.ts` file and click "run".  There's also an icon in the top right hand corner.  

*IN THE TERMINAL*
Run `npx playwright test`.  Running `npx playwright show-report` will summarize the outcome of these tests.  


*If you want to change the browser(s) this runs on*
Find the `playwright.config` file within the `IntegrationTesting` directory.  Look for the projects list and uncomment whatever you want.




WebApp Documentation
--------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details
