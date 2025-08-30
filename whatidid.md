
SELECTED VARIANT as React Router v7
puter.com is an advamced open source internet os.
(think of it as your personal computer on internet) can also be a remote desktop enviorment

puter.js allows each user of our app to cover their own cost
this means no matter how many users u have it'll always cost u zero in infrastructure.

vite.config.ts --> contains vite configuration for the project and we can already see  
thatv we have three plugins tailwind for styling, typescript for type safety and reactRouter
for routing.

react-router.config ----> configuration options for react router making use of the serverside rendering.

docker file -> letting you host your app inside of a docker container 
node-modules folder which contains all your dependencies.
root.tsx is the main entry point of the application. it contains all the default layout 
and loads all the necessary scripts.
All other pages are going to be passed as children to this page.

npm install -D tw-animate-css

added the icons and images into the public folder.
wrote app.css
basic project setup done.

***********************************************************************
now we go to app -> routes -> home.tsx
changed title to Papertrail
removed the welcome page and added the main page
so now i also deleted the welcome folder

okay now reloaded the site 
and now i am back to a completely blank page
to make it not so blank render a new section in it 