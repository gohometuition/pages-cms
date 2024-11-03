import { defineLayout } from '@page/builder'

export default defineLayout({
  name: 'default',
  setup() {
    return {
      render() {
        return (
          <>
            <nav>Navigation goes here</nav>
            <main>
              <slot />
            </main>
            <footer>Footer goes here</footer>
          </>
        )
      }
    }
  }
})
