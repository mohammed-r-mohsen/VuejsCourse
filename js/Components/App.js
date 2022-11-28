import AppButton from "./AppButton.js";
import Assigments from "./Assigments.js";

export default {
    components:
    {
        'app-button': AppButton,
        'Assigments': Assigments , 
    },
    template: `
        <Assigments></Assigments>
        <app-button type="muted" :processing="false"> Hi There</app-button>
    `,
    data() {
        return {
            greeting: 'hello world',
            active: true,
            buttoncolor: '',
        }
    },

    mounted() {
        setTimeout(() => {
            this.greeting = 'changed'
        }, 3000)
    },

    methods: {
        toggle() {
            this.buttoncolor = (this.active = !this.active) ? 'text-red' : 'text-green';
        },
    },
}