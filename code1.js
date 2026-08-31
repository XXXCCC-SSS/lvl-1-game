gdjs.TUTORIAL_32LEVELCode = {};
gdjs.TUTORIAL_32LEVELCode.localVariables = [];
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXTObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXTObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595TEXTObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595TEXTObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXT2Objects1= [];
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXT2Objects2= [];
gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDPORTALObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDPORTALObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595TEXTObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595TEXTObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDMAIN_9595MENU_9595TEXTObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDMAIN_9595MENU_9595TEXTObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDRETRY_9595TEXTObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDRETRY_9595TEXTObjects2= [];
gdjs.TUTORIAL_32LEVELCode.GDNEXT_9595LEVEL_9595TEXTObjects1= [];
gdjs.TUTORIAL_32LEVELCode.GDNEXT_9595LEVEL_9595TEXTObjects2= [];


gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1});
gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1});
gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDPORTALObjects1Objects = Hashtable.newFrom({"PORTAL": gdjs.TUTORIAL_32LEVELCode.GDPORTALObjects1});
gdjs.TUTORIAL_32LEVELCode.asyncCallback14757684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TUTORIAL_32LEVELCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects2);
{for(var i = 0, len = gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects2.length ;i < len;++i) {
    gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects2[i].addPolarForce(-(90), 5, 0);
}
}gdjs.TUTORIAL_32LEVELCode.localVariables.length = 0;
}
gdjs.TUTORIAL_32LEVELCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TUTORIAL_32LEVELCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(20), (runtimeScene) => (gdjs.TUTORIAL_32LEVELCode.asyncCallback14757684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1});
gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDLAVAObjects1Objects = Hashtable.newFrom({"LAVA": gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects1});
gdjs.TUTORIAL_32LEVELCode.asyncCallback14758052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TUTORIAL_32LEVELCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DIED TUTORIAL LVL", false);
}gdjs.TUTORIAL_32LEVELCode.localVariables.length = 0;
}
gdjs.TUTORIAL_32LEVELCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TUTORIAL_32LEVELCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.TUTORIAL_32LEVELCode.asyncCallback14758052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TUTORIAL_32LEVELCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("QUIT_BUTTON"), gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects1[k] = gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAIN MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TO_GAME_BUTTON"), gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects1[k] = gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LVL 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MAZE_WALLS_TUTORIAL"), gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMONTYObjects1Objects, gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects1 */
/* Reuse gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1[i].separateFromObjectsList(gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1);
gdjs.copyArray(runtimeScene.getObjects("PORTAL"), gdjs.TUTORIAL_32LEVELCode.GDPORTALObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMONTYObjects1Objects, gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDPORTALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "COMPLETED TUTORIAL LVL", false);
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TUTORIAL_32LEVELCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDMONTYObjects1Objects, gdjs.TUTORIAL_32LEVELCode.mapOfGDgdjs_9546TUTORIAL_959532LEVELCode_9546GDLAVAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TUTORIAL_32LEVELCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.TUTORIAL_32LEVELCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXT2Objects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXT2Objects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDPORTALObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDPORTALObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;

gdjs.TUTORIAL_32LEVELCode.eventsList2(runtimeScene);
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595BUTTONObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTO_9595GAME_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXT2Objects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDTUTORIAL_9595TEXT2Objects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMONTYObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDPORTALObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDPORTALObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDLAVAObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.TUTORIAL_32LEVELCode.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;


return;

}

gdjs['TUTORIAL_32LEVELCode'] = gdjs.TUTORIAL_32LEVELCode;
