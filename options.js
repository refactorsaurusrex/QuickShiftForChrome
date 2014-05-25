function initializeUI()
{
    if (window.localStorage == null)
    {
        alert("Local storage doesn't appear to be enabled. Local storage is required in order to customize your settings.");
        return;
    }
    
    document.onchange = document_onChange;

    options.enableMoveTabsToWindow.onchange = enableMoveTabsToWindow_onChange;
	
    options.allowMoveTabToPreviousWindow.onchange = allowMoveTabToPreviousWindow_onChange;
    options.moveTabToPreviousWindowKeyString.onkeydown = moveTabToPreviousWindowKeyString_onKeydown;
	
    options.allowMoveTabToNextWindow.onchange = allowMoveTabToNextWindow_onChange;
    options.moveTabToNextWindowKeyString.onkeydown = moveTabToNextWindowKeyString_onKeydown;
	
    options.allowMoveAllRightwardTabsToNextWindow.onchange = allowMoveAllRightwardTabsToNextWindow_onChange;
    options.moveAllRightwardTabsToNextWindowKeyString.onkeydown = moveAllRightwardTabsToNextWindowKeyString_onKeydown;
	
    options.allowMoveAllLeftwardTabsToPreviousWindow.onchange = allowMoveAllLeftwardTabsToPreviousWindow_onChange;
    options.moveAllLeftwardTabsToPreviousWindowKeyString.onkeydown = moveAllLeftwardTabsToPreviousWindowKeyString_onKeydown;
	
    options.allowLastFocusedToggle.onchange = allowLastFocusedToggle_onChange;
    options.toggleToLastFocusedKeyString.onkeydown = toggleToLastFocusedKeyString_onKeydown;
    
    options.allowMergeAllTabs.onchange = allowMergeAllTabs_onChange;
    options.mergeAllTabsKeyString.onkeydown = mergeAllTabsKeyString_onKeydown;
    
    options.enableReorderingTabs.onchange = enableReorderingTabs_onChange;
    
    options.allowReorderTo1.onchange = allowReorderTo1_onChange;
    options.reorderTo1KeyString.onkeydown = reorderTo1KeyString_onKeydown;
    
    options.allowReorderTo2.onchange = allowReorderTo2_onChange;
    options.reorderTo2KeyString.onkeydown = reorderTo2KeyString_onKeydown;
    
    options.allowReorderTo3.onchange = allowReorderTo3_onChange;
    options.reorderTo3KeyString.onkeydown = reorderTo3KeyString_onKeydown;
    
    options.allowReorderTo4.onchange = allowReorderTo4_onChange;
    options.reorderTo4KeyString.onkeydown = reorderTo4KeyString_onKeydown;
    
    options.allowReorderTo5.onchange = allowReorderTo5_onChange;
    options.reorderTo5KeyString.onkeydown = reorderTo5KeyString_onKeydown;
    
    options.allowReorderTo6.onchange = allowReorderTo6_onChange;
    options.reorderTo6KeyString.onkeydown = reorderTo6KeyString_onKeydown;
    
    options.allowReorderTo7.onchange = allowReorderTo7_onChange;
    options.reorderTo7KeyString.onkeydown = reorderTo7KeyString_onKeydown;
    
    options.allowReorderTo8.onchange = allowReorderTo8_onChange;
    options.reorderTo8KeyString.onkeydown = reorderTo8KeyString_onKeydown;
    
    options.allowReorderTo9.onchange = allowReorderTo9_onChange;
    options.reorderTo9KeyString.onkeydown = reorderTo9KeyString_onKeydown;
    
    options.allowReorderToLast.onchange = allowReorderToLast_onChange;
    options.reorderToLastKeyString.onkeydown = reorderToLastKeyString_onKeydown;
	
	
    options.allowMoveTabForward.onchange = allowMoveTabForward_onChange;
    options.moveTabForwardKeyString.onkeydown = moveTabForwardKeyString_onKeydown;
	
    options.allowMoveTabBackward.onchange = allowMoveTabBackward_onChange;
    options.moveTabBackwardKeyString.onkeydown = moveTabBackwardKeyString_onKeydown;
	
    
    options.saveChangesButton.onclick = saveChangesButton_onClick;
    options.resetToDefaultButton.onclick = resetToDefaultButton_onClick;
    
    if (window.localStorage.length > 0)
    {
        loadKeysFromLocalStorage();
    }
};

