import JsonP from 'jsonp';

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function(err, response) {
                if (response.info === 'OK') {
                    resolve(response.forecasts)
                } else {
                    reject('获取天气失败')
                }
            })
        })
    }
    



}


