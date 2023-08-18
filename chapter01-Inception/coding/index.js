const root = document.querySelector('body');


function createUnorderedList(){
    const listName = ['react.js','angular','vue'];
    const unorderedList = document.createElement('ul');
    unorderedList.classList.add("list-lib-framework");
    listName.forEach((name)=>{
        let liItem = document.createElement('li');
        liItem.classList.add('list-item');
        liItem.innerText = name;
        unorderedList.append(liItem);
    });
    //console.log(unorderedList);
    return unorderedList;

}
function createSection(root){
    const sectionElement = document.createElement('section');
    
    sectionElement.classList.add("js-section");
    const h1Element = document.createElement('h1');
    h1Element.classList.add("heading");
    h1Element.innerText = "Javascript library and framework";
    sectionElement.append(h1Element);
    const unorderedListFinal = createUnorderedList();
    sectionElement.append(unorderedListFinal);
    root.append(sectionElement);
}
createSection(root);