var sum = 10 + 0;

console.log(sum);

// KALAN BULMA
// Bu operatör genellikle bir sayının tek mi yoksa çift mi olduğunu belirlemek için kullanılır.

var remainder;
remainder = 11 % 3;
console.log(remainder);

// ARTIRILMIŞ TOPLAMA İLE BİLEŞİK ATAMA
var a = 3;
var b = 17;
var c = 12;

// 1. yol
a = a + 12;
b = 9 + b;
c = c + 7;

// 2.yol
a += 12; // Bu ifade a = a + 12'ye eşittir.
b += 9   // Bu ifade b = b + 9'ye eşittir.
c += 7;  // Bu ifade c = c + 7'ye eşittir.

console.log(a);
console.log(b);

// ÇIKARMA VERSION

a = a - 6;
a -= 6;

b = b - 1;
b -= 1;

// ÇARPMA VERSION

a = a * 5;
a *= 5;

// BÖLME VERSION

a = a / 2;
a /= 2;

// DECLARE STRING VARIABLES

var firstName = "Bartu";
var lastName = "Akdoğan";

// STRINGLERDE GERCEK ALINTILARDAN KAÇMAK(ESCAPING LITERAL QUOTES IN STRINGS)

var myStr = "I am a \"double quoted \"string inside \"double quotes"
// tırnak önüne bir \ koyarak alıntı yapabiliriz,yani " işareti stringin bittiği anlamına değil alıntı anlamına gelmiş olur.
console.log(myStr)

// TEK TIRNAKLI STRINGLERDEN ALINTI YAPMA(QUOTING STRINGS WITH SINGLE QUOTES)
var myStr = '<a href="http://www.example.com\" target=\"_blank\">Link</a>';
// eğer bactick kullanırsak hem çift tırnak hem de tek tırnak kullanabiliriz.
var myStr = `'<a href="http://www.example.com\" target=\"_blank\">Link</a>';`
console.log(myStr);

// ESCAPE SEQUENCES
/** 
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
**/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

// STRINGLERİ PLUS OPERATÖRÜ İLE BİRLEŞTİRME(CONCATENATING STRINGS WITH PLUS OPERATOR)
var ourStr = "I come first." + "I come second.";
console.log(ourStr);
var myStr = "This is the start." + "This is the end.";
console.log(myStr);

// STRINGLERİ ARTI EŞİTTİR OPERATÖRÜ İLE BİRLEŞTİRME(CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR)
var ourStr = "I come first.";
ourStr += "I come second.";
console.log(ourStr);

// STRINGLERİ DEĞİŞKENLERLE OLUŞTURMA(CONSTRUCTING STRINGS WITH VARIABLES)
var ourName = "Bartu Akdoğan";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr);

// STRINGLERE DEĞİŞKENLER EKLEME(APPENDING VARIABLES TO STRINGS)
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

// FIND LENGTH OF STRING
var firstNameLength = 0;
var firstName = "Melisa";
firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Akdoğan";
lastNameLength = lastName.length;

console.log(firstNameLength,lastNameLength);

// INDEX NUMBER ILE KACINCI KARAKTER OLDUGUNU BULMA
var firstLetterOfFirstName = "";
var firstName = "Melisa";

firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName);

// STRING DEĞİŞMEZLİĞİ(STRING IMMUTABILITY)
var myStr = "Jello World";

myStr[0] = "H";  // this is an error!

// STRING'IN n'İNCİ KARAKTERİNİ BULMA
var firstName = "Melisa";
var secondLetterOfFirstName = firstName[1];

// STRING'IN SON KARAKTERİNİ BULMA
var firstName = "Bartu";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

// WORD BLANKS(KELİME BOŞLUKLARI)
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."; 
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

// DİZİLERLE BİRDEN FAZLA DEĞER SAKLAYIN(STORE MULTIPLE VALUES WITH ARRAYS)
// Diziler birkaç veri parçasını tek bir yerde saklamanıza izin verir.
var ourArray = ["John", 23];

// NESTED ARRAYS(İÇ İÇE DİZİLER)

