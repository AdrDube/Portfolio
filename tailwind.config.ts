import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    extend: {
      animation: {
        'ping': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    }
  }
}
