## react-redux-blog-seed

This is a small seed for a React/Redux project and it is also an experiment on how to build a React project with a better structure. A blog was used for the example to keep the structure simple.

## Installation
To get going you just need to:

    npm install
    npm start

App will run from `http://localhost:8080`

## Structure explanation
The project is divided into two main folders: `components` and `state`. The aim was to have a very clear separation of concerns where the files that were used across the whole app would be visible to every component.

As the most components tend to interact with the state of the app (i.e. the actions and reducers) the state was kept in a separate folder where the actions and reducers wouldn't have to be component or view specific. Because of that the state folder reproduces the structure of the actual app state:

    .state
    ├── Entities
    │ ├── posts
    │ ├── tags
    ├── View

On the other hand the components folder is divided into two separate folders: `components` and `views`. The idea was to keep every UI element in one place (i.e. the components folder) and to create the components related to a specific view inside the views folder, by sticking together UI elements from the components folder:

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

## WIP
[ ] Add normalizer to normalize the posts coming from the requests.

[ ] Add mocha.

[ ] Keep every sass file related to a UI component


## License

Released under The MIT License.