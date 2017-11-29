var names = ["Yaakov", "John", "Jen", "jason", 
"Paul", "frank", "Larry", "Paula", "Laura", "jim"];


/** Loop through names array.  
    Verify if first name starts with J/j.  Converted
    all to Upper case instead of using an or statment.
    Ensure that all names printed are capitalized
    **/
for (i=0; i<names.length; i++)
{
    var name = names[i];
    //grab first letter of name and conver to uppercase
    var firstLetter = name.charAt(0).toUpperCase();
    //Ensure names are in Capitals before printing
    var nameUpperCase=firstLetter + name.slice(1);
    if (firstLetter == "J")
    {
        
        byeSpeaker.speak(nameUpperCase);
    
    }
    else
    {
     helloSpeaker.speak(nameUpperCase);
    }
    
   
}
