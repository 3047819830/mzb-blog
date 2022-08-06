// 获取要操作的元素
const items=document.querySelectorAll('.item');
const sections=document.querySelectorAll('section');

// 移除选中态
function removeActive(){
    // 移除标签选中态样式
    items.forEach(item=>{
        item.classList.remove('active');
    });
    // 移除内容区选中态样式
    sections.forEach(item=>{
        item.classList.remove('active');
    });
}

// 遍历所有标签
items.forEach((item,index)=>{
    // 为每个标签绑定点击事件
    item.addEventListener('click',function(){
        // 移除选中态样式
        removeActive();
        // 为当前标签添加选中样式
        item.classList.add('active');
        // 为当前内容区添加选中样式
        sections[index].classList.add('active');
    })
})


var date_start;
var i=0;
function start(){
date_start=new Date(2020,7,25,00,00);  //开始时间
 start_time();
    }
function start_time(){
	
	set= window.setTimeout("start_time()", 1000);
        var date_end= new Date(); //结束时间
        var date_sum = date_end.getTime() - new Date(date_start).getTime(); //结束时间-开始时间 	
        //天数
        var days=Math.floor(date_sum/(24*60*60*1000))
        //小时数
        var day_ms=date_sum%(24*60*60*1000)    //计算天数后剩余的毫秒数
        var hours=Math.floor(day_ms/(60*60*1000))
        //分钟数
        var day_hour=day_ms%(60*60*1000)        //计算小时数后剩余的毫秒数
        var minutes=Math.floor(day_hour/(60*1000))
        //秒数
        var day_min=day_hour%(60*1000)      //计算分钟数后剩余的毫秒数
        var seconds=Math.round(day_min/1000)
	//getMonth 方法返回一个0到11之间的整数，是Date对象中的月份值，并不是现实中的月份值，要加+1才是。
	//开始运行时间
	//运行时长
		document.getElementById("sum_time").innerHTML=
        `<span class="love-number">${days}</span> 天 <span class="love-number"> ${hours}</span> 小时 <span class="love-number">${minutes}</span> 分 <span class="love-number">${seconds}</span> 秒`
}
start();