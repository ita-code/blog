---
title: PDF文件流前端下载并打印
date: 2021/04/05 23:56:54
lastmod: 2020/09/05 23:56:54
tags: [Vue,element ui]
draft: false
summary: 我的业务场景是需要解析后端的PDF文件流,然后预览最后可以打印出来就完事！完全不需要插件几句代码就搞定了，这里就不废话了直接上代码！
images: https://pan.zealsay.com/zealsay/cover/6.jpg
authors: ['default']
layout: PostLayout
---
我的业务场景是需要解析后端的PDF文件流,然后预览最后可以打印出来就完事！
完全不需要插件几句代码就搞定了，这里就不废话了直接上代码！
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210108180408984.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210108180429282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70)
直接起飞！！！懂得都懂香就完事！有问题评价

```javascript
export function getFile(id) {
    return request({
        url: 'api/File/Download?id=' + id,
        method: 'get',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        responseType: 'arraybuffer',   //一定要设置响应类型，否则页面会是空白pdf
    })
}
```

```javascript
 Service.getFile('f73a66091a124b338205c16389841487').then(result => {
        //const binaryData = [];
        //binaryData.push(result);
        //console.log(binaryData);
        //获取blob链接
        // var pdfUrl = window.URL.createObjectURL(new Blob(binaryData, { type: 'application/pdf' }));
        // window.open(pdfUrl);

		  const binaryData = [];
          binaryData.push(result.data);
          //获取blob链接
          let pdfUrl = window.URL.createObjectURL(
            new Blob(binaryData, { type: "application/pdf" })
          );
          if (pdfUrl) {
            this.handlePrint(pdfUrl);
          }
      })
```

增加一个在本页直接跳出打印的方法

```javascript
handlePrint(pdf) {
      if (document.getElementById("print-iframe")) {
        document.body.removeChild(document.getElementById("print-iframe"));
      }
      //判断iframe是否存在，不存在则创建iframe
      let iframe = document.getElementById("print-iframe");
      if (!iframe) {
        iframe = document.createElement("IFRAME");
        let doc = null;
        iframe.setAttribute("src", pdf);
        iframe.setAttribute("id", "print-iframe");
        document.body.appendChild(iframe);
        doc = iframe.contentWindow.document;
        doc.close();
        iframe.contentWindow.focus();
      }
      iframe.contentWindow.print();
    },
```
