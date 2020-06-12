const bcrypt = require('bcrypt')

module.exports = {
  
  register: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body

    const existingUser = await db.check_user(username)

    if (existingUser[0]){
      return res.status(409).send('User already exists')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = await db.register_user([username, hash])

    req.session.user = {
      userId: newUser[0].user_id,
      username: newUser[0].username
    }

    res.status(200).send(req.session.user)
  },

  login: async (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body

    const user = await db.check_user(username)
    if (!user[0]){
      return res.status(400).send('User no exist')
    } else {
        const authenticated = bcrypt.compareSync(password, user[0].password)
        if (authenticated) {
          req.session.user = {
            user_id: user[0].user_id,
            first_name: user[0].first_name,
            last_name: user[0].last_name,
            profile_pic: user[0].profile_pic,
            birthday: user[0].birthday
          }
          console.log(req.session.user)
          res.status(200).send(req.session.user)
        } else {
          res.status(403).send('Incorrect login credentials')
        }
    }
  },

  // getPosts: async (req, res) => {
  //   const db = req.app.get('db')
  //   const {userposts, search} = req.body

  //   const userposts = await db.get_post(search)
  //   if (userposts[0]){
  //     req.session.userposts = {
  //       title: userposts[0].title,
  //       text: userposts[0].text,
  //       date: userposts[0].date,
  //       first_name: userposts[0].first_name,
  //       last_name: userposts[0].last_name,
  //       profile_pic: userposts[0].profile_pic
  //     }
  //     res.status(200).send(req.session.user)
  //   } else {
  //     res.status(403).send("Couldn't find posts")
  //   }
  //   // else {

  //   //   }
  // },


}