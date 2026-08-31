gdjs.LVL_322Code = {};
gdjs.LVL_322Code.localVariables = [];
gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects1= [];
gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects2= [];
gdjs.LVL_322Code.GDMONTYObjects1= [];
gdjs.LVL_322Code.GDMONTYObjects2= [];
gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1= [];
gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects2= [];
gdjs.LVL_322Code.GDPORTALObjects1= [];
gdjs.LVL_322Code.GDPORTALObjects2= [];
gdjs.LVL_322Code.GDLAVAObjects1= [];
gdjs.LVL_322Code.GDLAVAObjects2= [];
gdjs.LVL_322Code.GDQUIT_9595TEXTObjects1= [];
gdjs.LVL_322Code.GDQUIT_9595TEXTObjects2= [];
gdjs.LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects1= [];
gdjs.LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects2= [];
gdjs.LVL_322Code.GDRETRY_9595TEXTObjects1= [];
gdjs.LVL_322Code.GDRETRY_9595TEXTObjects2= [];
gdjs.LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects1= [];
gdjs.LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects2= [];


gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.LVL_322Code.GDMONTYObjects1});
gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDPORTALObjects1Objects = Hashtable.newFrom({"PORTAL": gdjs.LVL_322Code.GDPORTALObjects1});
gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.LVL_322Code.GDMONTYObjects1});
gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.LVL_322Code.asyncCallback14917908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LVL_322Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.LVL_322Code.GDLAVAObjects2);
{for(var i = 0, len = gdjs.LVL_322Code.GDLAVAObjects2.length ;i < len;++i) {
    gdjs.LVL_322Code.GDLAVAObjects2[i].addPolarForce(-(90), 5, 0);
}
}gdjs.LVL_322Code.localVariables.length = 0;
}
gdjs.LVL_322Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LVL_322Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LVL_322Code.asyncCallback14917908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.LVL_322Code.GDMONTYObjects1});
gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDLAVAObjects1Objects = Hashtable.newFrom({"LAVA": gdjs.LVL_322Code.GDLAVAObjects1});
gdjs.LVL_322Code.asyncCallback14918276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LVL_322Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DIED LVL 2", false);
}gdjs.LVL_322Code.localVariables.length = 0;
}
gdjs.LVL_322Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LVL_322Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LVL_322Code.asyncCallback14918276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LVL_322Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("QUIT_BUTTON"), gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects1[k] = gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAIN MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_322Code.GDMONTYObjects1);
gdjs.copyArray(runtimeScene.getObjects("PORTAL"), gdjs.LVL_322Code.GDPORTALObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMONTYObjects1Objects, gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDPORTALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "COMPLETED LVL 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MAZE_WALLS_TUTORIAL"), gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_322Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMONTYObjects1Objects, gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1 */
/* Reuse gdjs.LVL_322Code.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.LVL_322Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_322Code.GDMONTYObjects1[i].separateFromObjectsList(gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LVL_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.LVL_322Code.GDLAVAObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_322Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDMONTYObjects1Objects, gdjs.LVL_322Code.mapOfGDgdjs_9546LVL_9595322Code_9546GDLAVAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LVL_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LVL_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.LVL_322Code.GDMONTYObjects1.length = 0;
gdjs.LVL_322Code.GDMONTYObjects2.length = 0;
gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.LVL_322Code.GDPORTALObjects1.length = 0;
gdjs.LVL_322Code.GDPORTALObjects2.length = 0;
gdjs.LVL_322Code.GDLAVAObjects1.length = 0;
gdjs.LVL_322Code.GDLAVAObjects2.length = 0;
gdjs.LVL_322Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.LVL_322Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.LVL_322Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.LVL_322Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;

gdjs.LVL_322Code.eventsList2(runtimeScene);
gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.LVL_322Code.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.LVL_322Code.GDMONTYObjects1.length = 0;
gdjs.LVL_322Code.GDMONTYObjects2.length = 0;
gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.LVL_322Code.GDPORTALObjects1.length = 0;
gdjs.LVL_322Code.GDPORTALObjects2.length = 0;
gdjs.LVL_322Code.GDLAVAObjects1.length = 0;
gdjs.LVL_322Code.GDLAVAObjects2.length = 0;
gdjs.LVL_322Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.LVL_322Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.LVL_322Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.LVL_322Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;


return;

}

gdjs['LVL_322Code'] = gdjs.LVL_322Code;
