gdjs.LVL_324Code = {};
gdjs.LVL_324Code.localVariables = [];
gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects1= [];
gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects2= [];
gdjs.LVL_324Code.GDMONTYObjects1= [];
gdjs.LVL_324Code.GDMONTYObjects2= [];
gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects1= [];
gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects2= [];
gdjs.LVL_324Code.GDPORTALObjects1= [];
gdjs.LVL_324Code.GDPORTALObjects2= [];
gdjs.LVL_324Code.GDLAVAObjects1= [];
gdjs.LVL_324Code.GDLAVAObjects2= [];
gdjs.LVL_324Code.GDQUIT_9595TEXTObjects1= [];
gdjs.LVL_324Code.GDQUIT_9595TEXTObjects2= [];
gdjs.LVL_324Code.GDMAIN_9595MENU_9595TEXTObjects1= [];
gdjs.LVL_324Code.GDMAIN_9595MENU_9595TEXTObjects2= [];
gdjs.LVL_324Code.GDRETRY_9595TEXTObjects1= [];
gdjs.LVL_324Code.GDRETRY_9595TEXTObjects2= [];
gdjs.LVL_324Code.GDNEXT_9595LEVEL_9595TEXTObjects1= [];
gdjs.LVL_324Code.GDNEXT_9595LEVEL_9595TEXTObjects2= [];


gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.LVL_324Code.GDMONTYObjects1});
gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDPORTALObjects1Objects = Hashtable.newFrom({"PORTAL": gdjs.LVL_324Code.GDPORTALObjects1});
gdjs.LVL_324Code.asyncCallback15051060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LVL_324Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.LVL_324Code.GDLAVAObjects2);
{for(var i = 0, len = gdjs.LVL_324Code.GDLAVAObjects2.length ;i < len;++i) {
    gdjs.LVL_324Code.GDLAVAObjects2[i].addPolarForce(-(90), 5, 0);
}
}gdjs.LVL_324Code.localVariables.length = 0;
}
gdjs.LVL_324Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LVL_324Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LVL_324Code.asyncCallback15051060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.LVL_324Code.GDMONTYObjects1});
gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.LVL_324Code.GDMONTYObjects1});
gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDLAVAObjects1Objects = Hashtable.newFrom({"LAVA": gdjs.LVL_324Code.GDLAVAObjects1});
gdjs.LVL_324Code.asyncCallback15055780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LVL_324Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DIED LVL 4", false);
}gdjs.LVL_324Code.localVariables.length = 0;
}
gdjs.LVL_324Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LVL_324Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LVL_324Code.asyncCallback15055780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LVL_324Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("QUIT_BUTTON"), gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects1[k] = gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAIN MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_324Code.GDMONTYObjects1);
gdjs.copyArray(runtimeScene.getObjects("PORTAL"), gdjs.LVL_324Code.GDPORTALObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMONTYObjects1Objects, gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDPORTALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "COMPLETED LVL 4", false);
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LVL_324Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MAZE_WALLS_TUTORIAL"), gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_324Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMONTYObjects1Objects, gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects1 */
/* Reuse gdjs.LVL_324Code.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.LVL_324Code.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.LVL_324Code.GDMONTYObjects1[i].separateFromObjectsList(gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.LVL_324Code.GDLAVAObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.LVL_324Code.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDMONTYObjects1Objects, gdjs.LVL_324Code.mapOfGDgdjs_9546LVL_9595324Code_9546GDLAVAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LVL_324Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LVL_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.LVL_324Code.GDMONTYObjects1.length = 0;
gdjs.LVL_324Code.GDMONTYObjects2.length = 0;
gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.LVL_324Code.GDPORTALObjects1.length = 0;
gdjs.LVL_324Code.GDPORTALObjects2.length = 0;
gdjs.LVL_324Code.GDLAVAObjects1.length = 0;
gdjs.LVL_324Code.GDLAVAObjects2.length = 0;
gdjs.LVL_324Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.LVL_324Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.LVL_324Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.LVL_324Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.LVL_324Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.LVL_324Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.LVL_324Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.LVL_324Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;

gdjs.LVL_324Code.eventsList2(runtimeScene);
gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.LVL_324Code.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.LVL_324Code.GDMONTYObjects1.length = 0;
gdjs.LVL_324Code.GDMONTYObjects2.length = 0;
gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.LVL_324Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.LVL_324Code.GDPORTALObjects1.length = 0;
gdjs.LVL_324Code.GDPORTALObjects2.length = 0;
gdjs.LVL_324Code.GDLAVAObjects1.length = 0;
gdjs.LVL_324Code.GDLAVAObjects2.length = 0;
gdjs.LVL_324Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.LVL_324Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.LVL_324Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.LVL_324Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.LVL_324Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.LVL_324Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.LVL_324Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.LVL_324Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;


return;

}

gdjs['LVL_324Code'] = gdjs.LVL_324Code;