function document_onChange()
{
    options.saveChangesButton.disabled = false;
    options.saveChangesButton.value = "Save Changes";
}

function enableMoveTabsToWindow_onChange()
{
    options.allowMoveTabToPreviousWindow.disabled = !options.enableMoveTabsToWindow.checked;
    options.allowMoveTabToPreviousWindow.checked = options.enableMoveTabsToWindow.checked;
    options.moveTabToPreviousWindowKeyString.disabled = !options.enableMoveTabsToWindow.checked;
    
    options.allowMoveTabToNextWindow.disabled = !options.enableMoveTabsToWindow.checked;
    options.allowMoveTabToNextWindow.checked = options.enableMoveTabsToWindow.checked;
    options.moveTabToNextWindowKeyString.disabled = !options.enableMoveTabsToWindow.checked;
	
    options.allowMoveAllRightwardTabsToNextWindow.disabled = !options.enableMoveTabsToWindow.checked;
    options.allowMoveAllRightwardTabsToNextWindow.checked = options.enableMoveTabsToWindow.checked;
    options.moveAllRightwardTabsToNextWindowKeyString.disabled = !options.enableMoveTabsToWindow.checked;
	
    options.allowMoveAllLeftwardTabsToPreviousWindow.disabled = !options.enableMoveTabsToWindow.checked;
    options.allowMoveAllLeftwardTabsToPreviousWindow.checked = options.enableMoveTabsToWindow.checked;
    options.moveAllLeftwardTabsToPreviousWindowKeyString.disabled = !options.enableMoveTabsToWindow.checked;
}

function allowMoveTabToPreviousWindow_onChange()
{   
    options.moveTabToPreviousWindowKeyString.disabled = !options.allowMoveTabToPreviousWindow.checked;
}
    
function moveTabToPreviousWindowKeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }

    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.moveTabToPreviousWindowKeyString.value = newKey;
        moveTabToPreviousWindowWarning.innerText = "";
        document_onChange();
    }
    else
    {
        moveTabToPreviousWindowWarning.innerText = errorMessage;
    }
    
    return false;
}

function allowMoveTabToNextWindow_onChange()
{
    options.moveTabToNextWindowKeyString.disabled = !options.allowMoveTabToNextWindow.checked;
}

function moveTabToNextWindowKeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.moveTabToNextWindowKeyString.value = newKey;
        moveTabToNextWindowWarning.innerText = "";
        document_onChange();
    }
    else
    {
        moveTabToNextWindowWarning.innerText = errorMessage;
    }
    
    return false;
}

function allowMoveAllRightwardTabsToNextWindow_onChange()
{
    options.moveAllRightwardTabsToNextWindowKeyString.disabled = !options.allowMoveAllRightwardTabsToNextWindow.checked;
}

function moveAllRightwardTabsToNextWindowKeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.moveAllRightwardTabsToNextWindowKeyString.value = newKey;
        moveAllRightwardTabsToNextWindowWarning.innerText = "";
        document_onChange();
    }
    else
    {
        moveAllRightwardTabsToNextWindowWarning.innerText = errorMessage;
    }
    
    return false;
}

function allowMoveAllLeftwardTabsToPreviousWindow_onChange()
{
    options.moveAllLeftwardTabsToPreviousWindowKeyString.disabled = !options.allowMoveAllLeftwardTabsToPreviousWindow.checked;
}

function moveAllLeftwardTabsToPreviousWindowKeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.moveAllLeftwardTabsToPreviousWindowKeyString.value = newKey;
        moveAllLeftwardTabsToPreviousWindowWarning.innerText = "";
        document_onChange();
    }
    else
    {
        moveAllLeftwardTabsToPreviousWindowWarning.innerText = errorMessage;
    }
    
    return false;
}

function allowLastFocusedToggle_onChange()
{
    options.toggleToLastFocusedKeyString.disabled = !options.allowLastFocusedToggle.checked;
}

function toggleToLastFocusedKeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.toggleToLastFocusedKeyString.value = newKey;
        toggleToLastFocusedWarning.innerText = "";
        document_onChange();
    }
    else
    {
        toggleToLastFocusedWarning.innerText = errorMessage;
    }
    
    return false;
}

