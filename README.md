This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What this is:
-  A brief demo highlighting some of the features of Next.js.

## Getting Started:
1. You’ll: need Node.js version 10.13 or later. Latest LTS version recommended (14.15.4).
2. Clone: `git clone git@github.com:puigandrew1/nextjs-demo.git`
3. Install: `yarn install`

## Pages:
- In Next.js, a page is a React component exported from a `.js` file in the pages directory. Each page is associated with a route based on its file name.
Example: `pages/about.js =>` [http://localhost:3000/about](http://localhost:3000/about)

- By default, Next.js pre-renders every page. The HTML is generated at build time rather than run time and will be reused on each request. Pre-rendering can result in better performance and SEO.

- Pages with dynamic routes are possible. Example: `pages/product/[id].js =>` [http://localhost:3000/product/hiphugger](http://localhost:3000/product/hiphugger)

- Client-side navigation means that the page transition happens using JS, which is faster than the default navigation done by the browser. So like an AJAX page load I suppose.
- More on pages: https://nextjs.org/learn/basics/navigate-between-pages

## Assets and CSS:
- Next.js supports CSS modules out of the box.
- We can configure Next.js to [support styled components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components). I haven't used StyledComponents with Next.js yet, but looking forward to playing around with that.
- Next.js can serve static files, like images, fonts, pdfs, etc, under the top-level public directory. Example `<img src="/image.png" />` resolves to `/public/image.png`
- More on assets and CSS: https://nextjs.org/learn/basics/assets-metadata-css
  
## API Routes:
- We can create an API endpoint as a Node.js serverless function. Example: `pages/api/email.js =>` [http://localhost:3000/api/email](http://localhost:3000/api/email)
- More on API Routes: https://nextjs.org/learn/basics/api-routes

## Deployment
- The easiest way to deploy a Next.js app is to use the [Vercel platform](https://vercel.com/) developed by the creators of Next.js. You can also deploy using software like Netlify or any hosting provider that supports Node.js.




## What's Next:
- Questions??
- Next.js has great documentation and offers a nice [Create a Next.js App tutorial](https://nextjs.org/learn/basics/create-nextjs-app) which I highly recommend you take to fill in some of the gaps of this demo.
