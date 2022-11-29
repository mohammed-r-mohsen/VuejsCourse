export default {
    template: `

                <li class="p-2">
                    <label class="p-2 flex justify-between item-center ">
                        {{ assigment.name }}
                        <input type="checkbox" v-model="assigment.complete" class="ml-2">
                    </label>
                  </li>
                  ` ,
    props: {
        assigment:Object , 
    }
}