function allowMergeAllTabs_onChange()
{
    options.mergeAllTabsKeyString.disabled = !options.allowMergeAllTabs.checked;
}

function mergeAllTabsKeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.mergeAllTabsKeyString.value = newKey;
        mergeAllTabsWarning.innerText = "";
        document_onChange();
    }
    else
    {
        mergeAllTabsWarning.innerText = errorMessage;
    }
    
    return false;
}

function enableReorderingTabs_onChange()
{
    var disabledState = !options.enableReorderingTabs.checked;
    var checkedState = options.enableReorderingTabs.checked;
    
    options.allowReorderTo1.disabled = disabledState;
    options.allowReorderTo1.checked = checkedState;
    options.reorderTo1KeyString.disabled = disabledState;
    
    options.allowReorderTo2.disabled = disabledState;
    options.allowReorderTo2.checked = checkedState;
    options.reorderTo2KeyString.disabled = disabledState;
    
    options.allowReorderTo3.disabled = disabledState;
    options.allowReorderTo3.checked = checkedState;
    options.reorderTo3KeyString.disabled = disabledState;
    
    options.allowReorderTo4.disabled = disabledState;
    options.allowReorderTo4.checked = checkedState;
    options.reorderTo4KeyString.disabled = disabledState;
    
    options.allowReorderTo5.disabled = disabledState;
    options.allowReorderTo5.checked = checkedState;
    options.reorderTo5KeyString.disabled = disabledState;
    
    options.allowReorderTo6.disabled = disabledState;
    options.allowReorderTo6.checked = checkedState;
    options.reorderTo6KeyString.disabled = disabledState;
    
    options.allowReorderTo7.disabled = disabledState;
    options.allowReorderTo7.checked = checkedState;
    options.reorderTo7KeyString.disabled = disabledState;
    
    options.allowReorderTo8.disabled = disabledState;
    options.allowReorderTo8.checked = checkedState;
    options.reorderTo8KeyString.disabled = disabledState;
    
    options.allowReorderTo9.disabled = disabledState;
    options.allowReorderTo9.checked = checkedState;
    options.reorderTo9KeyString.disabled = disabledState;
    
    options.allowReorderToLast.disabled = disabledState;
    options.allowReorderToLast.checked = checkedState;
    options.reorderToLastKeyString.disabled = disabledState;
	
    options.allowMoveTabForward.disabled = disabledState;
    options.allowMoveTabForward.checked = checkedState;
    options.moveTabForwardKeyString.disabled = disabledState;
	
    options.allowMoveTabBackward.disabled = disabledState;
    options.allowMoveTabBackward.checked = checkedState;
    options.moveTabBackwardKeyString.disabled = disabledState;
}

function allowReorderTo1_onChange()
{
    options.reorderTo1KeyString.disabled = !options.allowReorderTo1.checked;
}

function reorderTo1KeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderTo1KeyString.value = newKey;
        reorderTo1Warning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderTo1Warning.innerText = errorMessage;
    }    
    
    return false;
}

function allowReorderTo2_onChange()
{
    options.reorderTo2KeyString.disabled = !options.allowReorderTo2.checked;
}

function reorderTo2KeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderTo2KeyString.value = newKey;
        reorderTo2Warning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderTo2Warning.innerText = errorMessage;
    }
    
    return false;
}
    
function allowReorderTo3_onChange()
{
    options.reorderTo3KeyString.disabled = !options.allowReorderTo3.checked;
}

function reorderTo3KeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderTo3KeyString.value = newKey;
        reorderTo3Warning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderTo3Warning.innerText = errorMessage;
    }
    
    return false;
}
    
function allowReorderTo4_onChange()
{
    options.reorderTo4KeyString.disabled = !options.allowReorderTo4.checked;
}

function reorderTo4KeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderTo4KeyString.value = newKey;
        reorderTo4Warning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderTo4Warning.innerText = errorMessage;
    }
    
    return false;
}
    
function allowReorderTo5_onChange()
{
    options.reorderTo5KeyString.disabled = !options.allowReorderTo5.checked;
}

