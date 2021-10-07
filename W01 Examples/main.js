/*
On page load:  
    Find Data in api https://pokeapi.co/api/v2/type/
    Filter shadow and unkown from the list 
    Display type name and URL
    Attach event listener to the list 
On click:
    get data-url from the clicked type
    fetch the pokemon list
    display the pokemon list
*/
function convertToJson(res){
    if(res.ok) {
        return res.json();
    } else {
        console.log("Something went wrong");
    }
}
/*function declaration*/
function getDataAndDoSomething(url, action1) {
    fetch(url).then(convertToJson).then((data)=> {
        //do stuff
        action1(data);
    })
}  
function filterResults(list){
    return list.filter((item) => item.name != "unknown" && item.name != 'shadow')
}
function renderTypeList(list) {
    list = list.results
    const typeListElement = document.querySelector('#typeList');
    const newList = filterResults(list);
    list.forEach((item) => {
        const newLi = document.createElement('li');
        newLi.innerText = item.name;
        newLi.setAttribute('data-url', item.url);
        typeListElement.appendChild(newLi);
    });
    const htmlList = newList.map(
        (item)=> `<li data-url = "${item.url}">${item.name}</li>`
        );
    typeListElement.innerHTML += htmlList.join("");
    typeListElement.addEventListener('click',handleTypeClick);
}
function handleTypeClick(event){
    console.log(event.target);
    const url = event.target.dataset.url;
    getDataAndDoSomething(url, renderPokemonList);
}
function renderPokemonList (list) {

}
getDataAndDoSomething("https://pokeapi.co/api/v2/type/", renderTypeList);