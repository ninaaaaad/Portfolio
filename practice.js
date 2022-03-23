

function moveCommand(direction){
    var where;
    switch(direction){
        case("forward"):
             where = "chal pudhe pudhe";
             break;
        case("backward"):
             where = "chal maghe maghe";
             break;
        case("ikde"):
             where = "chal ikde ikde";
             break;
        case("tikde"):
             where = "chal tikde tikde";
             break;
        default:
             where="Kuthe jaychay?";
             break;


    }
    return where;
    
}