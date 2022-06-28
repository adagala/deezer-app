# Deezer App

Deezer App is React/Node App that explores the Deezer API. Users can search for
tracks and also view top tracks and albums from artists.

## Run Locally

Clone the project

```bash
  git clone https://github.com/adagala/deezer-app.git
```

Go to the project directory

```bash
  cd deezer-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Run Functions Locally

Go to the project functions directory

```bash
  cd deezer-app/functions
```

Install dependencies

```bash
  npm install
```

Start the emulator

```bash
  npm run serve
```

## Demo

https://deezer-app-c8dc8.web.app/

## API Reference

### Environment

#### Cloud Functions

```http
  https://us-central1-deezer-app-c8dc8.cloudfunctions.net
```

#### Cloud Functions Emulator

```http
  http://localhost:5001/deezer-app-c8dc8/us-central1
```

#### Search for tracks

```http
  GET /search/${query}
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `query`   | `string` | **Required**. Track you are searching for |

#### Get artist

```http
  GET /artist/${id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of artist to fetch |

#### Get artist's top tracks

```http
  GET /artist/${id}/top
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Required**. Id of artist to fetch top tracks |

#### Get artist's albums

```http
  GET /artist/${id}/albums
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Required**. Id of artist to fetch albums |

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Firebase, Node, Express