// ! Dizi içinde dizi varsa buna iç içe dizi denir.

var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Jordan", 23], ["Kobe", 24]];

// ACCESS ARRAY DATA WITH INDEXES

var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// MODIFY ARRAY DATA WITH INDEXES
var ourArray = [18,64,99];
ourArray[1] = 45;  // array içinde index numarası 1 olan 64 elemanı yerine 45 yazılır.

// ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES(INDEXLERLE ÇOK BOYUTLU DİZİLERE ERİŞİN)
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[0][0];  // [1,2,3] dizesi içindeki 1 elemanını seçer.
var myData = myArray[3][0][1];  // 11 i yazdırır.
console.log(myData);

// push() ile Dizileri Yönetin

// push() fonksiyonu ile bir dizinin sonuna verileri sabitleyebilirsiniz.

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);

// pop() ile Dizileri Yönetin

// pop() ile bir diziden bir ögeyi kaldırabilirsiniz.

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

console.log(removedFromOurArray);
console.log(ourArray);

// shift() ile Dizileri Yönetin
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]
console.log(removedFromOurArray);
console.log(ourArray);

// unshift() ile Dizileri Yönetin
// push() dizinin sonuna bir eleman eklerken, unshift() dizinin başına bir eleman ekler.
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();  // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
console.log(ourArray);

// SHOPPING LIST
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// WRITE REUSABLE WITH FUNCTIONS
function ourReusableFunction() {
    console.log("Heyya, World!");
}

ourReusableFunction();

function reusableFunction() {
    console.log("Hi World!");
}

reusableFunction();

// PASSING VALUES TO FUNCTIONS WITH ARGUMENTS(ARGÜMANLI FOKSİYONLARA DEĞER AKTARMA)
// NOT:Parametreler, çağırıldığında bir işleve girecek olan değerler için yer tutucu görevi gören değişkenlerdir.

function ourFunctionWithArgs(a, b) {  // bu, işlev çağırıldığında işleve veri aktaracağımız anlamına gelir.
    console.log(a - b);
}

ourFunctionWithArgs(10, 5);  // Outputs 5

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(10, 5);  // Outputs 15

// GLOBAL SCOPE AND FUNCTIONS(KÜRESEL KAPSAM VE FONKSİYONLAR)
// NOT:Kapsam,değişkenlerin görünürlüğünü ifade eder.
// NOT:Global scope,Javascript kodumuzun her yerinde görülebilecekleri anlamına gelir.

myGlobal = 10;  // Şimdi bu, bir fonksiyonun dışında ayarlandığı için kodun tamamında herhangi bir yerde görebiliriz.

function fun1() {
    oopsGlobal = 5;   // başında var olmadığı için tanımsız olmaz.
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }

    console.log(output);
}

fun1();
fun2();

// LOCAL SCOPE AND FUNCTIONS
// NOT:Bir fonksiyon içinde bildirilen değişkenler ve func parameters yerel kapsama sahiptir.
// Bu, yalnızca func içinden görülebilecekleri anlamına gelir.

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();
// console.log(myVar);  // myVar'ı func içinde tanımladığımızdan dışına çıktığımızda undefinedla karşılaşırız.Çünkü bir localscope haline geldi.


// GLOBAL VS. LOCAL SCOPE IN FUNCTIONS
// Yerel değişken,genel değişkene göre öncelikli olur.

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";  // bu değişkeni local olarak eklediğimizde öncelik localda olduğu için console sweater yazdırır.
    
    return outerWear;      // içeride local bir var outerWear değişkeni olmadığı için console T-Shirt yazdırır.
}

console.log(myOutfit());
console.log(outerWear);  // func dışına console.log yazdırdığımızda, "sweater" localda kayıtlı olduğu için bunu değil "T-Shirt" ü yazdırır(global scope)
// output1 sweater
// output2 tshirt

