# ⚡️ [Next.js Crash Course](https://github.com/jaimemendozadev/nextjs-crash-course)

<br />

## Table of Contents (TOC)

- [Prerequisites](#prerequisites)
- [JavaScript Essentials (non-negotiable)](#javascript-essentials-non-negotiable)
- [React Essentials](#react-essentials)
- [Next.js Essentials](#nextjs-essentials)


<br />

---


## Prerequisites

I'm going to assume you have access to the following, have working knowledge, or can figure out how to install AND use the following tools on your local machine:

- Node.js (installed locally on your computer)
- Git
- GitHub Account
- Code Editor of Your Choice (preferably [VS Code](https://code.visualstudio.com/) because it plays nicely with Next.js/TypeScript and autocompletes a lot of code for you.)

<br />

**IMPORTANT**: We will not be discussing how to implement [TypeScript (TS)](https://www.typescriptlang.org/) in this crash course as that would lead to cognitive overhead for everyone involved 🤯. **UNLESS THERE'S UNANIMOUS CONSENT** to use TS in the project, avoid getting TS errors in the codebase by using the all important escape hatch by adding the following line of code at the top of each `.ts` or `.tsx` file: `// @ts-nocheck`


<br />


[Back to TOC](#table-of-contents-toc)

---

## JavaScript Essentials (non-negotiable)

- Variables & Scope
  - `let` vs `const`
  - Scope

- Closure

- Arrow Functions

- Objects `{}` and Arrays `[]`

- Async/Promises/Fetch

<br />


[Back to TOC](#table-of-contents-toc)

---

## React Essentials

From the [React.js Docs](https://react.dev/):

> React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.


- Component as a function: Input (props), Output (JSX)

- Importing and Exporting Components
  - [From React.js Docs: Importing/Exporting Components](https://react.dev/learn/importing-and-exporting-components)

- Hooks
  - `useState`
  - `useEffect`

- Form Events
  - `onChange`
  - `onSubmit`

- Closures in React
  - State updates & stale values. (Show that `useState` updater function captures and updates local state: `setCount(c => c+1)`.)

- Side Effect
  - useEffect

- Rendering Lists
 - `key` attribute
 - Use of the Array map method `[].map`


<br />

[Back to TOC](#table-of-contents-toc)

---

## Next.js Essentials

- `client` vs. `server` components

- Folder Based Routing
  - page.ts
  - layout.tx

- Server Actions vs. API Routes
  - [Next.js Docs on API Routes](https://nextjs.org/docs/app/guides/migrating/app-router-migration#api-routes)

 
<br />

[Back to TOC](#table-of-contents-toc)

___