function reorderTo5KeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderTo5KeyString.value = newKey;
        reorderTo5Warning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderTo5Warning.innerText = errorMessage;
    }
    
    return false;
}
    
function allowReorderTo6_onChange()
{
    options.reorderTo6KeyString.disabled = !options.allowReorderTo6.checked;
}

function reorderTo6KeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderTo6KeyString.value = newKey;
        reorderTo6Warning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderTo6Warning.innerText = errorMessage;
    }
    
    return false;
}
    
function allowReorderTo7_onChange()
{
    options.reorderTo7KeyString.disabled = !options.allowReorderTo7.checked;
}

function reorderTo7KeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderTo7KeyString.value = newKey;
        reorderTo7Warning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderTo7Warning.innerText = errorMessage;
    }
    
    return false;
}
    
function allowReorderTo8_onChange()
{
    options.reorderTo8KeyString.disabled = !options.allowReorderTo8.checked;
}

function reorderTo8KeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderTo8KeyString.value = newKey;
        reorderTo8Warning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderTo8Warning.innerText = errorMessage;
    }
    
    return false;
}
    
function allowReorderTo9_onChange()
{
    options.reorderTo9KeyString.disabled = !options.allowReorderTo9.checked;
}

function reorderTo9KeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderTo9KeyString.value = newKey;
        reorderTo9Warning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderTo9Warning.innerText = errorMessage;
    }
    
    return false;
}
    
function allowReorderToLast_onChange()
{
    options.reorderToLastKeyString.disabled = !options.allowReorderToLast.checked;
}

function reorderToLastKeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.reorderToLastKeyString.value = newKey;
        reorderToLastWarning.innerText = "";
        document_onChange();
    }
    else
    {
        reorderToLastWarning.innerText = errorMessage;
    }
    
    return false;
}

function allowMoveTabForward_onChange()
{
    options.moveTabForwardKeyString.disabled = !options.allowMoveTabForward.checked;
}

function moveTabForwardKeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.moveTabForwardKeyString.value = newKey;
        moveTabForwardWarning.innerText = "";
        document_onChange();
    }
    else
    {
        moveTabForwardWarning.innerText = errorMessage;
    }
    
    return false;
}

function allowMoveTabBackward_onChange()
{
    options.moveTabBackwardKeyString.disabled = !options.allowMoveTabBackward.checked;
}

function moveTabBackwardKeyString_onKeydown(e)
{
    if (e.which == 16 || e.which == 17 || e.which == 18)
    {
        return;
    }
    
    var newKey = getKeyString(e);
    var errorMessage = checkForKeyConflict(newKey);
    if (errorMessage == "")
    {
        options.moveTabBackwardKeyString.value = newKey;
        moveTabBackwardWarning.innerText = "";
        document_onChange();
    }
    else
    {
        moveTabBackwardWarning.innerText = errorMessage;
    }
    
    return false;
}
    
