window.addEventListener("keydown", window_keydown, false);

function window_keydown(e)
{
	switch (e.target.tagName)
	{
		case "INPUT": case "SELECT": case "TEXTAREA": return;
	}
	
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }

    var keyPressed = keyToLiteralString(e.which);
    if (keyPressed == "")
    {
        return;
    }

    var keyCombination = "";
    if (e.ctrlKey)
    {
        keyCombination = "Ctrl";
    }
    
    if (e.shiftKey)
    {
        if (keyCombination == "")
        {
            keyCombination = "Shift";
        }
        else
        {
            keyCombination += " + Shift";
        }
    }
    
    if (e.altKey)
    {
        if (keyCombination == "")
        {
            keyCombination = "Alt";
        }
        else
        {
            keyCombination += " + Alt";
        }
    }
    
    if (keyCombination == "")
    {
        keyCombination = keyPressed;
    }
    else
    {
        keyCombination += " + " + keyPressed;
    }
    
    chrome.extension.sendRequest({'action' : keyCombination});
}

function keyToLiteralString(key)
{
    // 0 to 9, A to Z
    if (key >= 48 && key <= 90)
    {
        return String.fromCharCode(key);
    }
    
    // Number pad 0 to 9
    if (key >= 96 && key <= 105)
    {
        return (key - 96);
    }
    
    // Function keys
    if (key >= 112 && key <= 123)
    {
        return "F" + (key - 111);
    }
    
    switch (key)
    {
        case 19: return "Break";
        case 27: return "Esc";
        case 33: return "PageUp";
        case 34: return "PageDown";
        case 35: return "End";
        case 36: return "Home";
        case 37: return "Left";
        case 38: return "Up";
        case 39: return "Right";
        case 40: return "Down";
        case 106: return "*";
        case 109: return "-";
        case 189: return "-";
        case 110: return ".";
        case 190: return ".";
        case 111: return "/";
        case 186: return ";";
        case 187: return "=";
        case 188: return ",";
        case 222: return "'";
        case 191: return "/";
        case 219: return "[";
        case 220: return "\\";
        case 221: return "]";
    }
    
    return "";
}
