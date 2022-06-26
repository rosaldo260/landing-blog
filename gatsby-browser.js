import './src/styles/global.css'

export const onRouteUpdate = ({ location }) => {
  const hash = document.querySelectorAll(`a[rel="${location.hash}"]`)[0]
  if (hash) {
    window.scrollTo({
      top: hash.offsetTop,
    })
  }
  return true
}
