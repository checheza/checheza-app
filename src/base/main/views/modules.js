import style from  '../../skin/stylesheets/modules.css';

const modules = () => {
    return `<div id="widgetBackground" style="background-color: #F9F7FA;">
        <div class="${ style.instructions }">
            Find a new Module 
            <p hidden id="${ style.module_category }"></p>
        </div>
        <div id="${ style.module_math }">
            <h1 id="${ style.module_title }"></h1>
            <div class="sections" id="all-modules">
            </div>
        </div>
    </div>`;
}

export default modules;