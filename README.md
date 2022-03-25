# Tailwind CSS Boilerplate V3.0.13

![template](/dist/img/template.jpeg)

How To Use
```
git clone https://github.com/developermithu/tailwindcss-boilerplate.git
cd tailwindcss-boilerplate
npm install
npm run watch
npm run prod (for minify css)
```

To Create New Repository
```
delete .git hidden file manually or command 
rm -rf .git
git remote -v (check current repository)
```


How To Build From Scratch
```
npm init -y
npm install -D tailwindcss@latest postcss-cli@latest autoprefixer@latest
npx tailwindcss init -p
npm install -D cssnano (optional - for minify css)
npm run watch (set package.json)
```