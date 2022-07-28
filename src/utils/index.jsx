/**
 * @author 强子
 * @func 根据path 判断是否在数组中
 * @params {path string}
 * @return boolean
 */

export const isPathPartlyExisted = (path) => {
    const arr = ['/alldetali'];
    // 任何情况 结果数组第二项都是arr里匹配的单项
    let pathRes = path.split('/')
    if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true
    return false
}

export const isPathCommunity = (path) => {
    const arr = ['/alldetali','/community','/storehouse', '/mine', '/storehouse/mall', '/search'];
    // 任何情况 结果数组第二项都是arr里匹配的单项
    let pathRes = path.split('/')
    if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true
    return false
}