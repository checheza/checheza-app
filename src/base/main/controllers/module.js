export default class Module {
    constructor(module)  {
        // Add exit button
        core.utils.addExitButton();
        $('#module_title').text(module.name); 
        $('#module_description').text(module.description);   
        $('#module_image').attr("src", module.pictures[0]);

        $('#module_download').click((e) =>{ 
            e.preventDefault();
            core.backend.downloadModule(module.file); 
        })

    }
}