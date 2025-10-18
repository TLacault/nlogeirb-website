# NLog'Eirb Website

Official website for the NLog'Eirb competitive programming club at ENSEIRB-MATMECA.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions. The deployment process:

1. **Automatic Deployment**: Every push to the `main` branch triggers an automatic build and deployment
2. **Build Process**: The workflow installs dependencies, builds the project, and deploys to GitHub Pages
3. **Live Site**: The website will be available at `https://[username].github.io/nlogeirb-website/`

### Manual Deployment
If you need to deploy manually:
1. Run `npm run build` to create the `dist/` folder
2. Push the changes to the `main` branch
3. The GitHub Action will automatically handle the deployment

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
