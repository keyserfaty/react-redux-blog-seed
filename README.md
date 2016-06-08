## react-redux-blog-seed

This is a small seed for a React/Redux project. It is also an experiment on how to build a React project with a better structure. A blog was used for the example to keep it simple.

## Installation
To get going you just need to:

    npm install
    npm start

App will run from `http://localhost:8080`

## Structure explanation
The project is divided into two main folders: `components` and `state`.

When an app starts to scale is usually hard to keep the actions and reducers of the app component or view related because some components start to interact with actions and reducers from other components. Because of this, the state of the app was kept in a separate folder and the files inside of it try to reproduce the structure of the actual app `state`. This way things are easy to find and to work with.

    .state
    ├── Entities
    │ ├── posts
    │ ├── tags
    ├── View

Something similar happens to components when an application starts to grow. If we create a component for every single view we have we suddenly start having lots of repeated code everywhere. Having a separate component for every view is ok but to let an application scale well we need to keep every UI element of our app in one place. This way, the moment we need to add a view to our app all we need to do is to stick together some of those UI components into a view. An example from the `Post` view:

```javascript
{/* from src/components/views/Post.jsx */}

<div className="box">
    <h3>Add a new Post</h3>
    <div className="box-inner">
      <SmallInput
        placeholder="Add a title..."
        name="title"
        value={title}
        onChange={onChange}
      />

      <LargeTextarea
        placeholder="Add some content..."
        name="content"
        value={content}
        onChange={onChange}
      />

      <SmallButton
        value="Publish"
        onClick={onPublishClick}
      />
</div>
```

Because of this, the `components` folder is divided into to main folders: `components` and `views`. `components` is where we should keep all our UI elements (and by UI elements I really mean that: button, form, text-area, etc...) and `views` is where we should keep that: the views of our app.


## WIP
- [x] Add propTypes
- [x] Add proper routing
- [ ] Add normalizer to normalize the posts coming from the requests
- [ ] Add testing
- [ ] Keep every sass file related to a UI component


## License

Released under The MIT License.