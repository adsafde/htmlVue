import {ref} from "vue";
import {get} from "@/api/myRequest";

const user = ref('')
get('/api/data/1').then(res => {
        // console.log(res);
        user.value = res
    }
)

const userTwo = ref('')
get('/api/data/2').then(res => {
        // console.log(res);
        userTwo.value = res
    }
)
const userThree = {
    name: 'my name is fect',
    age: 'I am 25 years old',
    city: 'I live in London',
    phone: 'I have a phone number'
}

const name = ref('dongyiming');
export default user;
export {userTwo, userThree, name};