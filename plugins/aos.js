import AOS from 'aos'

export default ({ app }, inject) => {
  app.AOS = new AOS.init({
    easing: 'ease-in-out-sine', // default easing for AOS animations
    duration: 600, // values from 0 to 3000, with step 50ms
    delay: 0 // values from 0 to 3000, with step 50ms
  })
}
