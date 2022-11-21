import axios from "axios"

export const requestInterceptor = () => {
  axios.interceptors.request.use(
    (config: any) => {
      config.headers["apikey"] = `${process.env.REACT_APP_API_KEY}`      
      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )
}