function saveChangesButton_onClick()
{
    var errorFound = false;
    var pendingKeyChanges = document.getElementsByTagName("input");
    for (var i = 0; i < pendingKeyChanges.length - 1; i++)
    {
        for (var j = 0; j <= pendingKeyChanges.length - 1; j++)   
        {
            if (pendingKeyChanges[i].type == "text" && 
                pendingKeyChanges[j].type == "text" &&
                pendingKeyChanges[i].disabled == false &&
                pendingKeyChanges[j].disabled == false &&
                i != j)
            {
                if (pendingKeyChanges[i].value == pendingKeyChanges[j].value)
                {
                    document.getElementById(pendingKeyChanges[i].name.replace("KeyString", "Warning")).innerText = "Duplicate Entry";
                    errorFound = true;
                }
                
                if (pendingKeyChanges[i].value == "Invalid key")
                {
                    document.getElementById(pendingKeyChanges[i].name.replace("KeyString", "Warning")).innerText = 
                        "Invalid Entry: Enter a valid key or disable this setting";
                    errorFound = true;
                }
            }
        }
    }   
    
    if (errorFound)
    {
        options.saveChangesButton.value = "Can't Save";
        options.saveChangesButton.disabled = true;
        return;   
    }

    window.localStorage.enableMoveTabsToWindow = options.enableMoveTabsToWindow.checked;
    
    window.localStorage.allowMoveTabToPreviousWindow = options.allowMoveTabToPreviousWindow.checked;
    if (options.allowMoveTabToPreviousWindow.checked)
    {
        window.localStorage.moveTabToPreviousWindowKeyString = options.moveTabToPreviousWindowKeyString.value;
    }
    else
    {
        delete window.localStorage.moveTabToPreviousWindowKeyString;
    }

    window.localStorage.allowMoveTabToNextWindow = options.allowMoveTabToNextWindow.checked;
    if (options.allowMoveTabToNextWindow.checked)
    {
        window.localStorage.moveTabToNextWindowKeyString = options.moveTabToNextWindowKeyString.value;
    }
    else
    {
        delete window.localStorage.moveTabToNextWindowKeyString;
    }
	
    window.localStorage.allowMoveAllRightwardTabsToNextWindow = options.allowMoveAllRightwardTabsToNextWindow.checked;
    if (options.allowMoveAllRightwardTabsToNextWindow.checked)
    {
        window.localStorage.moveAllRightwardTabsToNextWindowKeyString = options.moveAllRightwardTabsToNextWindowKeyString.value;
    }
    else
    {
        delete window.localStorage.moveAllRightwardTabsToNextWindowKeyString;
    }
	
    window.localStorage.allowMoveAllLeftwardTabsToPreviousWindow = options.allowMoveAllLeftwardTabsToPreviousWindow.checked;
    if (options.allowMoveAllLeftwardTabsToPreviousWindow.checked)
    {
        window.localStorage.moveAllLeftwardTabsToPreviousWindowKeyString = options.moveAllLeftwardTabsToPreviousWindowKeyString.value;
    }
    else
    {
        delete window.localStorage.moveAllLeftwardTabsToPreviousWindowKeyString;
    }
	
    window.localStorage.allowLastFocusedToggle = options.allowLastFocusedToggle.checked;
    if (options.allowLastFocusedToggle.checked)
    {
        window.localStorage.toggleToLastFocusedKeyString = options.toggleToLastFocusedKeyString.value;
    }
    else
    {
        delete window.localStorage.toggleToLastFocusedKeyString;
    }
    
    window.localStorage.allowMergeAllTabs = options.allowMergeAllTabs.checked;
    if (options.allowMergeAllTabs.checked)
    {
        window.localStorage.mergeAllTabsKeyString = options.mergeAllTabsKeyString.value;
    }
    else
    {
        delete window.localStorage.mergeAllTabsKeyString;    
    }   
    
    window.localStorage.enableReorderingTabs = options.enableReorderingTabs.checked;
    
    window.localStorage.allowReorderTo1 = options.allowReorderTo1.checked;
    if (options.allowReorderTo1.checked)
    {
        window.localStorage.reorderTo1KeyString = options.reorderTo1KeyString.value;
    }
    else
    {
        delete window.localStorage.reorderTo1KeyString;
    }
    
    window.localStorage.allowReorderTo2 = options.allowReorderTo2.checked;
    if (options.allowReorderTo2.checked)
    {
        window.localStorage.reorderTo2KeyString = options.reorderTo2KeyString.value;
    }
    else
    {
        delete window.localStorage.reorderTo2KeyString;
    }
    
    window.localStorage.allowReorderTo3 = options.allowReorderTo3.checked;
    if (options.allowReorderTo3.checked)
    {
        window.localStorage.reorderTo3KeyString = options.reorderTo3KeyString.value;
    }
    else
    {
        delete window.localStorage.reorderTo3KeyString;
    }
    
    window.localStorage.allowReorderTo4 = options.allowReorderTo4.checked;
    if (options.allowReorderTo4.checked)
    {
        window.localStorage.reorderTo4KeyString = options.reorderTo4KeyString.value;
    }
    else
    {
        delete window.localStorage.reorderTo4KeyString;
    }
    
    window.localStorage.allowReorderTo5 = options.allowReorderTo5.checked;
    if (options.allowReorderTo5.checked)
    {
        window.localStorage.reorderTo5KeyString = options.reorderTo5KeyString.value;
    }
    else
    {
        delete window.localStorage.reorderTo5KeyString;
    }
    
    window.localStorage.allowReorderTo6 = options.allowReorderTo6.checked;
    if (options.allowReorderTo6.checked)
    {
        window.localStorage.reorderTo6KeyString = options.reorderTo6KeyString.value;
    }
    else
    {
        delete window.localStorage.reorderTo6KeyString;
    }
    
    window.localStorage.allowReorderTo7 = options.allowReorderTo7.checked;
    if (options.allowReorderTo7.checked)
    {
        window.localStorage.reorderTo7KeyString = options.reorderTo7KeyString.value;
    }
    else
    {
        delete window.localStorage.reorderTo7KeyString;
    }
    
    window.localStorage.allowReorderTo8 = options.allowReorderTo8.checked;
    if (options.allowReorderTo8.checked)
    {
        window.localStorage.reorderTo8KeyString = options.reorderTo8KeyString.value;
    }
    else
    {
        delete window.localStorage.reorderTo8KeyString;
    }
    
    window.localStorage.allowReorderTo9 = options.allowReorderTo9.checked;
    if (options.allowReorderTo9.checked)
    {
        window.localStorage.reorderTo9KeyString = options.reorderTo9KeyString.value;
    }
    else
    {
        delete window.localStorage.reorderTo9KeyString;
    }
    
    window.localStorage.allowReorderToLast = options.allowReorderToLast.checked;
    if (options.allowReorderToLast.checked)
    {
        window.localStorage.reorderToLastKeyString = options.reorderToLastKeyString.value;
    }
    else
    {
        delete window.localStorage.reorderToLastKeyString;
    }
	
    window.localStorage.allowMoveTabForward = options.allowMoveTabForward.checked;
    if (options.allowMoveTabForward.checked)
    {
        window.localStorage.moveTabForwardKeyString = options.moveTabForwardKeyString.value;
    }
    else
    {
        delete window.localStorage.moveTabForwardKeyString;
    }
	
    window.localStorage.allowMoveTabBackward = options.allowMoveTabBackward.checked;
    if (options.allowMoveTabBackward.checked)
    {
        window.localStorage.moveTabBackwardKeyString = options.moveTabBackwardKeyString.value;
    }
    else
    {
        delete window.localStorage.moveTabBackwardKeyString;
    }
    
    clearAllErrors();
    options.saveChangesButton.value = "Saved";
    options.saveChangesButton.disabled = true;
}

