import axios from 'axios'
import {rootPath} from './config';

const Get = (path)=> {
    const promise = new Promise((resolve,reject) => {
        axios.get(`${rootPath}/${path}`)
            .then((res)=>{
                return resolve(res.data)
            },(err) =>{
                reject(err)
            })
    })
    return promise;
};

export default Get;