// RETURN A VALUE FROM A FUNCTION WITH RETURN(DÖNÜŞLÜ BİR FONKSİYONDAN DEĞER DÖNDÜR)
// return aracılğıyla bir functiondan bir değer döndürebiliriz.

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// BİR FUNCTION'DAN DÖNDÜRÜLEN TANIMSIZ DEĞERİ ANLAMA(UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION)
// Function'ların dönüş ifadeleri olabilir,ancak buna gerek yoktur.

var sum = 0;  //funcdan önce tanımlandığı için global bir değişkendir.
function addThree() {
    sum = sum + 3;   // bir dönüş değeri belirtmezseniz dönüş değeri yalnızca undefined olur.
}

function addFive() {
    sum += 5;  // bu ifade de toplama 5 ekleyecek ancak hiçbir şey döndürmeyecek.
}

console.log(addFive()); // output undefined

// DÖNDÜRÜLEN DEĞERLE ATAMA(ASSIGNMENT WITH A RETURNED VALUE)

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

console.log(processed);
console.log(changed);

// STAND IN LINE(SIRAYA GİRİN)
// NOT: Bilgisayar biliminde bir ipucu,ögelerin sırayla tutulduğu soyut bir veri yapısıdır.

function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));   // JSON.stringify bir arrayi stringe dönüştürür,kolayca ekrana yazdırır
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// BOOLEAN VALUES
// Yalnızca iki değer vardır: True or False

function welcomeToBooleans() {
    return true;
}

// USE CONDITIONAL LOGIC WITH IF STATEMENTS (IF İFADELERİYLE KOŞLLU FONKSİYON KULLANIMI)

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true.";
    }
    return "No, that was false.";
}

console.log(trueOrFalse(true));   // output:Yes, that was true.

// COMPARISON WITH THE EQUALITY OPERATOR

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

// COMPARISON WITH THE STRICT EQUALITY OPERATOR

function testStrict(val) {
    if(val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));
/* 3 === 3  true */
/* 3 === "3" false (hem sayısal değer hem de typeof aynı olmalı ancak örnekte soldaki 3 number sağdaki str oldugundan false)  */ 

// PRACTICE COMPARING DIFFERENT VALUES(FARKLI DEĞERLERİ KARŞILAŞTIRMA ALIŞTIRMASI)

function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not equal";
}

console.log(compareEquality(10, "10"));  // == oldugundan output:Equal

function compareEquality2(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality2(7, "7")); // === oldugundan output:Not Equal

// COMPARISON WITH THE INEQUALITY OPERATOR (EŞİTSİZLİK OPERATÖRÜ İLE KARŞILAŞTIRMA)

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));

// COMPARISON WITH THE STRICT INEQUALITY OPERATOR

function testStrictNoEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal"
}

console.log(testStrictNoEqual(10));

// COMPARISONS WITH THE LOGICAL AND OPERATOR

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(10));

// AND/OR

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}

console.log(testLogicalAnd(26));

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}

console.log(testLogicalOr(9));

// ELSE STATEMENTS

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }

    return result;
}

console.log(testElse(6));

// ELSE IF STATEMENTS

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(7));

// LOGICAL ORDER IN IF ELSE STATEMENTS(IF ELSE İFADELERİNDE MANTIKSAL SIRA)

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10"
    }
}

console.log(orderMyLogic(3));

// CHAINING IF ELSE STATEMENTS(IF ELSE İFADELERİNİ ZİNCİRLEME)

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

console.log(testSize(11));

/*
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

// GOLF CODE

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}

console.log(golfScore(5, 4));


/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"
*/

// SWITCH STATEMENTS

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:         // === 1 gibi düşün.
            answer = "alpha";   
            break;     // case ifadesinin sonuna geldik anlamında.
        case 2:
            answer = "beta";
            break;    
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "dela";
            break;        

    }

    return answer;
}

console.log(caseInSwitch(2));

/* 
Write a switch statement which tests val and sets answer for the following conditions:
1- "alpha"
2- "beta"
3- "gamma"
4- "delta"
*/

// DEFAULT OPTION IN SWITCH STATEMENTS