function resetToDefaultButton_onClick()
{
    if (!confirm("You sure?"))
    {
        return;
    }
    
    loadDefaultSettings();
    saveChangesButton_onClick();
}

function clearAllErrors()
{
    var spanElements = document.getElementsByTagName("span");
    for (var i = 0; i < spanElements.length; i++)
    {
        if (spanElements[i].className == "warning")
        {
            spanElements[i].innerText = "";
        }
    }
}

function loadKeysFromLocalStorage()
{
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++)
    {
        if (window.localStorage[inputElements[i].name] != null)
        {
            if (inputElements[i].type == "checkbox")
            {
                inputElements[i].checked = (window.localStorage[inputElements[i].name] == "true");
                fireChangeEvent(inputElements[i].name);
            }
            else if (inputElements[i].type == "text")
            {                
                inputElements[i].value = window.localStorage[inputElements[i].name];
            }
        }
    }
}

function fireChangeEvent(eventName)
{
    switch(eventName)
    {
        case "enableMoveTabsToWindow":
            enableMoveTabsToWindow_onChange();
            break;
        case "allowMoveTabToPreviousWindow":
            allowMoveTabToPreviousWindow_onChange()
            break;
        case "allowMoveTabToNextWindow":
            allowMoveTabToNextWindow_onChange();
            break;
        case "allowMoveAllRightwardTabsToNextWindow":
            allowMoveAllRightwardTabsToNextWindow_onChange();
            break;
        case "allowMoveAllLeftwardTabsToPreviousWindow":
            allowMoveAllLeftwardTabsToPreviousWindow_onChange();
            break;
        case "allowLastFocusedToggle":
            allowLastFocusedToggle_onChange();
            break;
        case "allowMergeAllTabs":
            allowMergeAllTabs_onChange();
            break;
        case "enableReorderingTabs":
            enableReorderingTabs_onChange();
            break;
        case "allowReorderTo1":
            allowReorderTo1_onChange();
            break;
        case "allowReorderTo2":
            allowReorderTo2_onChange();
            break;
        case "allowReorderTo3":
            allowReorderTo3_onChange();
            break;
        case "allowReorderTo4":
            allowReorderTo4_onChange();
            break;
        case "allowReorderTo5":
            allowReorderTo5_onChange();
            break;
        case "allowReorderTo6":
            allowReorderTo6_onChange();
            break;
        case "allowReorderTo7":
            allowReorderTo7_onChange();
            break;
        case "allowReorderTo8":
            allowReorderTo8_onChange();
            break;
        case "allowReorderTo9":
            allowReorderTo9_onChange();
            break;
        case "allowReorderToLast":
            allowReorderToLast_onChange();
            break;
        case "allowMoveTabForward":
            allowMoveTabForward_onChange();
            break;
        case "allowMoveTabBackward":
            allowMoveTabBackward_onChange();
            break;
    }
}

