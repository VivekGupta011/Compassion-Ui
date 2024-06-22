var contentful = require('contentful')
const {space}=require("postcss/lib/list");

const client = contentful.createClient({
    // space: '2lromyppl56i',
    // accessToken: 'Dr2_P0QHZbou2zeR6K6ccXoikIUuhGjiYVnPw_NieC0',
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  export default client;