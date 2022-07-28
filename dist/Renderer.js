class Renderer {
  constructor() {
    this.mainElemnt = $(".main");
    this.source = $("#first").html();
  }
  renderRecipes(recipes) {
    console.log(recipes);
    this.mainElemnt.empty();
    let templete = Handlebars.compile(this.source);
    let newHTML = templete({ recipes });
    this.mainElemnt.append(newHTML);
  }
}
