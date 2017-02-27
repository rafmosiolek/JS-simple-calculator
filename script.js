
// Global variables and constants

Memory  = "0";      // initialise memory variable
Current = "0";      //   and value of Display ("current" value)
Operation = 0;      // Records code for eg * / etc.
MAXLENGTH = 30;     // maximum number of digits before decimal!


// function AddDigit(dig) {        // ADD A DIGIT TO DISPLAY (kept as "Current")
//     if (Current.length > MAXLENGTH) {
//         Current = "Too long!";      // limit length
//     } else {
//         if (eval(Current) === 0) && (Current.indexOf(".") === -1) {
//             Current = dig;
//         } else {
//             Current = Current + dig;
//         };
//     };
//     document.Calculator.Display.value = Current;
// }


function AddDigit(dig)          //ADD A DIGIT TO DISPLAY (keep as 'Current')
 { if (Current.indexOf("!") == -1)  //if not already an error
    { if (    (eval(Current) == 0)
              && (Current.indexOf(".") == -1)
         ) { Current = dig;
           } else
           { Current = Current + dig;
           };
      Current = Current.toLowerCase(); //FORCE LOWER CASE
    } else
    { Current = "Hint! Press 'AC'";  //Help out, if error present.
    };
   if (Current.indexOf("e0") != -1)
     { var epos = Current.indexOf("e");
       Current = Current.substring(0,epos+1) + Current.substring(epos+2);
     };
  if (Current.length > MAXLENGTH)
     { Current = "Aargh! Too long"; //don't allow over MAXLENGTH digits before "." ???
     };
   document.Calculator.Display.value = Current;
 }


function Dot () {
    if (Current.length === 0) {     // no leading ".", use "0."
        Current = "0.";
    } else {
       if (Current.indexOf(".") === -1)
        { Current = Current + ".";};
    };
    document.Calculator.Display.value = Current;
}

function DoExponent() {     // DoExponent function handles the exponentation 10^(an integer)
    if (Current.indexOf("e") === -1) {
        Current = Current + "e0";
        document.Calculator.Display.value = Current;
    };

}

function PlusMinus () {
    if (Current.indexOf("e") != -1) {       // if there's an exponent:
        var epos = Current.indexOf("e-");   
        if (epos != -1) {
            Current = Current.substring(0,1+epos) + Current.substring(2+epos);  // clip -ve exp
        } else {
            epos = Current.indexOf("e");
            Current = Current.substring(0,1+epos) + "-" + Current.substring(1+epos);    // insert
        }
    } else {                                // there's NO exponent:
        if (Current.indexOf("-") === 0) {
            Current = Current.substring(1);
        } else {
            Current = "-" + Current;
        }
    }
    document.Calculator.Display.value = Current;
};

function Clear() {          // clear entry [C]
    Current = "0";
    document.Calculator.Display.value = Current;
};

function AllClear() {       // Clear all entries [AC]
    Current = "0";
    Operation = 0;          // clear operation
    Memory = "0";           // clear memory
    document.Calculator.Display.value = Current;
};










function FixCurrent()
 {
  Current = document.Calculator.Display.value;
  Current = "" + parseFloat(Current);
  if (Current.indexOf("NaN") != -1)
    { Current = "Aargh! I don't understand";
    };
  document.Calculator.Display.value = Current;
 }
