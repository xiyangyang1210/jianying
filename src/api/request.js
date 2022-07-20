import axios from 'axios'

// export const getCourse=()=>
//     axios.get('')

export const getCourse=()=>
    axios.get('https://www.fastmock.site/mock/758a51ea7ac094acd3f3de097e2da039/beers/course')

export const getCommon=()=>
    axios.get('https://www.fastmock.site/mock/758a51ea7ac094acd3f3de097e2da039/beers/common')

export const getHotKeywordsRequest=()=>
    axios.get('https://www.fastmock.site/mock/758a51ea7ac094acd3f3de097e2da039/beers/hotkey')