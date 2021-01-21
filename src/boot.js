import "@babel/polyfill";
import Core from 'checheza_core';

class Boot {
    constructor() {
        Core.refreshModules()
        .then(() => {
            Core.moduleUpdate()
            .then(() => {
                Core.startMainWidget();
            });
        });
    }
}

export default new Boot();