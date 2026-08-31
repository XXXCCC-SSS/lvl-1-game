gdjs.FINAL_32LVLCode = {};
gdjs.FINAL_32LVLCode.localVariables = [];
gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects1= [];
gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects2= [];
gdjs.FINAL_32LVLCode.GDEXIT_9595HOLEObjects1= [];
gdjs.FINAL_32LVLCode.GDEXIT_9595HOLEObjects2= [];
gdjs.FINAL_32LVLCode.GDMONTYObjects1= [];
gdjs.FINAL_32LVLCode.GDMONTYObjects2= [];
gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects1= [];
gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects2= [];
gdjs.FINAL_32LVLCode.GDPORTALObjects1= [];
gdjs.FINAL_32LVLCode.GDPORTALObjects2= [];
gdjs.FINAL_32LVLCode.GDLAVAObjects1= [];
gdjs.FINAL_32LVLCode.GDLAVAObjects2= [];
gdjs.FINAL_32LVLCode.GDQUIT_9595TEXTObjects1= [];
gdjs.FINAL_32LVLCode.GDQUIT_9595TEXTObjects2= [];
gdjs.FINAL_32LVLCode.GDMAIN_9595MENU_9595TEXTObjects1= [];
gdjs.FINAL_32LVLCode.GDMAIN_9595MENU_9595TEXTObjects2= [];
gdjs.FINAL_32LVLCode.GDRETRY_9595TEXTObjects1= [];
gdjs.FINAL_32LVLCode.GDRETRY_9595TEXTObjects2= [];
gdjs.FINAL_32LVLCode.GDNEXT_9595LEVEL_9595TEXTObjects1= [];
gdjs.FINAL_32LVLCode.GDNEXT_9595LEVEL_9595TEXTObjects2= [];


gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.FINAL_32LVLCode.GDMONTYObjects1});
gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDPORTALObjects1Objects = Hashtable.newFrom({"PORTAL": gdjs.FINAL_32LVLCode.GDPORTALObjects1});
gdjs.FINAL_32LVLCode.asyncCallback14622884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FINAL_32LVLCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.FINAL_32LVLCode.GDLAVAObjects2);
{for(var i = 0, len = gdjs.FINAL_32LVLCode.GDLAVAObjects2.length ;i < len;++i) {
    gdjs.FINAL_32LVLCode.GDLAVAObjects2[i].addPolarForce(-(90), 4.5, 0);
}
}gdjs.FINAL_32LVLCode.localVariables.length = 0;
}
gdjs.FINAL_32LVLCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FINAL_32LVLCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.FINAL_32LVLCode.asyncCallback14622884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.FINAL_32LVLCode.GDMONTYObjects1});
gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects = Hashtable.newFrom({"MAZE_WALLS_TUTORIAL": gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects1});
gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMONTYObjects1Objects = Hashtable.newFrom({"MONTY": gdjs.FINAL_32LVLCode.GDMONTYObjects1});
gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDLAVAObjects1Objects = Hashtable.newFrom({"LAVA": gdjs.FINAL_32LVLCode.GDLAVAObjects1});
gdjs.FINAL_32LVLCode.asyncCallback11790756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FINAL_32LVLCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DIED FINAL LVL", false);
}gdjs.FINAL_32LVLCode.localVariables.length = 0;
}
gdjs.FINAL_32LVLCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FINAL_32LVLCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.FINAL_32LVLCode.asyncCallback11790756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FINAL_32LVLCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("QUIT_BUTTON"), gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects1[k] = gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAIN MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.FINAL_32LVLCode.GDMONTYObjects1);
gdjs.copyArray(runtimeScene.getObjects("PORTAL"), gdjs.FINAL_32LVLCode.GDPORTALObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMONTYObjects1Objects, gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDPORTALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "COMPLETED GAME CUTSCENE/ANIMATION", false);
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.FINAL_32LVLCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MAZE_WALLS_TUTORIAL"), gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.FINAL_32LVLCode.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMONTYObjects1Objects, gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects1 */
/* Reuse gdjs.FINAL_32LVLCode.GDMONTYObjects1 */
{for(var i = 0, len = gdjs.FINAL_32LVLCode.GDMONTYObjects1.length ;i < len;++i) {
    gdjs.FINAL_32LVLCode.GDMONTYObjects1[i].separateFromObjectsList(gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMAZE_95959595WALLS_95959595TUTORIALObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.FINAL_32LVLCode.GDLAVAObjects1);
gdjs.copyArray(runtimeScene.getObjects("MONTY"), gdjs.FINAL_32LVLCode.GDMONTYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDMONTYObjects1Objects, gdjs.FINAL_32LVLCode.mapOfGDgdjs_9546FINAL_959532LVLCode_9546GDLAVAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.FINAL_32LVLCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FINAL_32LVLCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDEXIT_9595HOLEObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDEXIT_9595HOLEObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDMONTYObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDMONTYObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDPORTALObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDPORTALObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDLAVAObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDLAVAObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;

gdjs.FINAL_32LVLCode.eventsList2(runtimeScene);
gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDQUIT_9595BUTTONObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDEXIT_9595HOLEObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDEXIT_9595HOLEObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDMONTYObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDMONTYObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDPORTALObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDPORTALObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDLAVAObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDLAVAObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.FINAL_32LVLCode.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.FINAL_32LVLCode.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;


return;

}

gdjs['FINAL_32LVLCode'] = gdjs.FINAL_32LVLCode;