// tanımlı olan her şeyi yazdık ancak yazmadığımız bir ifade döndürmesini istedik.İşte o zaman elde edeceğimiz output: ""
// istediklerimiz dışında olan bir durumda başka bir şey elde etmek istiyorsak default kullanacağız.
// default kullanımı = else if'teki else kullanımı!

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;           
    }

    return answer;
}

console.log(switchOfStuff(2)); // output:stuff
console.log(switchOfStuff("a")); // output:apple

// MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS(ANAHTAR İFADELERİNDE BİRDEN ÇOK ÖZDEŞ SEÇENEK)

// Bazen birden fazla girişin aynı çıkışı verdiği bir switch ifadesi istersiniz.
// break; komutunu atlayarak bu yeterince kolay!

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;              
    }

    return answer;
}

console.log(sequentialSizes(1));

// REPLACING IF ELSE CHAINS WITH SWITCH(IF ELSE ZİNCİRLERİNİ SWİTCH İLE DEĞİŞTİRME)

// function chainToSwitch(val) {
//     var answer = "";

//     if (val === "bob") {
//         answer = "Marley";
//     } else if (val === 42) {
//         answer = "The Answer";
//     } else if (val === 1) {
//         answer = "There is no #1";
//     } else if (val === 99) {
//         answer = "Missed me by this much!"
//     } else if (val === 7) {
//         answer = "Ate Nine";
//     }

//     return answer;
// }

function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;                
    }

    return answer;
}

console.log(chainToSwitch(7));

// RETURNING BOOLEAN VALUES FROM FUNCS

function isLess(a, b) {
    return a < b;

}

console.log(isLess(10, 15));

// RETURNING EARLY PATTERN FROM FUNCS

function abTest(a, b) {
    
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
console.log(abTest(-2, 2));


// COUNTING CARDS
// Bir BlackJack kart sayma fonksiyonu oluşturacağız.

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;                
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet';
    }
    
    return count + " " + holdbet;

    
}

cc(2); cc(3); cc(7); cc('K'); cc(6);

console.log(cc(4));

// BUILD JAVASCRIPT OBJECTS

// Objectler arraylere benzerler.
// Ancak verilere erişmek için arrayleri kullanmak yerine objectleri kullanırız.

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// ACCESSING OBJECT PROPERTIES WITH DOT NOTATION(NOKTA GÖSTERİMİ İLE OBJ ÖZELLİKLERİNE ERİŞME)

// Bir nesnedeki bir özelliğe erişmenin iki ana yolu vardır.

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);

// ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION(OBJ ÖZELLİKLERİNE PARANTEZ NOTASYONUYLA ERİŞME)

// İkinci yol.

var testObj = {
    "an entree": "hamburger",   // arada an entree de oldugu gibi bosluk arsa kullanılabilir.
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(drinkValue);

// ACCESSING OBJECT PROPERTIES WITH VARIABLES(OBJ ÖZELLİKLERİNE DEĞİŞKENLERLE ERİŞME)

// Köşeli parantez gösterimi, değişkenleri kullanarak nesne özelliklerini aramak için de kullanılabilir.

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

console.log(player);
console.log(playerNumber);

// UPDATING OBJECT PROPERTIES(OBJ ÖZELLİKLERİNİ GÜNCELLEME)
// Obj özelliklerini güncellemek için nokta gösterimini kullanabiliriz.

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

console.log(ourDog.name);

// ADD NEW PROPERTIES TO AN OBJECT(BİR OBJECTE YENİ ÖZELLİKLER EKLE)
// Nokta gösterimi veya parantez gösterimi kullanarak bir objecte yeni özellikler ekleyebiliriz.

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-bow";
// ourDog['bark'] = "woof!"

// DELETE PROPERTIES FROM AN OBJECT

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-bow"
};

delete ourDog.bark;
console.log(ourDog);

// USING OBJECTS FOR LOOKUPS(ARAMALAR İÇİN OBJ KULLANIMI)
// Objects, bir sözlük bir key-value deposu gibi düşünülebilir.
// Arama değerleri için de bir obj kullanabilirsiniz.

