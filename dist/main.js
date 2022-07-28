let render = new Renderer()
const fetchRecipe = function () {
    let input = $("#ingredient").val()
   
    $.get(`recipes/${input}`, function (item) {
       render.renderUser(item)
    })
   
} 
