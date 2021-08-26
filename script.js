// get pin
function getPin()
{
    const pin = Math.round( Math.random() * 10000 );
    const stringPin = pin + '';
    if ( stringPin.length == 4 )
    {
        return pin;
    }
    else
    {
        return getPin();
    }
}

function generatePin()
{
    const pin = getPin();
    document.getElementById( 'display-pin' ).value = pin;
}

// keypad section
document.getElementById( 'keypad' ).addEventListener( 'click', function ( event )
{
    const keyInput = event.target.innerText;
    if ( isNaN( keyInput ) )
    {
        if ( keyInput == 'C' )
        {
            const display = document.getElementById( 'pad-display' ).value = '';
        }
        else if ( keyInput == '&lt;' )
        {
        //     const display = document.getElementById( 'pad-display' );
        //     const oldValue = display.value;
        //     const newValue = oldValue - keyInput;
        //     // display.value = newValue;
        //     console.log( newValue );
        // }
    }
    else
    {
        const display = document.getElementById( 'pad-display' );
        const oldValue = display.value;
        const newValue = oldValue + keyInput;
        display.value = newValue;
    }
} )
// pin verify
function verifyPin()
{
    const pin = document.getElementById( 'display-pin' ).value;
    const inputPin = document.getElementById( 'pad-display' ).value;

    if ( pin == inputPin )
    {
        const successMsg = document.getElementById( 'notify-success' );
        successMsg.style.display = 'block';

        const failMsg = document.getElementById( 'notify-fail' );
        failMsg.style.display = 'none';
    }
    else
    {
        const failMsg = document.getElementById( 'notify-fail' );
        failMsg.style.display = 'block';

        const successMsg = document.getElementById( 'notify-success' );
        successMsg.style.display = 'none';
    }
}