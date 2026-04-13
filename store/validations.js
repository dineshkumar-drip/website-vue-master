import { helpers } from 'vuelidate/lib/validators'

export const safeText = helpers.regex(
  'safeText',
  /^[\w\s\/\(\)\[\]\{\},\-.|&']{0,255}$/
)

export const safeEmail = helpers.regex(
  'safeEmail',
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
)

export const safeIec = helpers.regex('safeIec', /^[a-zA-Z0-9]{10}$/i)
