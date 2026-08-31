gdjs.DIED_32LVL_326Code = {};
gdjs.DIED_32LVL_326Code.localVariables = [];
gdjs.DIED_32LVL_326Code.GDDIED_9595LVL_95956_9595TEXTObjects1= [];
gdjs.DIED_32LVL_326Code.GDDIED_9595LVL_95956_9595TEXTObjects2= [];
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects1= [];
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects2= [];
gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects1= [];
gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects2= [];
gdjs.DIED_32LVL_326Code.GDMONTYObjects1= [];
gdjs.DIED_32LVL_326Code.GDMONTYObjects2= [];
gdjs.DIED_32LVL_326Code.GDMAZE_9595WALLS_9595TUTORIALObjects1= [];
gdjs.DIED_32LVL_326Code.GDMAZE_9595WALLS_9595TUTORIALObjects2= [];
gdjs.DIED_32LVL_326Code.GDPORTALObjects1= [];
gdjs.DIED_32LVL_326Code.GDPORTALObjects2= [];
gdjs.DIED_32LVL_326Code.GDLAVAObjects1= [];
gdjs.DIED_32LVL_326Code.GDLAVAObjects2= [];
gdjs.DIED_32LVL_326Code.GDQUIT_9595TEXTObjects1= [];
gdjs.DIED_32LVL_326Code.GDQUIT_9595TEXTObjects2= [];
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595TEXTObjects1= [];
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595TEXTObjects2= [];
gdjs.DIED_32LVL_326Code.GDRETRY_9595TEXTObjects1= [];
gdjs.DIED_32LVL_326Code.GDRETRY_9595TEXTObjects2= [];
gdjs.DIED_32LVL_326Code.GDNEXT_9595LEVEL_9595TEXTObjects1= [];
gdjs.DIED_32LVL_326Code.GDNEXT_9595LEVEL_9595TEXTObjects2= [];


gdjs.DIED_32LVL_326Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MAIN_MENU_BUTTON_LVL_6_DIED"), gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects1.length;i<l;++i) {
    if ( gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects1[k] = gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects1[i];
        ++k;
    }
}
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAIN MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RETRY_BUTTON_LVL_6_DIED"), gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects1.length;i<l;++i) {
    if ( gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects1[k] = gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects1[i];
        ++k;
    }
}
gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LVL 6", false);
}}

}


};

gdjs.DIED_32LVL_326Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DIED_32LVL_326Code.GDDIED_9595LVL_95956_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDDIED_9595LVL_95956_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDMONTYObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDMONTYObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDPORTALObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDPORTALObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDLAVAObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDLAVAObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;

gdjs.DIED_32LVL_326Code.eventsList0(runtimeScene);
gdjs.DIED_32LVL_326Code.GDDIED_9595LVL_95956_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDDIED_9595LVL_95956_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95956_9595DIEDObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDRETRY_9595BUTTON_9595LVL_95956_9595DIEDObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDMONTYObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDMONTYObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDPORTALObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDPORTALObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDLAVAObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDLAVAObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_326Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_326Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;


return;

}

gdjs['DIED_32LVL_326Code'] = gdjs.DIED_32LVL_326Code;
