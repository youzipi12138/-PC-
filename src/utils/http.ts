import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
// import { ElNotification } from 'element-plus'
// import NProgress from '@/config/nprogress'

const instance: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_API,
  baseURL:'http://localhost:3000',
  timeout: 10000,
  withCredentials: true,//跨域请求时带上cookie
})

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 开启进度条
    // NProgress.start()
    if (config.params === undefined) {
      config.params = {}
    }
    // 添加或修改params
    Object.assign(config.params, {
      timestamp: Date.now(),
      realIP: '116.25.146.177',
    })
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response

    // 进度条结束
    // NProgress.done()
    return data
  },
  (error) => {
    // ElNotification({
    //   title: `错误代码：${error.response.data.code || '网络错误'}`,
    //   message: error.response.data.message || '网络太拥挤，请稍候再试！',
    //   type: 'error',
    // })
    // // 响应错误时也结束进度条
    // NProgress.done()
    return Promise.reject(error)
  }
)

// 封装get方法
export const httpGet = <T>(url: string, params?: object): Promise<T> =>
  instance.get(url, { params })

// 封装post方法
export const httpPost = <T>(
  url: string,
  data?: object,
  header?: object
): Promise<T> => instance.post(url, data, header)

// 封装upload方法
export const httpUpload = <T>(
  url: string,
  formData: FormData,
  header?: object
): Promise<T> => {
  return instance.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      ...header,
    },
  })
}



//封装get post upload请求是为了 让要从axios 切换到fetch时，可以解耦。 封装的get和post请求相当于中间层。
