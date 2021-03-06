/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-01-31 15:25:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/doczrc.js
 */
export default {
  src: 'components',
  dist: 'doc-site', // 打包出来的文件目录名
  title: 'chicken-desgin', // 站点标题
  typescript: true, // 组件源文件是通过typescript开发，需要打开此选项
  scripts: {
    "docz:dev": "docz dev && gulp",
    "docz:build": "docz build",
    "docz:serve": "docz build && docz serve"
  },
};
