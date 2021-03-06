/**
 * @author yy
 * @func 根据path 判断是否在数组配置中
 * @param {*} path string
 * @returns boolean 
 */
export const isPathPartlyExisted=(path)=>{
    const arr = [ '/coursedetail','/search','/wode'];
    // 任何情况 结果数组第二项都是arr里匹配的单项
    let pathRes = path.split('/')
    if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true;
    return false
}