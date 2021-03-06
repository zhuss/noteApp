# noteApp
便捷请假小程序

### 新建团队  => 新建团队
```
  //上行参数:
  {
    userId:'1231232',       //用户Id
    teamName:'杭州映兔科技'，//团队名称
    baseDays:7,            //初始年假天数
    addDays:1              //工龄增加年假天数
  }
  
  //下行参数
  {
    code:200,
    msg:'success',
    data:{}
  }
```
### 修改团队名称  => 管理团队
```
 //上行参数
 {
  teamId:'123213',           //团队id
  teamName:'杭州映兔科技修改' //团队名称
 } 
 
 //下行参数
 {
    code:200,
    msg:'success',
    data:{}
  }
  
```

### 获取个人信息   => 首页

```
//上行参数
{
  userId:'123123' //登录用户id
}
//下行
{
  code:200,
  msg:'success',
  data:{
      selectTeam:{                //当前选择的团队
          teamId:'123123',        //团队id
          teamName:'杭州映兔科技'，// 团队名称
          leaveDays:7.5           //剩余年假天数
      },
      teams:[{                    //当前已加入的团队列表（申请通过的）
          teamId:'123123',        //团队id
          teamName:'杭州映兔科技'，// 团队名称
          leaveDays:7.5           //剩余年假天数
      },...]
  }
}

```

### 提交请假申请  => 请假条
```
 //上行参数
 {
    userId:'123123',                //用户id   
    teamId:'123213',                //团队id  
    title:'旅游假',                 //请假主题
    content:'世界很大,想去看看',     //请假理由描述
    startTime:'2017-11-24',        //请假开始时间
    days:0.5                       //请假天数  0.5,1,2,3...
 }
 //下行参数
 {
    code:200,
    msg:'success',
    data:{}
 }
```

### 请假历史记录   => 请假历史
```
//上行参数  请假列表
{
  userId:'123213',      //用户id
  teamId:'123123213'    //团队id
  pageId: 1             //页码
}

//下行参数
{
  code:200,
  msg:'success',
  data:{
     total:200,                          //总条数
     list:[{
        leaveId:'123123123',            //加添Id
        status: 0,                      //假条状态->  0:未审批  1:已审批  2:已拒绝
        title:'旅游假',                 //请假主题
        content:'世界很大,想去看看',     //请假理由描述
        startTime:'2017-11-24',        //请假开始时间
        days:0.5                       //请假天数  0.5,1,2,3...
     }...]
  }
}
```

###  入职申请列表  =>   入职申请
```
//上行参数
{
  teamId:'123123',  //团队id
  pageId:0          //页码
}

//下行参数
{
  code:200,
  msg:'success',
  data:{
        total:10,                      //总条数
        list:[{
              applyId:'1',             //申请id
              name:'朱顺胜',            //真实姓名
              phone:'13866669999',     //手机号码
              position:'前端开发',      //职位
              date:'2017-11-11',      //入职日期
              status:0                //申请状态  0:未审核   1:已通过   2:已拒绝      
            },....]
  }
}
```

### 入职申请通过/拒绝   =>  入职申请
```
//上行参数   通过status输入1  拒绝status输入2
{
   applyId:'123123',       //申请id
   status: 1               //申请状态  1:已通过   2:已拒绝 
}

//下行参数
{
  code:200,
  msg:'success',
  data:{}
}
```


### 请假申请列表  => 请假申请
```
//上行参数
{
  teamId:'123123'  //团队id
  pageId:0         //页码
}
//下行参数
{
  code:200,
  msg:'success',
  data:{
    total:10,                       //总条数
    list:[{
        leaveId:'123123123',            //假条Id
        name:'朱顺胜',                   //申请人姓名
        status: 0,                      //假条状态->  0:未审批  1:已审批  2:已拒绝
        title:'旅游假',                 //请假主题
        content:'世界很大,想去看看',     //请假理由描述
        startTime:'2017-11-24',        //请假开始时间
        days:0.5                       //请假天数  0.5,1,2,3...
    },...]

  }
}
```


###  审核请假条 通过/拒绝  =>  审核假条
```
//上行参数
{
  leaveId:'123123123',        //假条id
  status: 1                   //审核状态  1:审批  2:拒绝
}
```


### 团队成员列表   =>  成员列表
```
//上行参数
{
  teamId:'1231232'      //团队列表
  pageId:0              //页码
}
//下行参数
{
  code:200,
  msg:'success',
  data:{
    total:200,                 //总条数
    list:[{
      applyId:'1',             //申请id
      name:'朱顺胜',            //真实姓名
      phone:'13866669999',     //手机号码
      position:'前端开发',      //职位
      date:'2017-11-11',      //入职日期
      status:0                //申请状态 1:已通过
    },...]
  }
}
```





