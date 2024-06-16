## On-line version

https://rciesielski3.github.io/qa-blog/

## Requirements

**Part 1: Create a Next.js project with TypeScript and Tailwind CSS**

1. Using [**official documentation**](https://nextjs.org/docs/getting-started/installation) install Next.js along with TypeScript and Tailwind CSS
2. Run the project locally using **`npm run dev`** or **`yarn dev`** and check that everything works properly by opening **`http://localhost:3000`** in your browser.

**Part 2: Creating a Simple API**

1. In your Next.js project, create a simple API using the Next.js server functions. You can do this by creating files in the **`app/api`** directory.
2. Your API should be able to retrieve blog posts. You can use static data or any database to store this information for now.

**Part 3: Creating Blog Pages**

1. Use the API you created to download blog posts and display them on the home page.
2. Create a page for each blog post using Next.js routing.
3. Use the Flowbite library to create views.
4. Add styles to your blog pages with Tailwind CSS.

## Getting Started

Run the development server:

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
