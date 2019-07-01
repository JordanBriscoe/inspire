

export default class Todo{
    constructor(data) {
        this._id = data._id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description
    }

    get Template(){
        if(this.completed == false){
        return `
        <div class="row">
            <div class="col-3">
                <ul>
                    <li> ${this.description} <button type="button" class="btn btn-primary btn-sm" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Finished?</button></li>
                </ul>
            </div>
        </div>
        `
        } 
        else{
        return `
        <div class="row">
            <div class="col-3">
                <ul>
                <button type="button" class="btn btn-primary btn-sm" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Finished?</button>
                    <li> ${this.description} <button type="button" class="btn btn-primary btn-sm" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button></li>
                </ul>
            </div>
        </div>
        `
        }
    }

}






    // _id: {type: String, required: true, unique: true }
    // completed: { type: Boolean, required: true, default: false},
    // user: { type: String, required: true },
    // //You will need to provide a description
    // description: { type: String, required: true},