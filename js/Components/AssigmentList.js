import assigment from "./Assigment.js";
export default {
    components: {
        'assigment': assigment
    },
    template: `
        <section v-show="assigments.length" class="mb-2">
                
                <h2 class="mb-2 font-bold">{{ title }}</h2>
                <ul>
                <assigment 
                    v-for="assigment in assigments" 
                    :key="assigment.id"
                    :assigment="assigment"
                    ></assigment>
                </ul>
                
            </section>` , 
    
    props: {
        title: {
            type: String,
            default : 'User List'
        }, 
        assigments:Array
    }
}