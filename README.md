# Installation instructions
1. Use a github app of your choice (I use github desktop)
2. Download the whole repository.
3. Install node.js
4. Run `npm ci` to install necessary packages.
5. Run `npm run dev` to test website.

# Note on code editing practices
This website has version management from git, and it is very much recommended to learn a little bit about how git works first. The general guideline is to create a new *branch* for each edit, and then to merge that branch into the `main` branch when you've finished editing. The website workflow should then do the rest of the job (deploying etc).

For the editor it will be good to get something supporting ESLint (A package which enforces consistent code practices). I (the first IT officer to make this website) personally use VSCode with a ESLint plugin. Do note sometimes typescript ESLint throws a fit and gives you errors where there shouldn't be related to types: In this cases just ask to disable the specific rule it's giving you the next line.

# Creating new pages