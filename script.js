// Global variables

var memory  = "0";      // initialise memory variable
var current = "0";      //   and value of Display ("current" value)
var operation = 0;      // Records code for eg * / etc.
var maxlength = 30;     // maximum number of digits before decimal!

var display = document.getElementByClass('.display');
var 



function addDigit(dig) {      //ADD A DIGIT TO DISPLAY (keep as 'current')

  current = current.toLowerCase(); //FORCE LOWER CASE

  if (current.indexOf("!") === -1) {  //if not already an error
    
    if ((eval(current) === 0) && (current.indexOf(".") === -1)){
      current = dig;
    } else {
    current = current + dig;
    }   
  
  } else {
    current = "Hint! Press 'AC'";  //Help out, if error present.
  }

  if (current.indexOf("e0") != -1) {
    var epos = current.indexOf("e");
    current = current.substring(0,epos+1) + current.substring(epos+2);
  }
  
  if (current.length > maxlength) {
    current = "Aargh! Too long"; //don't allow over MAXLENGTH digits before "." ???
  }

  display.value = current;
}


function dot () {       // put in "." if appropriate
    if (Current.length === 0) {     // no leading ".", use "0."
        Current = "0.";
} else {
   if (Current.indexOf(".") === -1)
    { Current = Current + ".";}
}
document.Calculator.Display.value = Current;
}


function doExponent() {     // DoExponent function handles the exponentation 10^(an integer)
    if (Current.indexOf("e") === -1) {
        Current = Current + "e0";
        document.Calculator.Display.value = Current;
    }

}

function plusMinus()
{
  if  (Current.indexOf("e") != -1)
    { var epos = Current.indexOf("e-");
if (epos != -1)
         { Current = Current.substring(0,1+epos) + Current.substring(2+epos); //clip out -ve exponent 
         } else
         { epos = Current.indexOf("e");
           Current = Current.substring(0,1+epos) + "-" + Current.substring(1+epos); //insert -ve exponent
       };
   } else
   {  if ( Current.indexOf("-") === 0 )
   { Current = Current.substring(1);
   } else
   { Current = "-" + Current;
}
if (    (eval(Current) === 0)
    && (Current.indexOf(".") === -1 )
    ) { Current = "0"; };
}
document.Calculator.Display.value = Current;
}

function clear() {          // clear entry [C]
    Current = "0";
    document.Calculator.Display.value = Current;
}

function allClear() {       // Clear all entries [AC]
    Current = "0";
    Operation = 0;          // clear operation
    Memory = "0";           // clear memory
    document.Calculator.Display.value = Current;
}

function operate(op) {          // store operation, e.g. + * /
    if (Operation != 0) {Calculate();} // press "=" if pending operation!

    if (op.indexOf("*") > -1) {Operation = 1;};     //codes for *
    if (op.indexOf("/") > -1) {Operation = 2;};     // slash (divide)
    if (op.indexOf("+") > -1) {Operation = 3;};     // sum
    if (op.indexOf("-") > -1) {Operation = 4;};     // difference

    Memory = Current;                               // store value
    Current = "";                                       
    document.Calculator.Display.value = Current;
}

function calculate()            //PERFORM CALCULATION (= button)
{ 
  if (Operation === 1) { Current = eval(Memory) * eval(Current); };
  if (Operation === 2)
    { if (eval(Current) != 0)
      { Current = eval(Memory) / eval(Current)
      } else
      { Current = "Divide by zero!"; //don't allow over MAXLENGTH digits before "." ???
  }
};
if (Operation === 3) { Current = eval(Memory) + eval(Current); };
if (Operation === 4) { Current = eval(Memory) - eval(Current); };
  Operation = 0;                //clear operation
  Memory = "0";                  //clear memory
  Current = Current + "";       //FORCE A STRING!
  if (Current.indexOf("Infinity") != -1)        //eg "1e320" * 1
    { Current = "Value too big!";
}
  if (Current.indexOf("NaN") != -1)        //eg "1e320" / "1e320"
    { Current = "I don't understand";
}
document.Calculator.Display.value = Current;
  // NOTE: if no operation, nothing changes, Current is left the same!
}


function fixCurrent() {         // dealing with stuff typed into the display area
    Current = document.Calculator.Display.value;
    Current = "" + parseFloat(Current);
    if (Current.indexOf("NaN") != -1) {
        Current = "I don't understand!";
    }
    document.Calculator.Display.value = Current;
}
