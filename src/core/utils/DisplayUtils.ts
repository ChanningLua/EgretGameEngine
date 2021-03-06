/**
 * Created by yangsong on 2014/11/24.
 * 显示对象工具类
 */
class DisplayUtils{
    /**
     * 构造函数
     */
    public constructor(){

    }

    /**
     * 创建一个Bitmap
     * @param resName resource.json中配置的name
     * @returns {egret.Bitmap}
     */
    public createBitmap(resName:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(resName);
        result.texture = texture;
        return result;
    }

    /**
     * 从父级移除child
     * @param child
     */
    public removeFromParent(child:egret.DisplayObject){
        if(child.parent == null)
            return;

        if(child.parent.hasOwnProperty("removeElement")){
            child.parent["removeElement"](child);
        }else{
            child.parent.removeChild(child);
        }
    }
}
