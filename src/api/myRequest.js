import axios from 'axios'

// axios.defaults.baseURL = 'https://console-mock.apipost.cn/app/mock/project/e99dd364-ce39-45c6-daaa-3c86af71853f'

const get = async (url, params = null) => {
    return (await axios.get(url, {params})).data
}

export {get}