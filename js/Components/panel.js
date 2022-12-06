export default {
    template:
        `
            <div :class="{
           'p-4 border rounded-lg': true,
            'bg-white border-white-300 text-black' : theme == 'ligth',
            'bg-gray-700 border-gray-600 text-white' : theme == 'dark',
            
            }">

                <h2 class="font-bold" v-if="$slots.heading">
                   <slot name="heading"/> 
                 </h2>
                 <slot name="default"/>
            </div>
        ` , 
    props: {
        theme: { type: String, default: 'dark' }
    }

        
}