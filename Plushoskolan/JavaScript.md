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
Det finns i varje webbläsare ett globalt scope som heter window där man kan ”fästa” variabler. Men det är en mycket dålig idé! Då kan man råka krocka med ett annat skript och ditt kommer inte längre att fungera som det ska. Därför ska man alltid innesluta sitt skript i vad som kallas en anonym funktion. Det ser ut så här:
Typsystem
Prototyper/”Klasser”/Classify
Clojures
