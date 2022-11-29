export default  {
    template: `
        <button :class="{
            
            ' border rounded px-5 py-2  disabled:cursor-not-allowed mt-2':true,
            'bg-blue-600 hover:bg-blue-800 ':type=='muted',
            'bg-red-600 hover:bg-red-800 ':type=='primary',
            'bg-purple-600 hover:bg-purple-800 ':type=='secandry',
            'is-loading':processing , 
        
            }" :disabled="processing"> 
            <slot />    
        </button>
            ` ,
    props: {
        type: {
             type: String,
            default: 'primary'
        }, 
        
        processing: {
            type: Boolean, 
            default: false, // if the vlue true we cannot click n this component
        }
    },
    data() {
        return {
        
        }
    },
} 