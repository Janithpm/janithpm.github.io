// imports
import { tools } from './data/tools'


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