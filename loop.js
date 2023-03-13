var odd = 0, even = 0;

while(odd<25){
    document.write(((odd*2)+1) + ", ");
    odd++ 
    if(odd==25){
        document.writeln(((odd*2)+1) + "<br>");   
    }
}

do{
    document.write(((even*2)+2) + ", ");
    even++
    if(even==24){
        document.writeln(((even*2)+2) + "<br>");   
    }
}while(even<24)

for(var doubel = 1; doubel < 4096; doubel = doubel*2){
    document.write(doubel + ", ");
    if(doubel==2048){
        document.writeln(doubel*2 + "<br>");   
    }
}