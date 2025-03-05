import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
// const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

// let posts = {};
let numPosts = 0;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.get("/view", (req, res) => {
    
    // Client-side so no need to pass data
    res.render("view.ejs");
});

// app.post("/submit", (req, res) => {
//     const dateTitleContent = [];
//     numPosts++;
//     const postId = `${(req.body.title).replace(/\s+/g, '-')}_${numPosts}`;
//     var postDate = new Date().toDateString();
//     postDate = postDate.slice(0, 3) + ', ' + postDate.slice(4, postDate.length);
//     const postTitle = req.body.title;
//     const postContent = req.body.content;

//     // For development use.
//     console.log("Post ID: ", postId);
//     console.log("Date Posted: ", postDate);
//     console.log("Post Title: ", postTitle);
    
//     if (postId && postDate && postTitle && postContent){
//         dateTitleContent.push(postDate, postTitle, postContent);
//         posts[postId] = dateTitleContent;
//         res.redirect("/view")
//     }
//     else{
//         res.send('<p>Nothing to submit!</p><a href="/">Go home.</a>');
//     }
// });
