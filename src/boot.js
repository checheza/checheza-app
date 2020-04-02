import "@babel/polyfill";
import Core from 'checheza-core';

class Boot {
    constructor() { 
        //Core.refreshModules();
        Core.filesystem.readFolder("modules")
            .then(moduleFolders => {
                return moduleFolders.files
            }).then(moduleFolder => {
                moduleFolder.forEach(folder => {
                    Core.filesystem.readFolder("modules/" + folder)
                        .then(moduleContents => {
                            moduleContents.files.forEach(file => {
                                if (file === "widget.js") {
                                    Core.filesystem.readFile("modules/" + folder + "/" + file)
                                        .then(data => {
                                            var fileref = document.createElement('script');
                                            fileref.setAttribute("type", "module");

                                            fileref.innerHTML = atob(data.data);
                                            document.getElementsByTagName("head")[0].appendChild(fileref);
                                        });
                                }
                            })
                        })
                })
            })
    }
}

export default new Boot();