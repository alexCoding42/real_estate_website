# Real estate website

<img width="1649" alt="Screenshot 2023-09-02 at 21 40 02" src="https://github.com/alexCoding42/real_estate_website/assets/56698920/9d48e9d4-c80a-46c7-b721-6c0524201645">

## Run locally

⚠️ First add the environment variables in _server_ and _client_ folder.

Take example from the _env.example_ files. You need a [Auth0](https://auth0.com/) account to get the VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID and ISSUER_BASE_URL variable values.

A [Cloundinary](https://cloudinary.com/) account to get the VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_UPLOAD_PRESET variable values.

And a [MongoDB](https://www.mongodb.com/) account yo get the DATABASE_URL.

You can use whatever PORT value you want, default is 8000 usually for Node.js applications.

Finally, from the root of the project run

```
cd server/
yarn start
```

```
cd client/
yarn dev
```

And you should be able to see the website on `http://localhost:3000`

## Run with Docker

Everything has been configured for you. Just run

```
docker run -d -p 3000:80 alexcoding2065/real-estate-website
```

If you want to delete the container when you stop it, to gain more space, run

```
docker run -d --rm -p 3000:80 alexcoding2065/real-estate-website
```

It should pull the image from the Docker hub.

If you want to customize the name of your running container, run

```
docker run -d -p 3000:80 --name <name-of-your-container> alexcoding2065/real-estate-website
```