function loadDefaultSettings()
{
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++)
    {
        if (inputElements[i].type == "checkbox")
        {
            inputElements[i].checked = true;
            fireChangeEvent(inputElements[i].name);
        }
    }
    
    document.getElementsByName("moveTabToPreviousWindowKeyString")[0].value = "Ctrl + Alt + Left";
    document.getElementsByName("moveTabToNextWindowKeyString")[0].value = "Ctrl + Alt + Right";
	document.getElementsByName("moveAllRightwardTabsToNextWindowKeyString")[0].value = "Ctrl + Shift + Up";
	document.getElementsByName("moveAllLeftwardTabsToPreviousWindowKeyString")[0].value = "Ctrl + Shift + Down";
    document.getElementsByName("toggleToLastFocusedKeyString")[0].value = "Ctrl + B";
    document.getElementsByName("mergeAllTabsKeyString")[0].value = "Ctrl + Alt + M";
    document.getElementsByName("reorderTo1KeyString")[0].value = "Ctrl + Alt + 1";
    document.getElementsByName("reorderTo2KeyString")[0].value = "Ctrl + Alt + 2";
    document.getElementsByName("reorderTo3KeyString")[0].value = "Ctrl + Alt + 3";
    document.getElementsByName("reorderTo4KeyString")[0].value = "Ctrl + Alt + 4";
    document.getElementsByName("reorderTo5KeyString")[0].value = "Ctrl + Alt + 5";
    document.getElementsByName("reorderTo6KeyString")[0].value = "Ctrl + Alt + 6";
    document.getElementsByName("reorderTo7KeyString")[0].value = "Ctrl + Alt + 7";
    document.getElementsByName("reorderTo8KeyString")[0].value = "Ctrl + Alt + 8";
    document.getElementsByName("reorderTo9KeyString")[0].value = "Ctrl + Alt + 9";
    document.getElementsByName("reorderToLastKeyString")[0].value = "Ctrl + Shift + End";
	document.getElementsByName("moveTabForwardKeyString")[0].value = "Ctrl + Shift + Right";
	document.getElementsByName("moveTabBackwardKeyString")[0].value = "Ctrl + Shift + Left";
}

function getKeyString(e)
{       
    var newKeyPress = "";
    if (e.ctrlKey)
    {
        newKeyPress = "Ctrl";
    }

    if (e.shiftKey)
    {
        if (newKeyPress == "")
        {
            newKeyPress = "Shift";
        }
        else
        {
            newKeyPress += " + Shift";
        }
    }

    if (e.altKey)
    {
        if (newKeyPress == "")
        {
            newKeyPress = "Alt";
        }
        else
        {
            newKeyPress += " + Alt";
        }
    }

    var literalString = keyToLiteralString(e.which);
    if (literalString == "")
    {
        return "Invalid key"
    }
    
    if (newKeyPress == "")
    {
        return literalString;
    }
    else
    {
        return newKeyPress + " + " + literalString;
    }
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
        case 192: return "`";
        case 219: return "[";
        case 220: return "\\";
        case 221: return "]";
    }
    
    return "";
}

