import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}



// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    // let result: AxiosResponse = await axios.get(`http://jsonplaceholder.typicode.com/posts`);
    let result: AxiosResponse;
    axios.get('http://jsonplaceholder.typicode.com/posts',
        {
             proxy: {
                protocol: 'http',
                host: '10.9.5.140',
                port: 8080
             }
        }
    )
        .then(response => {
            let posts: [Post] = response.data;
            return res.status(200).json({
                message: posts
            });
        })
        .catch(error => {
//            console.log(error.response.data.error);
            console.log(error);
            return res.status(200).send('dudierror');
        })

};


// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    // let result: AxiosResponse = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);

    axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`,
        {
            proxy: {
                protocol: 'http',
                host: '10.9.5.140',
                port: 8080
             }
           
        }
    ) 
    .then(response => {
        let posts: [Post] = response.data;
        return res.status(200).json({
            message: posts
        });
    })
    .catch(error => {
        console.log(error.response.data.error);
        return res.status(500).send(error.message);
    })

   
};


// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req.params
    let id: string = req.params.id;
    // get the data from req.body
    let title: string = req.body.title ?? null;
    let body: string = req.body.body ?? null;
    // update the post
    let response: AxiosResponse = await axios.put(`http://jsonplaceholder.typicode.com/posts/${id}`, {
        ...(title && { title }),
        ...(body && { body })
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from req.params
    let id: string = req.params.id;
    // delete the post
    let response: AxiosResponse = await axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`);
    // return response
    return res.status(200).json({
        message: 'post deleted successfully'
    });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let title: string = req.body.title;
    let body: string = req.body.body;
    // add the post
    let response: AxiosResponse = await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
        title,
        body
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

export default { getPosts, getPost, updatePost, deletePost, addPost };
