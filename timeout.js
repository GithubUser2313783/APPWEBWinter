const b = ()=> {
    setTimeout(()=> {
        console.log ("fonction b");
    }, 60000 );
};

const c= ()=> {
    console.log ("fonction c")
}

b();
c();