# Next Product Hunt app

## Building dev

First, install dependencies with `npm i`. Then you can run the project with `npm run dev`. It should open at `localhost:3000`.

## Deploying

Pushing to main should trigger Vercel's CI. To build manually, run `npm run build && npm run start`.

## Issues

Product Hunt Graphql server seems to have errors in its schema so I couldn't generate types through `@graphql-codegen/cli`. I resorted to hand-typing it. Very inoptimal, would need to be somehow fixed in production.

I use my own developer API key from the frontend, I'm very aware of how wrong it is. Please be kind.

It took me way more time to get Apollo working well with Next13 than I would like it to.