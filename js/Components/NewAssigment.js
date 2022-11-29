export default {
    template: `
    
         <form @submit.prevent="add">
                
                    <div class="border border-gray-600 text-black">
                        <input type="text" v-model="NewAssigment" placeholder="New Assigmnt......." class="p-2"/>
                        <button type="submit" class="bg-white border-l p-2">ADD</button>
                    </div>
                    
                </form>

    `,
    data() {
        return {
            NewAssigment:''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.NewAssigment);
            this.NewAssigment = ''; 
        }
    },
}