import {get} from "@/api/myRequest";
import {ref} from "vue";
import {reactive} from 'vue'

function elmnts() {
    const isDisplay = ref(false)
    const tableData = ref([])
    const formInline = reactive({
        region: '',
    })
    const urlNum = {
        '飙升榜': '62',
        '热歌榜': '26',
        '新歌榜': '27',
        '流行指数榜': '4',
        '喜力电音榜': '57',
        '腾讯音乐人原创榜': '52',
        '听歌识区榜': '67',
        '内地榜': '5',
        '香港地区榜': '59',
        '台湾地区榜': '61',
        '欧美榜': '3',
        '韩国榜': '16',
        '日本榜': '17'
    }
    const onSubmit = () => {
        isDisplay.value = true
        get(`api/music?name=${formInline.region}`)
            .then(data => {
                tableData.value = data[formInline.region]
                isDisplay.value = false
            })
    }
    return {isDisplay, formInline, urlNum, onSubmit, tableData}
}

export default elmnts