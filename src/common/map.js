
export default function TMap(){  
  const key = "JIZBZ-V6ZW3-SIA32-3VH3N-SFLL6-MQFO4";  
  const TMap_URL = "https://map.qq.com/api/js?v=2.exp&key="+ key +"&callback=onTMapCallback";  
  return new Promise((resolve, reject) => {  
    // 如果已加载直接返回  
    if(typeof qq !== "undefined") {  
      resolve(qq);  
      return true;  
    }  
    // 百度地图异步加载回调处理  
    window.onTMapCallback = function () {  
      resolve(qq);
    };

    // 插入script脚本  
    let script = document.createElement("script");  
    script.type = "text/javascript";
    script.src = TMap_URL;
    script.onerror = reject;
    document.head.appendChild(script);  
  });  
}  
    