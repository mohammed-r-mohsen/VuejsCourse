import assigment from "./Assigment.js";
import AssigmentTag from "./AssigmentTag.js"; 
export default {
    components: {
        'assigment': assigment, 
        'AssigmentTag':AssigmentTag
    },
    template: `
        <section v-show="assigments.length" class="mb-2 space-y-6 bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <div class="flex justify-between items-start">
              
                    <h2 class="mb-2 font-bold">
                    {{ title }}
                    <span>({{assigments.length}})</span>
                    </h2>
                     <button v-show="canHide" @click="$emit('toggle')">&times;</button>

            </div>
                <!--    
                    <AssigmentTag 
                        :intialtags="assigments"
                        @change = "currentTag = $event"
                    />
                    
                    -->
                    
                    
                <AssigmentTag 
                v-model="currentTag"
                :intialtags="assigments"
                />
               
                <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                
                <assigment 
                    v-for="assigment in FilterAssigments" 
                    :key="assigment.id"
                    :assigment="assigment"
                    ></assigment>
                    <slot />
                </ul>

                
            </section>` , 
    
    props: {
        title: {
            type: String,
            default : 'User List'
        }, 
        assigments: Array, 
        canHide:{type:Boolean , default: false}
    },
    data() {
        return {
            currentTag: 'all', 
        }
    },
    computed: {
        FilterAssigments() {
           return  (this.currentTag == 'all') ? this.assigments : this.assigments.filter(a => a.tag == this.currentTag);
        
        },
        
     }
}  