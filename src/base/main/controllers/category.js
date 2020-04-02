import core from '../../../core/core';

const printCurrentModules = (category) => {
    core.getAllAddonsInCategory(category)
        .then(addons => {
            for (let addon of addons) {
                $('.sections').prepend(`<div class="section-item">
                    <a onclick="core.startWidget('${ addon.identifier} ')" href="#" class="item">
                        <img class="image_class" src="${ addon.identifier}/${addon.icon}">
                    </a>
                </div>`);
            }
        });
}

export default printCurrentModules

