import styles from '../../skin/stylesheets/treehouse.css';
import categories from '../../skin/stylesheets/categories.css';

const category = () => { 
    return `
    <div id="${ styles.widgetBackground }" style="background-color: rgb(54, 37, 16);">
        <div class="${ styles.categories }">
            <p> Play now </p> 
        </div>

        <div class="${ categories.sections }">
            <div class="${ categories.section_item }">
                <div class="${ categories.item }">
                    <div id="add_more" class="${ categories.add_more }"></div>
                </div>
            </div>
        </div>
    </div>`
}

export default category;