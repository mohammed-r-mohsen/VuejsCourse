export default  {
    template: `
        <button :class="{
            
            ' border rounded px-5 py-2  disabled:cursor-not-allowed':true,
            'bg-blue-200 hover:bg-blue-400 ':type=='muted',
            'bg-red-200 hover:bg-red-400 ':type=='primary',
            'bg-purple-200 hover:bg-purple-400 ':type=='secandry',
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