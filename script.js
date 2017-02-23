
// Global variables and constants

Memory  = "0";      // initialise memory variable
Current = "0";      //   and value of Display ("current" value)
Operation = 0;      // Records code for eg * / etc.
MAXLENGTH = 30;     // maximum number of digits before decimal!


function AddDigit(dig)          //ADD A DIGIT TO DISPLAY (kept as 'Current')
 {if (Current.length > MAXLENGTH)
       { Current = "Aargh! Too long"; //limit length
       } else
       { if (    (eval(Current) === 0)
              && (Current.indexOf(".") === -1)
            )
           { Current = dig;
           } else
           { Current = Current + dig;
           };
    }; };
   document.Calculator.Display.value = Current;
 }