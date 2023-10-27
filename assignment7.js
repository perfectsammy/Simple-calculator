function doSomething (func,name)
{
    func(2);
    console.log(`${name} says "hello"` );
    doSomething(function(){
        console.log("hello");
    }, "bob")
}
