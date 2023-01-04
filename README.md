# OpenAI Art Gallery
An image generation app that uses OpenAI's DALL-E API. 

## Usage

Rename the `example.env` file to `.env`.

Please generate an API key by visiting [OpenAI](https://beta.openai.com/) and creating an account.
Once you have this, add it to the `.env` file.

Install dependencies

```bash
npm install
```

Run server

```bash
npm start
```

Visit `http://localhost:5000` in your browser.

The endpoint is at `POST http://localhost:5000/openai/generateimage`.
