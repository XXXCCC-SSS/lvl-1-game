gdjs.LVL_328Code = {};
gdjs.LVL_328Code.localVariables = [];
gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects1= [];
gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects2= [];
gdjs.LVL_328Code.GDEXIT_9595HOLEObjects1= [];
gdjs.LVL_328Code.GDEXIT_9595HOLEObjects2= [];
gdjs.LVL_328Code.GDMONTYObjects1= [];
gdjs.LVL_328Code.GDMONTYObjects2= [];
gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects1= [];
gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects2= [];
gdjs.LVL_328Code.GDPORTALObjects1= [];
gdjs.LVL_328Code.GDPORTALObjects2= [];
gdjs.LVL_328Code.GDLAVAObjects1= [];
gdjs.LVL_328Code.GDLAVAObjects2= [];
gdjs.LVL_328Code.GDQUIT_9595TEXTObjects1= [];
gdjs.LVL_328Code.GDQUIT_9595TEXTObjects2= [];
gdjs.LVL_328Code.GDMAIN_9595MENU_9595TEXTObjects1= [];
gdjs.LVL_328Code.GDMAIN_9595MENU_9595TEXTObjects2= [];
gdjs.LVL_328Code.GDRETRY_9595TEXTObjects1= [];
gdjs.LVL_328Code.GDRETRY_9595TEXTObjects2= [];
gdjs.LVL_328Code.GDNEXT_9595LEVEL_9595TEXTObjects1= [];
gdjs.LVL_328Code.GDNEXT_9595LEVEL_9595TEXTObjects2= [];
gdjs.LVL_328Code.GDMAIN_9595MENU_9595DECORATIONObjects1= [];
gdjs.LVL_328Code.GDMAIN_9595MENU_9595DECORATIONObjects2= [];
gdjs.LVL_328Code.GDMONTY2Objects1= [];
gdjs.LVL_328Code.GDMONTY2Objects2= [];


gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.LVL_328Code.GDMONTYObjects1});
gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDPORTALObjects1Objects = Hashtable.newFrom({"PORTAL": gdjs.LVL_328Code.GDPORTALObjects1});
gdjs.LVL_328Code.asyncCallback16978044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LVL_328Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.LVL_328Code.GDLAVAObjects2);
{for(var i = 0, len = gdjs.LVL_328Code.GDLAVAObjects2.length ;i < len;++i) {
    gdjs.LVL_328Code.GDLAVAObjects2[i].addPolarForce(-(90), 6, 0);
}
}gdjs.LVL_328Code.localVariables.length = 0;
}
gdjs.LVL_328Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LVL_328Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LVL_328Code.asyncCallback16978044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.LVL_328Code.GDMONTYObjects1});
gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.LVL_328Code.GDMONTYObjects1});
gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDLAVAObjects1Objects = Hashtable.newFrom({"LAVA": gdjs.LVL_328Code.GDLAVAObjects1});
gdjs.LVL_328Code.asyncCallback16984340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LVL_328Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DIED LVL 8", false);
}gdjs.LVL_328Code.localVariables.length = 0;
}
gdjs.LVL_328Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LVL_328Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LVL_328Code.asyncCallback16984340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LVL_328Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("QUIT_BUTTON"), gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects1[k] = gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAIN MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);
gdjs.copyArray(runtimeScene.getObjects("PORTAL"), gdjs.LVL_328Code.GDPORTALObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMONTYObjects1Objects, gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDPORTALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LVL 8 CUTSCENE", false);
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LVL_328Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MAZE_WALLS_TUTORIAL"), gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMONTYObjects1Objects, gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects1 */
/* Reuse gdjs.LVL_328Code.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].separateFromObjectsList(gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.LVL_328Code.GDLAVAObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LVL_328Code.GDMONTYObjects1.length;i<l;++i) {
    if ( gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.LVL_328Code.GDMONTYObjects1[k] = gdjs.LVL_328Code.GDMONTYObjects1[i];
        ++k;
    }
}
gdjs.LVL_328Code.GDMONTYObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDMONTYObjects1Objects, gdjs.LVL_328Code.mapOfGDgdjs_9546LVL_9595328Code_9546GDLAVAObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.LVL_328Code.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].activateBehavior("TopDownMovement", false);
}
}{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{ //Subevents
gdjs.LVL_328Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Animation").setAnimationName("MONTY STATIONARY");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Animation").setAnimationName("MONTY STATIONARY");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Animation").setAnimationName("MONTY STATIONARY");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Animation").setAnimationName("MONTY STATIONARY");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LVL_328Code.GDMONTYObjects1.length;i<l;++i) {
    if ( gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.LVL_328Code.GDMONTYObjects1[k] = gdjs.LVL_328Code.GDMONTYObjects1[i];
        ++k;
    }
}
gdjs.LVL_328Code.GDMONTYObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LVL_328Code.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Animation").setAnimationName("MONTY WALKING");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LVL_328Code.GDMONTYObjects1.length;i<l;++i) {
    if ( gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.LVL_328Code.GDMONTYObjects1[k] = gdjs.LVL_328Code.GDMONTYObjects1[i];
        ++k;
    }
}
gdjs.LVL_328Code.GDMONTYObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LVL_328Code.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Animation").setAnimationName("MONTY WALKING");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LVL_328Code.GDMONTYObjects1.length;i<l;++i) {
    if ( gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.LVL_328Code.GDMONTYObjects1[k] = gdjs.LVL_328Code.GDMONTYObjects1[i];
        ++k;
    }
}
gdjs.LVL_328Code.GDMONTYObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LVL_328Code.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Animation").setAnimationName("MONTY WALKING");
}
}{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_328Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LVL_328Code.GDMONTYObjects1.length;i<l;++i) {
    if ( gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.LVL_328Code.GDMONTYObjects1[k] = gdjs.LVL_328Code.GDMONTYObjects1[i];
        ++k;
    }
}
gdjs.LVL_328Code.GDMONTYObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LVL_328Code.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Animation").setAnimationName("MONTY WALKING");
}
}{for(var i = 0, len = gdjs.LVL_328Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_328Code.GDMONTYObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LVL_328Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.LVL_328Code.GDEXIT_9595HOLEObjects1.length = 0;
gdjs.LVL_328Code.GDEXIT_9595HOLEObjects2.length = 0;
gdjs.LVL_328Code.GDMONTYObjects1.length = 0;
gdjs.LVL_328Code.GDMONTYObjects2.length = 0;
gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.LVL_328Code.GDPORTALObjects1.length = 0;
gdjs.LVL_328Code.GDPORTALObjects2.length = 0;
gdjs.LVL_328Code.GDLAVAObjects1.length = 0;
gdjs.LVL_328Code.GDLAVAObjects2.length = 0;
gdjs.LVL_328Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.LVL_328Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.LVL_328Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.LVL_328Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.LVL_328Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.LVL_328Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.LVL_328Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.LVL_328Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;
gdjs.LVL_328Code.GDMAIN_9595MENU_9595DECORATIONObjects1.length = 0;
gdjs.LVL_328Code.GDMAIN_9595MENU_9595DECORATIONObjects2.length = 0;
gdjs.LVL_328Code.GDMONTY2Objects1.length = 0;
gdjs.LVL_328Code.GDMONTY2Objects2.length = 0;

gdjs.LVL_328Code.eventsList2(runtimeScene);
gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.LVL_328Code.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.LVL_328Code.GDEXIT_9595HOLEObjects1.length = 0;
gdjs.LVL_328Code.GDEXIT_9595HOLEObjects2.length = 0;
gdjs.LVL_328Code.GDMONTYObjects1.length = 0;
gdjs.LVL_328Code.GDMONTYObjects2.length = 0;
gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.LVL_328Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.LVL_328Code.GDPORTALObjects1.length = 0;
gdjs.LVL_328Code.GDPORTALObjects2.length = 0;
gdjs.LVL_328Code.GDLAVAObjects1.length = 0;
gdjs.LVL_328Code.GDLAVAObjects2.length = 0;
gdjs.LVL_328Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.LVL_328Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.LVL_328Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.LVL_328Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.LVL_328Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.LVL_328Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.LVL_328Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.LVL_328Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;
gdjs.LVL_328Code.GDMAIN_9595MENU_9595DECORATIONObjects1.length = 0;
gdjs.LVL_328Code.GDMAIN_9595MENU_9595DECORATIONObjects2.length = 0;
gdjs.LVL_328Code.GDMONTY2Objects1.length = 0;
gdjs.LVL_328Code.GDMONTY2Objects2.length = 0;


return;

}

gdjs['LVL_328Code'] = gdjs.LVL_328Code;
