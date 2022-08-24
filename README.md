## Image_Processing_API

This project is part of the Udacity Full-Stack Javascript Nanodegree

It is using express server to load images from the folder and Resize the image and add it to new folder on the disk if it doesn't exist.

### Technologies used

* Typescript
* Jasmine
* Express
* Prettier
* ESlint
* Sharp --> npm dependency used for resize

### How does the app work?

```http
  GET /api/imageAPI/?filename={filename}&height={height}&width={width}
```

filename | string --> filname of the image that you want to resize in the folder
height   | number --> the height of the resized image you want
weight   | number --> the width of the resized image you want


## Scripts

Install packages
```bash
  npm run install
```

Run prettier
```bash
  npm run prettier
```

Start the dev server
```bash
  npm run dev
```

Build the project
```bash
  npm run build
```

Run the application
```bash
  npm run start
```

## Testing

Run tests
```bash
  npm run test
```
