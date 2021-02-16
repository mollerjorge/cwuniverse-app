# Clockwork Website
This repository holds everything related to clockwork's website
## Prerequisites
You will need Node.js version 8.0 or greater installed on your system.
## Setup

Get the code by either cloning this repository using git

```
git clone https://github.com/clockworkllc/clockwork-website.git
```

... or [downloading source code](https://github.com/clockworkllc/clockwork-website.git) code as a zip archive.

Once downloaded, open the terminal in the project directory, and install dependencies with:


```bash
npm install
# or
yarn install
```

### Run development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Configuring Intercom
An environment file .env or .env.local must be placed in the local directory with all variables specified in .env.example file.

```
NEXT_PUBLIC_INTERCOM_APP_ID=/*INTERCOM_APP_ID*/
```

If using vercel you should also add this env variable under project settings > environment variables > plain text 

## Project Structure

```bash
README.md
├── components # Reusable components should be under this folder 
│   ├── Button
│   │   ├── Button.js
│   │   └── index.js
│   ├── ClockworkCTA
│   │   ├── ClockworkCTA.js
│   │   └── index.js
│   ├── Footer
│   │   ├── Footer.js
│   │   └── index.js
│   ├── GroupBox
│   │   ├── GroupBox.js
│   │   └── index.js
│   ├── Header
│   │   ├── Header.js
│   │   └── index.js
│   ├── Modal
│   │   ├── Modal.js
│   │   └── index.js
│   ├── PostLayout
│   │   ├── PostLayout.js
│   │   └── index.js
│   ├── SelectBox
│   │   ├── SelectBox.js
│   │   └── index.js
│   ├── SignupModal
│   │   ├── SignupModal.js
│   │   └── index.js
│   ├── SocialShare
│   │   ├── ShocialShare.js
│   │   └── index.js
│   └── Testimonials
│       ├── Testimonials.js
│       └── index.js
├── getAllPosts.js # Helper function to pull in all posts 
├── jsconfig.json # js configuration to use absolute paths 
├── next.config.js # Next js configuration file 
├── package.json
├── pages # This directory holds all the pages for the site. 
│   ├── _app.js
│   ├── _document.js
│   ├── about-us.js
│   ├── blog # This directory hold all of the blog posts 
│   │   ├── an-honest-approach-to-investor-relations
│   │   │   └── index.mdx
│   │   ├── performance-metrics-how-are-your-investors-judging-you
│   │   │   └── index.mdx
│   │   ├── striking-the-balance-investor-communications-dos-and-donts
│   │   │   └── index.mdx
│   │   └── the-building-blocks-of-successful-investor-reporting
│   │       └── index.mdx
│   ├── blog.js
│   ├── for-founders.js
│   ├── for-investors.js
│   ├── index.js
│   ├── privacy-policy.js
│   └── terms-of-use.js
├── postcss.config.js
├── public
│   ├── images # You should add images to this directory and reference them from code like this: src=" images/clockworkLogo.png"
├── styles # Folder to hold all styles 
│   ├── base
│   │   ├── reset.css
│   │   └── typography.css
│   ├── components
│   │   ├── badge.css
│   │   ├── buttons.css
│   │   ├── group-box.css
│   │   ├── slider.css
│   │   ├── tabs.css
│   │   └── waves.css
│   ├── cwuniverse.css
│   ├── pages
│   │   ├── about-us.css
│   │   ├── post.css
│   │   └── terms-of-use.css
│   └── tailwind.css
├── tailwind.config.js
├── yarn-error.log
└── yarn.lock
```

## FAQ
### How can I create a new page?
You can create a new page, e.g. https://clockwork.app/contact-us by adding a `contact-us.js` file under the `pages` directory. From there you should export a react function/component that holds the content of the entire page. Refer to the ones that are already created for examples.

### How can I create a new blog post?
You can create a new blog post by adding a folder under the `pages/blog` directory with the name of the blog post. Next create an `index.mdx` file under that folder.
```bash
e.g.
pages
|
├── blog 
│   │   ├── this-is-a-new-blog-post
│   │   │   └── index.mdx
```

Bear in mind that index.mdx file is a markdown file that also accepts the use of react component. To continue to have the same layout as the rest of the blog posts just copy and paste the content from the already created blogposts.

### How can I tweak styles?
The project uses [tailwind css](https://tailwindcss.com/docs). Its a utility first css framework, this means you have atomic classes available for you to use out of the box. If you want to add styles to an HTML element just add the utility class right in the `className` attribute of the HTML tag.

```jsx
// e.g.

...
<h1 className="text-center"> 
  This is some title that I want to modify 
</h1>

...
```
`.text-center`: utility class available out of the box that sets the text-align property to center

To see a full list of the utility classes available please visit:
https://nerdcave.com/tailwind-cheat-sheet