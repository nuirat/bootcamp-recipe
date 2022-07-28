let render = new Renderer()
const fetchRecipe = function () {
    let input = $("#ingredient").val()
   
    $.get(`recipes/${input}`, function (recipes) {
       render.renderRecipes(recipes)
    })
   
} 
$('.main').on('click','img',function(){
alert($(this).closest('.recipe').find('ul li:first-child').html()
)
})
