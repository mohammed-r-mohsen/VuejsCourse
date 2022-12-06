export default {
    template: `
        <div class="flex gap-2">
                    <button 
                    class="border rounded px-1 py-px text-xs" 
                    @click="$emit('update:modelValue' , tag)" v-for="tag in tags" 
                    :class="{
                        'border-blue-500 text-blue-500' : tag==modelValue
                    }"
                    >{{ tag }}</button>
                </div>   
    ` , 
    props: {
        intialtags: Array,
        modelValue: String,
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.intialtags.map(a => a.tag))];
        }
    }
}