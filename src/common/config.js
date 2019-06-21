//- 通用服务请求路径头
export const isDev = ()=>process.env.NODE_ENV !== "production";

export const development = process.env.NODE_ENV === 'development';

export const server_base_url = isDev() ? "http://203.156.235.194:8088/airbird-app-server-front/":'https://www.feiniaoshangcheng.com/airbird-app-server-front/'

export const resource = 'h5';

// 个人信息存储key
export const frontLoginKey = "petkey";


export const appName = '宠乐吧'