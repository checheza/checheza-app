import category from '../views';

export default class Modules {
    constructor(category) {
        this.widget = core.getActiveWidget();

        // Allow zooming
		core.utils.makeZoomable();
		
		// Add exit button
        core.utils.addExitButton();
        
        // test link that opens module view
        this.getModulesInCategory(category);
        $('#module_category').text(category);   
    }

    getModulesInCategory(category) {
        core.backend.GET("/modules/category/"+category)
        .then(response => {
            this.modules = JSON.parse(response);
            this.printModules();
        });
    }

    printModules() {
        for (let module of this.modules) {
            document.getElementById("all-modules").innerHTML += `
                <div style="pointer: click;" id="${ module.title }" class="section-item">
                    <div class="item">
                        <img src="${ module.thumbnail }" alt="" />
                    </div>
                    <div class="image_text">
                        <button style"margin: 0em;" class="button"> Primary 1 </button>
                        <p id="example_title">${ module.title }</p>
                    </div>
                </div>
            `;

            setTimeout(() => { 
                document.querySelector(`#${module.title}`).onclick = () => {
                    this.openModuleView(module);
                };
            }, 100);

        }
    }

    openModuleView(module) {
        this.widget.loadView("Module", module);
    }
}