// #Exercise-1

// const express = require('express');
// const app = express();

// app.use(express.json()); 


// let posts = [
//     { id: 1, title: 'Hello internet', content: 'whatsuuuup!' },
//     { id: 2, title: 'Exercise-1', content: 'I am fine today' }
// ];


// app.get('/posts', (req, res) => {
//     res.status(200).json(posts);
// });



// app.get('/posts/:id', (req, res) => {
//     const post = posts.find(p => p.id === parseInt(req.params.id));
//     if (!post) return res.status(404).send('Post not found.');
//     res.json(post);
// });



// app.post('/posts', (req, res) => {
//     const { title, content } = req.body;
//     const newPost = { id: posts.length + 1, title, content };
//     posts.push(newPost);
//     res.status(201).send(newPost);
// });



// app.put('/posts/:id', (req, res) => {
//     const post = posts.find(p => p.id === parseInt(req.params.id));
//     if (!post) return res.status(404).send('Post not found.');

//     const { title, content } = req.body;
//     post.title = title;
//     post.content = content;
//     res.send(post);
// });



// app.delete('/posts/:id', (req, res) => {
//     const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
//     if (postIndex === -1) return res.status(404).send('Post not found.');

//     const deletedPost = posts.splice(postIndex, 1);
//     res.send(deletedPost);
// });


// app.use((req, res) => {
//     res.status(404).send('Resource not found');
// });


// const PORT = 3002;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



