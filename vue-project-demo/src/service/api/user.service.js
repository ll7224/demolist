import ajax from '@/service/ajax'

export const login = (data) => ajax.post('/login', { data })

export const getUserInfo = () => ajax.get('/userinfo')

/* 在api目录下统一管理所有请求,方便管理，后期维护，同时也能跟后端的服务相对应
建立不同对应不同的模块的api请求 */
