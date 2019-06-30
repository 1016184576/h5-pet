//- 通用服务请求路径头
export const isDev = () => process.env.NODE_ENV !== "production";

export const development = process.env.NODE_ENV === 'development';

export const server_base_url = isDev() ? 'https://www.easy-mock.com/mock/5cbeaf9ced7cba73aa79331f/pet/' : ''
//export const server_base_url = isDev() ? '' : ''

export const resource = 'h5';

// 个人信息存储key
export const frontLoginKey = "petkey";


export const appName = '宠乐吧'