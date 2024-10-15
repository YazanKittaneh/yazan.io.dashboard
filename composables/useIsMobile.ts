import { ref } from 'vue'
import { useRequestHeaders } from '#app'

export function useIsMobile() {
  const isMobile = ref(false)

  if (process.server) {
    const headers = useRequestHeaders()
    const userAgent = headers['user-agent']
    isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  } else if (process.client) {
    isMobile.value = window.innerWidth < 768 // Adjust this breakpoint as needed
  }

  return isMobile
}
