import AssigmentList from "./AssigmentList.js";
import NewAssigment from "./NewAssigment.js";
import Panel from "./panel.js";
export default {
    components: {
        'assigment-list': AssigmentList,
        'new-assigment': NewAssigment,
        'panel': Panel,
    },
    template: `
            <section class=" flex gap-8">
                <assigment-list :assigments="filters.InProgress" title="In Progress">
                    <new-assigment @add="add"></new-assigment>
                </assigment-list>

                
                
                <div v-show="showCompleted">
                
                    <assigment-list 
                        :assigments="filters.Completed" 
                        title="Completed" 
                        canHide
                        @toggle='showCompleted = !showCompleted'
                        >
                        <new-assigment @add="add"></new-assigment>
                    </assigment-list>
                
                </div>

            </section>

                <panel theme="ligth">
                    <template v-slot:default>
                        this is my default slot
                    </template>

                    <template v-slot:heading>
                        this is my heading slot
                    </template>
                </panel>
                
                <panel theme="dark">
                    <template v-slot:default>
                        this is my default slot
                    </template>

                    <template v-slot:heading>
                        this is my heading slot
                    </template>
                </panel>
            ` ,
    data() {
        return {
            
            assigments: [], 
            showCompleted : true , 
            
        }
    },
    computed: {

        filters() {
            return {
                InProgress: this.assigments.filter(a => !a.complete),
                Completed: this.assigments.filter(a => a.complete),
            }
        }
    },
    created() {
        fetch('http://localhost:3001/assigments')
            .then(response => response.json())
            .then(assigments => {
                this.assigments = assigments;
            });
    },

    methods: {
        add(name) {
            this.assigments.push({
 
                name: name,
                complete: false,
                id: this.assigments.length + 1 , 
                tag:'untaged'
            }); 
            
        }
    
    }
}