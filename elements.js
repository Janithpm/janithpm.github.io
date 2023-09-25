// imports
const tools = [
    { name: 'HTML_5', url: './assets/svg/toolbox/HTML_5.SVG' },
    { name: 'CSS_3', url: './assets/svg/toolbox/CSS_3.SVG' },
    { name: 'JAVASCRIPT', url: './assets/svg/toolbox/JAVASCRIPT.SVG' },
    { name: 'TYPESCRIPT', url: './assets/svg/toolbox/TYPESCRIPT.SVG' },
    { name: 'VITEJS', url: './assets/svg/toolbox/VITEJS.SVG' },
    { name: 'REACT', url: './assets/svg/toolbox/REACT.SVG' },
    { name: 'REACT_ROUTER', url: './assets/svg/toolbox/REACT_ROUTER.SVG' },
    { name: 'TAILWIND_CSS', url: './assets/svg/toolbox/TAILWIND_CSS.SVG' },
    { name: 'BOOTSTRAP', url: './assets/svg/toolbox/BOOTSTRAP.SVG' },
    { name: 'MATERIAL_UI', url: './assets/svg/toolbox/MATERIAL_UI.SVG' },
    { name: 'THREE_JS', url: './assets/svg/toolbox/THREE_JS.SVG' },
    { name: 'REDUX', url: './assets/svg/toolbox/REDUX.SVG' },
    { name: 'NEXTJS', url: './assets/svg/toolbox/NEXTJS.SVG' },
    { name: 'EXPRESS', url: './assets/svg/toolbox/EXPRESS.SVG' },
    { name: 'NODEJS', url: './assets/svg/toolbox/NODEJS.SVG' },
    { name: 'NODE_SASS', url: './assets/svg/toolbox/NODE_SASS.SVG' },
    { name: 'SPRING_BOOT', url: './assets/svg/toolbox/SPRING_BOOT.SVG' },
    { name: 'DJANGO', url: './assets/svg/toolbox/DJANGO.SVG' },
    { name: 'MYSQL_LOGO', url: './assets/svg/toolbox/MYSQL_LOGO.SVG' },
    { name: 'MONGODB', url: './assets/svg/toolbox/MONGODB.SVG' },
    { name: 'GIT', url: './assets/svg/toolbox/GIT.SVG' },
    { name: 'GITHUB', url: './assets/svg/toolbox/GITHUB.SVG' },
    { name: 'FIGMA', url: './assets/svg/toolbox/FIGMA.SVG' },
    { name: 'FIREBASE', url: './assets/svg/toolbox/FIREBASE.SVG' },
    { name: 'HEROKU', url: './assets/svg/toolbox/HEROKU.SVG' },
    { name: 'AWS', url: './assets/svg/toolbox/AWS.SVG' },
    { name: 'NETLIFY', url: './assets/svg/toolbox/NETLIFY.SVG' },
    { name: 'Azure', url: './assets/svg/toolbox/Azure.SVG' },
    { name: 'VSCODE', url: './assets/svg/toolbox/VSCODE.SVG' },
    { name: 'POSTMAN', url: './assets/svg/toolbox/POSTMAN.SVG' },
];

// root elements
const toolBox = document.getElementById("tools")


// render
tools.forEach(tool => {
    const html = `
        <div class=" bg-white/90 hover:bg-white transition-ease-in-out duration-300 shadow-md rounded shadow-black/20 border-2 border-secondary/30 p-4 flex justify-center items-center" id="${tool.name}">
                <img class="w-[80%] h-[80%]" src="${tool.url}" alt="${tool.name}">
        </div>
    `
    toolBox.innerHTML += html
})