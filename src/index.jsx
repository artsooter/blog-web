import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'
import marked from 'marked'
const dataJsonStr = '[{"id": 1,"tag": "标签","title": "标题","content": "## 写在前面 ***最近在图书馆复习","time": "2020-04-10T03:26:22.000Z","commentId": "1","readerNumber": 1}]'
const dataJson = JSON.parse(dataJsonStr)
console.log(typeof marked(dataJson[0].content))
const ele=<div dangerouslySetInnerHTML={{__html: marked(dataJson[0].content)}}></div>;

$.ajax({
    url:'http://121.43.146.149:3001/blog/?id=1',
    success:function(result){
        console.log(result)
    },
    error:function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(dataJson)
    }
})
console.log("sass")

ReactDom.render(//渲染元素
    ele,
    $("#react")[0]
)