import styles from '../../skin/stylesheets/treehouse.css';

const frontView = () => {
    return `
    <div id="${ styles.widgetBackground }">
        <div id="${ styles.tree }">
            <div id="${ styles.braintrain }" class="treehouse widget btn" />
            <div id="${ styles.math }" class="treehouse widget btn" />
            <div id="${ styles.writing }" class="treehouse widget btn" />
            <div id="${ styles.reading }" class="treehouse widget btn" />
        </div> 
    </div>` };

export default frontView;