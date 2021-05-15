# Basic-Rest-API
A basic REST API that enables the CRUD operations.

To see the project in action : 
- Clone the repo
- Extract and open the project in an editor, I personally use VSCode.
- Make sure that node is installed in your system.
### type npm start
- Go to your browser, type localhost://5000
- You should see a message "hello from homepage".
- You're server is running now.

### open postman
- Create a new workspace 
- Create a collection and add a request.
- Select POST and  type in localhost://5000/users in the url bar.
- Move to the body section and create a raw json.
- for e.g., create a json with properties like name, lastname and age.
- Send the request.
- To see the posted request, refresh the localhost://5000 page and you can see a json object.
- Also, a GET request will show the details you posted through postman.
- A unique id is generated for every object, DELETE and PATCH request can be done with that id.
