JavaScript
==========
Typ av språk
-----------
Programmeringsspråk som till största del används i webbläsare för att göra anrop efter resurser och förändra hur en sida ser ut. Har inget med Java att göra alls, det döptes bara till det för att Java var populärt då. Nu för tiden finns det mer och mer på servrar också.   
Till skillnad från exempelvis php och Java/C# så behöver det inte köras från en server, utan kan skrivas direkt i browsern. Det innebär också att det inte kan kontakta en databas själv, utan behöver något emellan för att göra det. Vanligt då är att man använder ett REST-api.  
Funktionsscopat, vilket innebär att variabler finns inne i den funktionen som de är deklarerade i.  

Vad är det bra på?
-----------------
Anpassat för att manipulera hur en hemsida ser ut. Det är snabbt att komma igång med, du behöver ingen server!  
Vad är det dåligt på?
------------------
Eftersom det inte finns ett typsystem så kan det lätt bli fel. Du behöver inte skriva efter en god stil, utan kan göra lite vad som helst, vilket innebär att man som utvecklare måste se till att skripten blir snygga och välorganiserade.
Hur lägger man upp ett skript?
---------------------------
Filerna läses uppifrån och ner, därför måste variabler och funktioner som används deklareras ovanför användningspunkten. 
Det finns i varje webbläsare ett globalt scope som heter window där man kan ”fästa” variabler. Men det är en mycket dålig idé! Då kan man råka krocka med ett annat skript och ditt kommer inte längre att fungera som det ska. Därför ska man alltid innesluta sitt skript i vad som kallas en anonym funktion. Det är en så kallad Immediately-invoked function. Det ser ut så här:

```
(function (window, $) {
    "use strict";
    var a = 'hej';
    
    // Här inne skriver du din kod
    
})(window, jQuery);
``` 

Om man alltid gör så här i sina skript så följer man god standard och undviker att det man gör påverkar andra skript, eller att ens egna skript blir påverkade av vad andra kan ha gjort. Genom att skriva "use strict" så väljer man att aktivt använda en syntax som är lite mer strikt och bättre anpassad för framtida versioner av JavaScript.


Typsystem
---------
Det finns inga speciella typer i JavaScript, man gör alltså inte skillnad när man deklarerar en siffra eller en int.

Allt är objekt
-------------
I JavaScript är alla saker man skapar objekt. Man kan "fästa" properties på lite vad som helst. Överlag lämnar språket mycket över till utvecklaren. 

Obejktorientering vs funktionsorientering
-----------------------------------------
Till skillnad från till exempel Java eller de senare varianterna av PHP så är JavaScript inte anpassat för objektorientering. Det finns inte arv eller klasser. Det går att härma, men är kanske inte alltid den bästa vägen att gå. Det viktigaste att ta med sig från objektorienteringen är att skapa komponenter som är återanvändningsbara och så flexibla som är rimligt. 


Closures
--------

```
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert (name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();
```


