function dada() {
    console.log("I am Dada");
    function papa() {
        console.log("I am Papa");
        function child() {
            console.log("I am child");
            
        }
        return child
    }
    return papa
    
}
dada()()()