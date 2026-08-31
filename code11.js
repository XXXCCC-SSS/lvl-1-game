gdjs.DIED_32LVL_323Code = {};
gdjs.DIED_32LVL_323Code.localVariables = [];
gdjs.DIED_32LVL_323Code.GDDIED_9595TXT_9595LVL_95953Objects1= [];
gdjs.DIED_32LVL_323Code.GDDIED_9595TXT_9595LVL_95953Objects2= [];
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects1= [];
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects2= [];
gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects1= [];
gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects2= [];
gdjs.DIED_32LVL_323Code.GDMONTYObjects1= [];
gdjs.DIED_32LVL_323Code.GDMONTYObjects2= [];
gdjs.DIED_32LVL_323Code.GDMAZE_9595WALLS_9595TUTORIALObjects1= [];
gdjs.DIED_32LVL_323Code.GDMAZE_9595WALLS_9595TUTORIALObjects2= [];
gdjs.DIED_32LVL_323Code.GDPORTALObjects1= [];
gdjs.DIED_32LVL_323Code.GDPORTALObjects2= [];
gdjs.DIED_32LVL_323Code.GDLAVAObjects1= [];
gdjs.DIED_32LVL_323Code.GDLAVAObjects2= [];
gdjs.DIED_32LVL_323Code.GDQUIT_9595TEXTObjects1= [];
gdjs.DIED_32LVL_323Code.GDQUIT_9595TEXTObjects2= [];
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595TEXTObjects1= [];
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595TEXTObjects2= [];
gdjs.DIED_32LVL_323Code.GDRETRY_9595TEXTObjects1= [];
gdjs.DIED_32LVL_323Code.GDRETRY_9595TEXTObjects2= [];
gdjs.DIED_32LVL_323Code.GDNEXT_9595LEVEL_9595TEXTObjects1= [];
gdjs.DIED_32LVL_323Code.GDNEXT_9595LEVEL_9595TEXTObjects2= [];


gdjs.DIED_32LVL_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MAIN_MENU_BUTTON_LVL_3"), gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects1.length;i<l;++i) {
    if ( gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects1[k] = gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects1[i];
        ++k;
    }
}
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAIN MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RETRY_BUTTON_LVL_3"), gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects1.length;i<l;++i) {
    if ( gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects1[k] = gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects1[i];
        ++k;
    }
}
gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LVL 3", false);
}}

}


};

gdjs.DIED_32LVL_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DIED_32LVL_323Code.GDDIED_9595TXT_9595LVL_95953Objects1.length = 0;
gdjs.DIED_32LVL_323Code.GDDIED_9595TXT_9595LVL_95953Objects2.length = 0;
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects1.length = 0;
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects2.length = 0;
gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects1.length = 0;
gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects2.length = 0;
gdjs.DIED_32LVL_323Code.GDMONTYObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDMONTYObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDPORTALObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDPORTALObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDLAVAObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDLAVAObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;

gdjs.DIED_32LVL_323Code.eventsList0(runtimeScene);
gdjs.DIED_32LVL_323Code.GDDIED_9595TXT_9595LVL_95953Objects1.length = 0;
gdjs.DIED_32LVL_323Code.GDDIED_9595TXT_9595LVL_95953Objects2.length = 0;
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects1.length = 0;
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95953Objects2.length = 0;
gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects1.length = 0;
gdjs.DIED_32LVL_323Code.GDRETRY_9595BUTTON_9595LVL_95953Objects2.length = 0;
gdjs.DIED_32LVL_323Code.GDMONTYObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDMONTYObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDPORTALObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDPORTALObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDLAVAObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDLAVAObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_323Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_323Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;


return;

}

gdjs['DIED_32LVL_323Code'] = gdjs.DIED_32LVL_323Code;
