import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = 'https://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    // 2. 携带token
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  ({ data }) => {
    // 3. 处理业务失败
    // 4. 摘取核心响应数据
    if (data.code === 0) {
      return data
    }
    ElMessage.error(data.message || '服务异常')
    return Promise.reject(data)
  },
  (err) => {
    // 5. 处理401错误
    if (err.response?.status === 401) {
      router.push('/login')
    }
    ElMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
