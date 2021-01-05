/**
 * @api 接口统一处理
 */
let baseUrl = `/weimi/index/`;

// 首页
/**
 * @desc 获取官网导航栏接口(GET)
 */
export const GET = `${baseUrl}getPhoneCode`;

/**
 * @desc 获取所有信息
 */
export const GETINDEX = `${baseUrl}content/getIndex`;

/**
 * @desc 获取推荐位
 */
export const GETRECOMMEND = `${baseUrl}content/getRecommend`;

//媒体广告
/**
 * @desc 媒体公告分页展示(POST)
 */
export const GETNEWS = `${baseUrl}content/getNews`;

/**
 * @desc 根据内容ID获取内容(GET)
 */
export const GETCONTENT = `${baseUrl}content/getContent`;
/**
 * @desc 下载白皮书
 */
export const DOWNBAIPISHU = `${baseUrl}downBaiPishu`;
