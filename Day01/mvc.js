/**
 * #NOTE:
 * 1-data
 * 2-event-methods
 * 3-life-init
 */

const sampleData = ['A', 'B', 'C']

const component = {
    data: sampleData,

    removeData(id) {
        // console.log(id);
        // console.log(this);
        this.data.splice(id, 1)
        this.render()
    },
    /** end of removeData(id) */



    findThis: (e) => {
        if (!e.target.matches('button')) {
            return console.log('!!!');
        }
        console.log('【Q1】_findThis-', e);

        console.log('findThis-this', this);
        const vm = this
        console.log('findThis-this', vm);
    },

    findTarget(e) {
        if (!e.target.matches('button')) {
            return console.log('!!!');
        }
        console.log('【Q2】_findTarget-', e);

        console.log('findTarget-this', this);
        const vm = this
        console.log('findTarget-vm', vm);
    },



    editData() {
        const ul = document.querySelector('ul')

        ul.addEventListener('click', function (e) {
            if (!e.target.matches('button')) {
                return console.log('!');
            }
            /**
             * #NOTE:
             * how to check F12
             */
            console.log(e);

            /**
             * #NOTE:
             * Uncaught TypeError: 
             * this.removeData is not a function
             *          
             * function in listener some kind like callback function
             * this ===> ul
             */
            // this.removeData(e.target.dataset.id)
            console.log(this);
            const vm = this
            console.log(vm);
        })


        ul.addEventListener('click', ((e) => {
            console.log('【Right-Way】');
            if (!e.target.matches('button')) {
                return console.log('!!');
            }
            // console.log(e);
            // console.log(this);
            this.removeData(e.target.dataset.id)

        }), { capture: true })


        /**
         * #XXX:
         * capture
         */
        ul.addEventListener('click', this.findThis, { capture: true })
        ul.addEventListener('click', this.findTarget, { capture: true })
        // ul.addEventListener('click', this.findTarget, false)
    },
    /** end of editData() */


    defaultContent(item, i) {
        return `
            <li>
                ${item}
                <button type="button" class="btn"  data-id="${i}">
                    remove
                </button>
            </li>
        `
    },
    /** end of defaultContent(item, i) */

    render(template = `<ul>`) {
        const app = document.querySelector('#app')
        // console.log(app);

        this.data.forEach((item, i) => {
            template += this.defaultContent(item, i)
        });
        template += `</ul>`
        // console.log(template);
        app.innerHTML = template

        this.editData()
    },
    /** end of render() */



    init() {
        this.render()
    }
}
/** end of component{} */

// Main
component.init()
console.log('Hi');
