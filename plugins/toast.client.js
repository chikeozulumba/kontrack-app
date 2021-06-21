import Vue from 'vue'
import Notie from 'notie'
import 'notie/dist/notie.min.css'

Vue.prototype.$toast = (props) => {
  const {
    position = 'bottom',
    stay = false,
    time = 3,
    type = 'success',
  } = props
  return Notie.alert({
    position,
    stay,
    time,
    type,
    ...props,
  })
}