function checkForKeyConflict(keyCombination)
{   
    var reservedKeys = "Ctrl + N|Ctrl + T|Ctrl + Shift + N|Ctrl + O|Ctrl + Shift + T|Esc|Ctrl + 1|Ctrl + 2|Ctrl + 3|Ctrl + 4|Ctrl + 5|Ctrl + 6|Ctrl + 7|Ctrl + 8|Ctrl + 9|Ctrl + PageDown|Ctrl + PageUp|Alt + F4|Ctrl + W|Ctrl + F4|Alt + Left|Alt + Right|Alt + Home|Alt + F|Alt + E|Ctrl + Shift + B|Ctrl + H|Ctrl + J|Shift + Esc|Shift + Alt + T|Ctrl + Shift + J|Ctrl + Shift + Delete|F1|F6|Ctrl + L|Alt + D|Ctrl + K|Ctrl + E|Ctrl + Left|Ctrl + Right|PageUp|PageDown|Ctrl + P|Ctrl + S|F5|Ctrl + R|Esc|Ctrl + F|Ctrl + G|F3|Ctrl + Shift + G|Shift + F3|Ctrl + F5|Shift + F5|Ctrl + U|Ctrl + D|Ctrl + Shift + D|F11|Ctrl + -|Ctrl + 0|Spacebar|Home|End|Ctrl + C|Ctrl + V|Ctrl + Shift + V|Shift + Delete|Ctrl + X|Ctrl + End|Ctrl + Alt + End|Ctrl + Home|Ctrl + Alt + Home|Ctrl + Z";
    
    var reservedCommands = "opens a new window.|opens a new tab.|opens a new window in incognito mode.|opens a file from your computer in Google Chrome.|reopens the last tab you've closed.|while dragging a tab returns the tab to its original position.|switches to the first tab on the tab strip.|switches to the second tab on the tab strip.|switches to the third tab on the tab strip.|switches to the fourth tab on the tab strip.|switches to the fith tab on the tab strip.|switches to the sixth tab on the tab strip.|switches to the seventh tab on the tab strip.|switches to the eighth tab on the tab strip.|switches to the last tab.|switches to the next tab.|switches to the previous tab.|closes the current window.|closes the current tab or pop-up.|closes the current tab or pop-up.|goes to the previous page in your browsing history for the tab.|goes to the next page in your browsing history for the tab.|opens your homepage in your current window.|opens the tools menu, which lets you customize and control google chrome.|opens the page menu, which lets you control the page you're viewing.|toggles the bookmarks bar on and off.|opens the history page.|opens the downloads page.|opens the task manager.|sets the focus on the browser toolbar.|opens developer tools.|opens the clear browsing data dialog.|opens the help center in a new tab.|highlights the url.|highlights the url.|highlights the url.|places a '?' in the address bar. Type a search term after the question mark to perform a search using your default search engine.|places a '?' in the address bar. Type a search term after the question mark to perform a search using your default search engine.|moves your cursor to the preceding key term in the address bar.|moves your cursor to the next key term in the address bar.|selects the first entry in the drop-down menu when the address bar drop-down menu is visible.|selects the last entry in the drop-down menu when the address bar drop-down menu is visible.|prints your current page.|saves your current page.|reloads your current page.|reloads your current page.|stops the loading of your current page.|opens the find bar.|finds the next match for your input in the find bar.|finds the next match for your input in the find bar.|finds the previous match for your input in the find bar.|finds the previous match for your input in the find bar.|reloads your current page, ignoring cached content.|reloads your current page, ignoring cached content.|opens the source of your current page.|saves your current webpage as a bookmark.|saves all open pages as bookmarks in a new folder.|opens your page in full-screen mode.|makes everything on the page smaller.|returns everything on the page to normal size.|scrolls down the web page.|goes to the top of the page.|goes to the bottom of the page.|copies highlighted content to the clipboard.|pastes content from the clipboard.|paste content from the clipboard without formatting.|deletes the highlighted content and copies it to the clipboard.|deletes the highlighted content and copies it to the clipboard.|goes to the bottom of the page.|goes to the bottom of the page.|goes to the top of the page.|goes to the top of the page.|is the shortcut for Undo";
    
    var reservedKeysArray = reservedKeys.split("|");
    var reservedCommandsArray = reservedCommands.split("|");
    
    for (var i = 0; i < reservedKeysArray.length; i++)
    {
        if (reservedKeysArray[i] == keyCombination)
        {
            return "Reserved: " + keyCombination + " " + reservedCommandsArray[i];
        }
    }
    
    return "";   
}
