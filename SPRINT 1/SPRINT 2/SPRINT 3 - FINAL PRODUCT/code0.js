gdjs.MAIN_32MENUCode = {};
gdjs.MAIN_32MENUCode.localVariables = [];
gdjs.MAIN_32MENUCode.GDTITLE_9595TEXTObjects1= [];
gdjs.MAIN_32MENUCode.GDTITLE_9595TEXTObjects2= [];
gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects1= [];
gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects2= [];
gdjs.MAIN_32MENUCode.GDPLAY_9595TEXTObjects1= [];
gdjs.MAIN_32MENUCode.GDPLAY_9595TEXTObjects2= [];
gdjs.MAIN_32MENUCode.GDTUTORIAL_9595TEXTObjects1= [];
gdjs.MAIN_32MENUCode.GDTUTORIAL_9595TEXTObjects2= [];
gdjs.MAIN_32MENUCode.GDMONTYObjects1= [];
gdjs.MAIN_32MENUCode.GDMONTYObjects2= [];
gdjs.MAIN_32MENUCode.GDMAZE_9595WALLS_9595TUTORIALObjects1= [];
gdjs.MAIN_32MENUCode.GDMAZE_9595WALLS_9595TUTORIALObjects2= [];
gdjs.MAIN_32MENUCode.GDPORTALObjects1= [];
gdjs.MAIN_32MENUCode.GDPORTALObjects2= [];
gdjs.MAIN_32MENUCode.GDLAVAObjects1= [];
gdjs.MAIN_32MENUCode.GDLAVAObjects2= [];
gdjs.MAIN_32MENUCode.GDQUIT_9595TEXTObjects1= [];
gdjs.MAIN_32MENUCode.GDQUIT_9595TEXTObjects2= [];
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595TEXTObjects1= [];
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595TEXTObjects2= [];
gdjs.MAIN_32MENUCode.GDRETRY_9595TEXTObjects1= [];
gdjs.MAIN_32MENUCode.GDRETRY_9595TEXTObjects2= [];
gdjs.MAIN_32MENUCode.GDNEXT_9595LEVEL_9595TEXTObjects1= [];
gdjs.MAIN_32MENUCode.GDNEXT_9595LEVEL_9595TEXTObjects2= [];
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595DECORATIONObjects1= [];
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595DECORATIONObjects2= [];
gdjs.MAIN_32MENUCode.GDMONTY2Objects1= [];
gdjs.MAIN_32MENUCode.GDMONTY2Objects2= [];


gdjs.MAIN_32MENUCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PLAY_BUTTON"), gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects1[k] = gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LVLS OPTIONS", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MONTY2"), gdjs.MAIN_32MENUCode.GDMONTY2Objects1);
{for(var i = 0, len = gdjs.MAIN_32MENUCode.GDMONTY2Objects1.length ;i < len;++i) {
    gdjs.MAIN_32MENUCode.GDMONTY2Objects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};

gdjs.MAIN_32MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MAIN_32MENUCode.GDTITLE_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDTITLE_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDPLAY_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDPLAY_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDTUTORIAL_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDTUTORIAL_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMONTYObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDMONTYObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDPORTALObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDPORTALObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDLAVAObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDLAVAObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595DECORATIONObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595DECORATIONObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMONTY2Objects1.length = 0;
gdjs.MAIN_32MENUCode.GDMONTY2Objects2.length = 0;

gdjs.MAIN_32MENUCode.eventsList0(runtimeScene);
gdjs.MAIN_32MENUCode.GDTITLE_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDTITLE_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDPLAY_9595BUTTONObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDPLAY_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDPLAY_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDTUTORIAL_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDTUTORIAL_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMONTYObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDMONTYObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDPORTALObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDPORTALObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDLAVAObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDLAVAObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595DECORATIONObjects1.length = 0;
gdjs.MAIN_32MENUCode.GDMAIN_9595MENU_9595DECORATIONObjects2.length = 0;
gdjs.MAIN_32MENUCode.GDMONTY2Objects1.length = 0;
gdjs.MAIN_32MENUCode.GDMONTY2Objects2.length = 0;


return;

}

gdjs['MAIN_32MENUCode'] = gdjs.MAIN_32MENUCode;
