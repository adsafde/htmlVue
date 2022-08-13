import {getCurrentInstance} from "vue";
import {useCounterStore} from "@/piniamain/main";

export function myFun() {
    const internalInstance = getCurrentInstance();
    const cookies = internalInstance.appContext.config.globalProperties.$cookies;

    function getCookie() {
        const a = () => {
            if (cookies.get("token") !== 'true') {
                cookies.set("token", "true");
                location.reload()
            }
            console.log(cookies.get("token"))
        };
        a()
    }

    const store = useCounterStore();
    return {getCookie, store};
}