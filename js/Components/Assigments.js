import AssigmentList from "./AssigmentList.js";
import NewAssigment from "./NewAssigment.js";
export default {
    components: {
        'assigment-list': AssigmentList,
        'new-assigment': NewAssigment,
    },
    template: `
            <section class="space-y-6">
                <assigment-list :assigments="filter.InProgress" title="In Progress"></assigment-list>

                <assigment-list :assigments="filter.Completed" title="Completed"></assigment-list>
                
               <new-assigment @add="add"></new-assigment>

            </section>
            ` ,
    data() {
        return {
            
            assigments: [
                { name: 'laravel task', complete: false, id: 1 },
                { name: 'vue task', complete: false, id: 2 },
                { name: 'js task', complete: false, id: 3 },
            ],
            
        }
    },
    computed: {

        filter() {
            return {
                InProgress: this.assigments.filter(a => !a.complete),
                Completed: this.assigments.filter(a => a.complete),
            }
        }
    },

    methods: {
        add(name) {
            this.assigments.push({
 
                name: name,
                complete: false,
 
                id: this.assigments.length + 1
 
            }); 
            
        }
    
    }
}