function phoneticLookup(val) {
    var result = "";

    // switch(val) {
    //     case "alpha":
    //         result = "Adams";
    //         break;
    //     case "bravo":
    //         result = "Bravo";
    //         break;
    //     case "charlie":
    //         result = "Chicago";                  
    //         break;
    //     case "delta":
    //         result = "Denver";
    //         break;
    //     case "echo":
    //         result = "Easy";
    //         break;
    //     case "foxtrot":
    //         result = "Frank";                   
    // }
// BU SWITCH İFADESİNİ BİR NESNE İLE DEĞİŞTİREBİLİRİZ

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];

    return result;

}

console.log(phoneticLookup("charlie"));

// TESTING OBJECTS FOR PROPERTIES
// hasown property yöntemi ile bir objectin bir özelliği olup olmadığını kontrol edebiliriz.

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found!";
    }
    
}

console.log(checkObj("gift"));

// MANIPULATING COMPLEX OBJECTS(KARMAŞIK OBJECTLERİ DEĞİŞTİRME)
// JAVASCRIPT OBJECTİ,ESNEK VERİLERİ DEPOLAMANIN BİR YOLUDUR.BÖYLECE STR ARR NUMBER LARI SAKLAYABİLİRSİNİZ.AND EVEN OTHER OBJECTS!

var myMusic = [

    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube Video"
        ]
    }
];    // array içinde objects var!

// ACCESSING NESTED OBJECTS(İÇ İÇE OBJECTSE ERİŞİM)

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box'];

console.log(gloveBoxContents);

// ACCESSING NESTED ARRAYS(İÇ İÇE DİZİLERE ERİŞİM)
// İç içe geçmiş arraylere erişmek için parantez gösterimi değiştirilebilir.

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

// RECORD COLLECTION
// THIS IS A CODING CHALLENGE!

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "trakcs": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// aşağıda func içinde collection'ı değiştireceğiz ancak değiştirmeden önce yukarıda collection'ın bir kopyasını tutmak istedik.

function updateRecords(id,prop,value) {
        if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439,"artist","ABBA"));

// ITERATE WITH WHILE LOOPS(WHILE DÖNGÜLERİ İLE YİNELEYİN)
// Döngüler,aynı kodu birden çok kez çalıştırmamıza izin verir.
// Belirli bir koşul doğruyken çalışan bir while döngüsü gösterelim.

var myArray = [];

var i = 0;

while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

// ITERATE WITH FOR LOOPS
// JavaScript'teki en yaygın döngü türüdür.
// başlatma,döngü içindeki herhangi bir kod çalışmadan önce gerçekleşir.

var ourArray = [];

for (var i = 0; i < 5; i++) {     // for (başlatma,koşul,sonifade)  // çoğu for döngüsü böyle başlar.
    ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);

// ITERATE ODD NUMBERS WITH A FOR LOOP

// Önce 1'den 10'a kadar olan çift sayıları yazdıran bir loop örneği yapalım.

var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray);

// Şimdi de tek sayıları yazdıran bir loop örneği yapalım.

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

// COUNT BACKWARDS WITH A FOR LOOP(FOR DÖNGÜSÜYLE GERİYE DOĞRU SAY)

var ourArray = [];

for (var i = 10; i >= 0; i -= 2) {
    ourArray.push(i);
}

console.log(ourArray);

// 9'dan 1'e kadar olan tek sayıları myArray içine yazın.

var myArray = [];

for (var i = 9; i >= 1; i -= 2) {
    myArray.push(i);
}

console.log(myArray);

// ITERATE THROUGH AN ARRAY WITH FOR LOOP(FOR DÖNGÜSÜ OLAN BİR DİZİDE YİNELEYİN)
// Javascript'te bir dizinin içeriğini tekrarlamak yaygındır.

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var myTotal = 0;

for (var i = 0; i < myArr.length; i++) {
    myTotal += myArr[i];
}

console.log(myTotal);

// NESTING FOR LOOPS
// Çok boyutlu veya iç içe bir diziniz varsa,tüm dizi ögelerine erişmek için iç içe for döngülerini kullanabilirsiniz. 

// burada bu iç içe dizilerdeki her sayıyı çarpmak için for loop kullanacağız.

