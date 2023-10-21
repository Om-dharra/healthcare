let b1 = document.getElementById('1');
let b2 = document.getElementById('2');
let p1 = document.getElementById('sc1');
let s1 = 0;
let bt1=document.getElementById('w1');
let bt2=document.getElementById('w2');
let bt3=document.getElementById('w3');
let bt4=document.getElementById('w4');
let bt5=document.getElementById('w5');
let bt6=document.getElementById('w6');
let bt7=document.getElementById('w7');
b1.addEventListener('click',function()
{
    s1+=1;
    p1.innerHTML = s1;
});
b2.addEventListener('click',function()
{
    if(s1>0)
    {
        s1-=1;
        p1.innerHTML = s1;
    }
});
bt1.addEventListener('click',function()
{
    s1=0;
    p1.innerHTML = s1;
})
let b3 = document.getElementById('3');
let b4 = document.getElementById('4');
let p2 = document.getElementById('sc2');
let s2 = 0;
b3.addEventListener('click',function()
{
    s2+=1;
    p2.innerHTML = s2;
});

b4.addEventListener('click',function()
{
    if(s2>0)
    {
        s2-=1;
        p2.innerHTML = s2;
    }
});
bt2.addEventListener('click',function()
{
    s2=0;
    p2.innerHTML = s2;
})
let b5 = document.getElementById('5');
let b6 = document.getElementById('6');
let p3 = document.getElementById('sc3');
let s3 = 0;
b5.addEventListener('click',function()
{
    s3+=1;
    p3.innerHTML = s3;
});

b6.addEventListener('click',function()
{
    if(s3>0)
    {
        s3-=1;
        p3.innerHTML = s3;
});
bt3.addEventListener('click',function()
{
    s3=0;
    p3.innerHTML = s3;
})
let b7 = document.getElementById('7');
let b8 = document.getElementById('8');
let p4= document.getElementById('sc4');
let s4 = 0;
b7.addEventListener('click',function()
{
    s4+=1;
    p4.innerHTML = s4;
});
b8.addEventListener('click',function()
{
    if(s4>0)
    {
        s4-=1;
        p4.innerHTML = s4;
    }
});
bt4.addEventListener('click',function()
{
    s4=0;
    p4.innerHTML = s4;
})
let b9 = document.getElementById('9');
let b10 = document.getElementById('10');
let p5 = document.getElementById('sc5');
let s5 = 0;
b9.addEventListener('click',function()
{
    s5+=1;
    p5.innerHTML = s5;
});

b10.addEventListener('click',function()
{
    if(s5>0)
    {
        s5-=1;
        p5.innerHTML = s5;
    }
});
bt5.addEventListener('click',function()
{
    s5=0;
    p5.innerHTML = s5;
})
let b11 = document.getElementById('11');
let b12 = document.getElementById('12');
let p6 = document.getElementById('sc6');
let s6 = 0;
b11.addEventListener('click',function()
{
    s6+=1;
    p6.innerHTML = s6;
});
b12.addEventListener('click',function()
{
    if(s6>0)
    {
        s6-=1;
        p6.innerHTML = s6;
    }
});
bt6.addEventListener('click',function()
{
    s6=0;
    p6.innerHTML = s6;
})
let b13 = document.getElementById('13');
let b14 = document.getElementById('14');
let p7 = document.getElementById('sc7');
let s7 = 0;
b13.addEventListener('click',function()
{
    s7+=1;
    p7.innerHTML = s7;
});
b14.addEventListener('click',function()
{
    if(s7>0)
    {
        s7-=1;
        p7.innerHTML = s7;
    }
});
bt7.addEventListener('click',function()
{
    s7=0;
    p7.innerHTML = s7;
})