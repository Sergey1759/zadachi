function Zadacha6(rik,month,day) {

    var sumrik;
    sumrik = (rik - 1900)*365;

    for (var i = 1900; i < rik-1; i++)
        if (i % 4 == 0)
        {
        sumrik = sumrik + 1;
        }


    if (rik == 1900){
        sumrik = 0;
    }

    var summonth;

    var a,b,c,d,e,f,g,h,k,l,m,n;
    a = 31;
    b = 28;
    c = 31;
    d = 30;
    e = 31;
    f = 30;
    g = 31;
    h = 31;
    k = 30;
    l = 31;
    m = 30;
    n = 31;

switch (month) {
   case 1:
       summonth = 0;
       break;
    case 2:
        summonth = a;
        break;
    case 3:
        summonth = a+b;
        break;
    case 4:
        summonth = a+b+c;
        break;
    case 5:
        summonth = a+b+c+d;
        break;
    case 6:
        summonth = a+b+c+d+e;
        break;
    case 7:
        summonth = a+b+c+d+e+f;
        break;
    case 8:
        summonth = a+b+c+d+e+f+g;
        break;
    case 9:
        summonth = a+b+c+d+e+f+g+h;
        break;
    case 10:
        summonth = a+b+c+d+e+f+g+h+k;
        break;
    case 11:
        summonth = a+b+c+d+e+f+g+h+k+l;
        break;
    case 12:
        summonth = a+b+c+d+e+f+g+h+k+l+m;
        break;



}
if ((month > 2) && (rik %  4 ==0)) {
    summonth = summonth+1;
}
var sum; sum = summonth + sumrik + day ;
    return sum;
}




Zadacha6(1975,2,21);
27445
Zadacha6(1975,1,26);
27419
Zadacha6(2005,11,24);
38679
Zadacha6(1998,12,27);
36155
Zadacha6(2004,2,21);
38037
Zadacha6(1973,12,27);
27024