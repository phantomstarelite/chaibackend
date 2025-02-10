require('dotenv').config()
const express = require('express')

const app = express()

const githubData = {
    "login": "phantomstarelite",
    "id": 123758451,
    "node_id": "U_kgDOB2Bncw",
    "avatar_url": "https://avatars.githubusercontent.com/u/123758451?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/phantomstarelite",
    "html_url": "https://github.com/phantomstarelite",
    "followers_url": "https://api.github.com/users/phantomstarelite/followers",
    "following_url": "https://api.github.com/users/phantomstarelite/following{/other_user}",
    "gists_url": "https://api.github.com/users/phantomstarelite/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/phantomstarelite/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/phantomstarelite/subscriptions",
    "organizations_url": "https://api.github.com/users/phantomstarelite/orgs",
    "repos_url": "https://api.github.com/users/phantomstarelite/repos",
    "events_url": "https://api.github.com/users/phantomstarelite/events{/privacy}",
    "received_events_url": "https://api.github.com/users/phantomstarelite/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Pratik Khumkar",
    "company": null,
    "blog": "",
    "location": "NAGPUR",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2023-01-27T16:18:54Z",
    "updated_at": "2025-02-07T14:04:52Z"
  }

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('pratik Khumkar')
} )

app.get('/login', (req,res) => {
    res.send("please log at phantom")
})

app.get('/chai', (req,res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.get("/gitcall", (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})