function multiplyAll(arr) {
    var product = 1;
    
    for (var i = 0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    } 

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);

// DO WHILE LOOPS

var myArray = [];
var i = 10;

// Only change code below this line

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);
// Bir do while döngüsünde, koşulu kontrol etmeden önce her zaman en az bir kez çalıştırılır.
// ve bu durumda koşulun yanlış olduğunu anlayacak ve döngüden çıkacak.
// output: 11,[10]

// PROFILE LOOKUP
// This is a codeing challenge!

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "05432365438",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing", "Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// Yapmak istediğimiz şey, bir isim girdiğimiz bu lookUpProfile fonksiyonu yaratmak.

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact.";
}

// Change these values to test  your func!

var data = lookUpProfile("Harry", "school");  // output: "No such property"
var data = lookUpProfile("Akira", "likes");  // output: ["Pizza", "Coding", "Brownie Points"]

console.log(data);

// GENERATE RANDOM FRACTIONS

// JS'de rastgele bir ondalık sayı oluşturmanın basit bir yolu var:math.random function

function randomFraction() {


    return Math.random();
}

console.log(randomFraction());

// bu sayı daima 0 ile 1 arasında olur

// GENERATE RANDOM WHOLE NUMBERS(TAM SAYI)

var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // bu bize 0-20 arası rastgele bir sayı verir.
// UNUTMAYIN MATH.RANDOM HİÇBİR ZAMAN 1 OLMAZ!

function randomWholeNum() {


    return Math.floor(Math.random() * 10);  // 0-10 arası(10 dahil değil.)
}

console.log(randomWholeNum());

// GENERATE RANDOM WHOLE NUMBERS WITH A RANGE(BELİRLİ ARALIKTA RASTGELE TAM SAYILAR OLUŞTURUN)

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; 
}

var myRandom = randomRange(5, 15);

console.log(myRandom);

// USE THE parseInt FUNCTION

// string to int
// float to int

function convertToInteger(str) {
    return parseInt(str);

}

console.log(convertToInteger("5"));

// USE THE parseInt FUNCTION WITH A RADIX(taban)

function convertToInteger(str) {
    return parseInt(str, 2) // this means binary(taban 2)
}

console.log(convertToInteger("10011"));

// USE THE CONDITIONAL(TERNARY(ÜÇLÜ)) OPERATOR

// condition ? statement-if-true : statement-if-false;       tek satırda

// function checkEqual(a, b) {
//     if(a === b) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let's change this 

function checkEqual(a, b) {
    return a === b ? true : false;
}

console.log(checkEqual(1, 2)); // output: false

// USE MULTIPLE CONDITIONAL(TERNARY) OPERATORS

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(5)); // output: positive
console.log(checkSign(-3));// output: negative
console.log(checkSign(0));// output: zero

// DIFFERENCES BETWEEN the var and let KEYWORDS(var vs let)

// "let" keywordü bir değişkeni iki kez bildirmemize izin vermez!!!!!!
// katı ve hatasız mod için çoğu kullanıcı js dosyasının başına "use strict"; ifadesini ekler!!!!!!

// let catName = "Quincy";
// let quote;

// let catName = "Beau";

// function catTalk() {
//     "use strict";

//     catName = "Oliver";
//     quote = catName + "says Meow!";
// }

// catTalk();

// COMPARE SCOPES of the var and let KEYWORDS(VAR VE LET'İN KAPSAMLARINI KARŞILAŞTIRIN)

// var ile bir değişken atadıysak; bir işlev içinde atanmışsa global or local olarak bildirilir.
// Ancak let'in kapsamı bildirildiği block ifadesiyle sınırlıdır.

function checkScope() {
    "use strict";
        let i = "function scope";
        if (true) {
            let i = "block scope";
            console.log("Block scope i is: ", i);
        }
        console.log("Function scope i is: ", i);
        return i;
}

checkScope();   // eğer let yerine var kullansaydık bu ayrımı yapamazdık sonuç her türlü block scope olurdu.

// DECLARE A READ-ONLY VARIABLE WITH "the const" KEYWORD

