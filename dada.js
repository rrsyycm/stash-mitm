(() => {
    console.log("Dada-脚本启动", $request && $request.url);
    let body = $response && $response.body;
    if (!body) {
        console.log("没有 body，直接放行");
        $done({});
        return;
    }
    try {
        // 清除 BOM（如果有）
        body = body.replace(/^\uFEFF/, "");
        let obj = JSON.parse(body);
        console.log("原始 top keys:", Object.keys(obj));

        // 确保 content 存在
        obj.content = obj.content || {};
        // 这里替换为你想要的结构（我用你给的示例）
        obj.content.order = [ /* ...把你那个大对象数组放这里...*/ ];

        console.log("修改完成，返回新 body 长度:", JSON.stringify(obj).length);
        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        console.log("脚本异常:", e.toString());
        // 发生错误时返回原响应，避免影响页面
        $done({ body: body });
    }
})();
