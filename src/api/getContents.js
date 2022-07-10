import axios from 'axios'

const getContents = axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?&sort=newest&api-key=3LElvbg68Rv24qIIZ7MV6r3ZrK8p1n4X`)

console.log('when app is started ', getContents)

export default {getContents}
