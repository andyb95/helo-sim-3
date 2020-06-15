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
      user_id: newUser[0].user_id,
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
          // console.log(req.session.user)
          res.status(200).send(req.session.user)
        } else {
          res.status(403).send('Incorrect login credentials')
        }
    }
  },

  getAll: async (req, res) => {
    const db = req.app.get('db')

    const posts = await db.get_all_posts()
    if(posts.length){
      console.log(posts)
      res.status(200).send(posts)
    } else {
      res.sendStatus(404)
    }
  },

  getPosts: async (req, res) => {
    const db = req.app.get('db')
    const {search} = req.params

    const userposts = await db.get_post(search)
      if (userposts.length){
        req.session.userposts = {
          first_name: userposts[0].first_name,
          last_name: userposts[0].last_name,
          profile_pic: userposts[0].profile_pic,
          title: userposts[0].title,
          date: userposts[0].date,
          text: userposts[0].text,
          post_img: userposts[0].post_img,
        }
        res.status(200).send(req.session.userposts)
      } else {
          res.sendStatus(404)
        }
  },

  newPost: async(req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.params
    const {title, text, date, post_img} = req.body
    
    const newPost = await db.new_post(user_id, title, text, date, post_img)
      if(newPost[0]){
        req.session.newPost = {
          user_id: newPost[0].user_id,
          title: newPost[0].title,
          text: newPost[0].text,
          date: newPost[0].date,
          post_img: newPost[0].post_img,
        }
        res.status(200).send(req.session.newPost)
      } else {
        res.sendStatus(404)
      }
  },


}