import { defineLayout } from '@page/builder'

export default defineLayout({
  name: 'home',
  setup(props) {
    return {
      render() {
        return (
          <>
            <nav>Navigation goes here</nav>
            
            {/* Hero Section */}
            <section>
              <h1>{props.hero.title}</h1>
              <p>{props.hero.subtitle}</p>
              <div>
                {props.hero.buttons.map((button) => (
                  <a href={button.url}>{button.text}</a>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section>
              <h2>{props.features.title}</h2>
              <div>
                {props.features.items.map((feature) => (
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
            </section>

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