// "let" in tüm özelliklerine sahiptir ancak aynı zamanda salt-okunurdur.
// bir "const" u yeniden atayamazsınız.

function printManyTimes(str) {
    "use strict";

    // var sentence = str + " is cool!";

    const SENTENCE = str + " is cool!";  // const yazarsak hata alırız çünkü immutable(değiştirilemez.)

    // sentence = str + " is amazing!";
    
    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }


}
printManyTimes("freeCodeCamp");
// BİR DEĞİŞKENİ YENİDEN ATAMAK İSTEMEDİĞİNİZDEN EMİNSENİZ "const" KULLANIN !!!!!!!!!!

// MUTATE AN ARRAY DECLARED WITH "const"("CONST" İLE BİLDİRİLEN BİR DİZİYİ DEĞİŞTİRİN)

const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    // s = [2, 5, 7];

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);  // böylece değiştirmiş olduk!

// PREVENT OBJECT MUTATION(NESNE MUTASYONUNU ÖNLE)

// Daha önce görüldüğü gibi, bir const değişkeni tek başına verilerinizi mutasyona karşı korumaz.
// Bir object veya arrayiniz varsa, const ile bildirilmiş olsa bile onu değiştirebilirsiniz.
// Veri mutasyonunu önleyecek şey: object.freeze

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

// MATH_CONSTANTS' ın değişmesini istemediğimiz için Object.freeze uygulayacağız!

// USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCTIONS
   
// var magic = function() {    // bu bir anonymous function'dır çünkü bir ismi yoktur.
//     return new Date();
// }
// bunu bir arrow function'a dönüştürebiliriz. yazmayı hızlandırır.

// var magic = () => {
//     return new Date();
// };
// bunu daha da kısaltabiliriz.

// burada yalnızca bir değer döndürüyorsak, return dememize bile ihtiyaç yok.

const magic = () => new Date();



// WRITE ARROW FUNCTIONS WITH PARAMETERS

// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// };

// console.log(myConcat([1,2], [3,4,5]));

// Bu fonksiyonu arrow function'a çevirelim ve daha kolay hale getirelim.

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));


// WRITE HIGHER ORDER ARROW FUNCTIONS PART 1

// Arrow funcs, map, filter, reduce gibi daha yüksek düzey funclarda gerçekten iyi çalışır.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegeres = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegeres;
}

const squaredIntegeres = squareList(realNumberArray);
console.log(squaredIntegeres);

// array içindeki integer ve pozitif olan sayıları aldık ve bu sayıların (4,42,6) karelerini alıp geri yazdırdık ve bunu tek satırda yaptık.(Arrow Functions sayesinde!)



// WRITE HIGHER ORDER ARROW FUNCTIONS PART 2

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5, 2));
console.log(increment(5));


// USE THE RESET OPERATOR WITH FUNCTION PARAMETERS

// Rest operatörü, değişken sayıda bağımsız değişken alan bir func oluşturmanıza olanak tanır.

// const sum = (function() {
//     return function sum(...args) {
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();

// console.log(sum(1, 2, 3));


// CREATE STRINGS USING TEMPLATE LITERALS

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

console.log(greeting);

// CODING CHALLENGE

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class = "text-warning">${arr[i]}</li`)
    }
    return resultDisplayArray;
}

/*
* makeList(result.failure) should return:
* [ `<li class ="text-warning">no-var</li`,
* [ `<li class ="text-warning">var-on-top</li`,
* [ `<li class ="text-warning">linebreak</li`, ]
*/

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);


// ***************** //

// const createPerson = (name, age, gender) => {

//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };
// };
// console.log(createPerson("Zodiac Hasbro", 56, "Male"));

// bu kadar uzun yapmak yerine şöyle bir kısayol var:

const createPerson = (name, age, gender) => ( { name, age, gender});

console.log(createPerson("Zodiac Hasbro", 56, "Male"));


// DECLARATIVE FUNCTIONS

// bir obj func içerebilir.

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear
    }
};


bicycle.setGear(3);
console.log(bicycle.gear);