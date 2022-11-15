
let moduleName = './exportInES6.js' 

if(true){
    import(moduleName)
    .then(( module) => {
       console.log(module)
    }) 
}