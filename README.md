# Shooooort
The link shortener with a long name. Powered by React.

## Scripts
> Before running the following commands, make sure to have Node.js installed and to `npm install` dependencies.

### Start development server
```
npm start
```
Go to `localhost:3030`!

### Run tests
```
npm test
```

### Build for production
```
npm run build
```

## Tech stack
- React
- Babel
- Webpack
- [ava](https://github.com/avajs/ava)
- [Enzyme](https://github.com/airbnb/enzyme)
- [axios](https://github.com/mzabriskie/axios)

## Notes
### Application structure
If this app were more complex (with routes and a complex component hierarchy), I'd follow a [folder structure like this](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346), because it really scales well for large applications.

### State management
I was considering Redux, but I felt it was too much for this little project.

So React's state is used instead. **State important to the entire application** goes into AppContainer. **Trivial state** is just kept in its own component.

### Styles
This one was written pretty fast. Not the best for scalability and maintenance.

Why? Mainly because the stylesheet organization isn't enough for real-world projects. In a large project, CSS would need to be modular, and stuff like colors and font sizes would be stored in variables in order to keep them consistent throughout the application.

[BEM methodology](http://getbem.com/introduction/) was adopted for this project.

### Web Storage
User's shortened URLs are all saved using Local Storage API.

### Design
I'm a very detail-oriented person, but I couldn't be so attached on the details for this project. So, in order to feel better with myself (hahaha!), I need to say that I recognize completely that some design aspects of the application, like Responsive Design, could be improved.

### Dependencies
Some dependencies listed in `package.json` are not being used, such as Enzyme and velocity-react. This is because I was planning to use them, but didn't find the time. Maybe in the future! :P

**Update (23 January, 8 PM)**: now I'm using velocity-react! :sunglasses:
**Update (23 January, 8:40 PM)**: Enzyme is also being used! No unused dependencies anymore :sunglasses:

### Final words
Creating this app was pretty funny! :-)
