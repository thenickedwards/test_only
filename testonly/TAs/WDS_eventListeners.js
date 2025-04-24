const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
    'click', 
    e => {
        // // Will console log click event (lots of attribs)
        // console.log(e);
        // // Will console lof element clicked
        // console.log(e.target);
    
        console.log("Grandparent 1")  

    }, 
    {capture: true} 
)

parent.addEventListener('click', e => {    
    console.log("Parent 1")
})

child.addEventListener('click', e => {    
    console.log("Child 1")
})

document.addEventListener('click', e => {    
    console.log("Document 1")
})