(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SailCampus2"],{c4a4:function(n,a,t){},d4c8:function(n,a,t){"use strict";t.r(a);var s=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",[t("a-row",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:24}},[t("h1",{staticStyle:{color:"#273849"}},[n._v("海舟物联智慧园区/智慧城市解决方案")])])],1),t("a-row",{attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:22}},[t("a-carousel",{attrs:{autoplay:""}},n._l(n.images,(function(n,a){return t("div",{key:a},[t("a-row",{attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:22}},[t("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:n.src}})])],1)],1)})),0)],1)],1),t("a-row",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:24}},[t("h1",{staticStyle:{color:"#273849"}},[n._v("产品特色")])])],1),t("a-row",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:22}},[t("a-list",{attrs:{grid:{gutter:16,column:3},"data-source":n.fetures},scopedSlots:n._u([{key:"renderItem",fn:function(a){return t("a-list-item",{},[t("h2",{staticStyle:{color:"#6b6b6b"}},[n._v(n._s(a))])])}}])})],1)],1),t("a-row",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:24}},[t("h1",{staticStyle:{color:"#273849"}},[n._v("安装手册")])])],1),t("a-row",{staticStyle:{"margin-top":"20px","text-align":"left"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:22}},[t("Markdown",{attrs:{content:n.installdoc}})],1)],1),t("a-row",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:24}},[t("h1",{staticStyle:{color:"#273849"}},[n._v("使用手册")])])],1),t("a-row",{staticStyle:{"margin-top":"20px","text-align":"left"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:22}},[t("Markdown",{attrs:{content:n.usedoc}})],1)],1),t("a-row",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:24}},[t("h1",{staticStyle:{color:"#273849"}},[n._v("附录")])])],1),t("a-row",{staticStyle:{"margin-top":"20px","text-align":"left"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:22}},[t("Markdown",{attrs:{content:n.appendix}})],1)],1),t("a-row",{staticStyle:{"margin-top":"20px",height:"100px","text-align":"center"},attrs:{type:"flex",justify:"space-around"}},[t("a-col",{attrs:{span:24}})],1)],1)},e=[],p=t("e6e0"),r=[{src:"/SailCampus2/home.png"},{src:"/SailCampus2/online.png"},{src:"/SailCampus2/device.png"},{src:"/SailCampus2/gateway.png"},{src:"/SailCampus2/gateway_device.png"},{src:"/SailCampus2/rule.png"},{src:"/SailCampus2/user.png"},{src:"/SailCampus2/user_device.png"}],i=["MQTT 5.0支持","MQTT 3.x兼容","向下级联魔方网关","单一二进制发布","支持k8s helm部署","集群支持","简单易用的规则引擎","简单灵活的访问控制","为智慧园区设计"],c='\n# 安装\n\n添加helm仓库\n```bash\n$ helm repo add bitnami https://charts.bitnami.com/bitnami\n```\n\n创建namespace\n```bash\n$ kubectl create namespace sailcampus2\n```\n\n安装bitnami/postgresql或者bitnami/postgresql-ha\n```bash\n$ helm install pg bitnami/postgresql -n sailcampus2\n```\n\n等待postgresql就绪后创建数据库\n```bash\n$ export POSTGRES_PASSWORD=$(kubectl get secret --namespace sailcampus2 pg-postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode)\n$ kubectl run pg-postgresql-client --rm --tty -i --restart=\'Never\' --namespace sailcampus2 --image docker.io/bitnami/postgresql:11.13.0-debian-10-r60 --env="PGPASSWORD=$POSTGRES_PASSWORD" --command -- psql --host pg-postgresql -U postgres -d postgres -p 5432\npostgres=# CREATE DATABASE sailcampus OWNER postgres;\npostgres=# \\q\n```\n\n\n安装bitnami/redis\n```bash\n$ helm install redis bitnami/redis -n sailcampus2\n```\n\n下载sailcampus2-helm-chart\n```bash\n$ git clone https://github.com/Hevienz/sailcampus2-helm-chart.git\n$ cd sailcampus2-helm-chart\n```\n\n修改sailcampus2/values.yaml\n```yaml\nactivationCode: 激活码\nemail: 您注册激活码时提供的邮箱地址\nphone: 您注册激活码时提供的手机号码\n\n# 根据上面安装的postgresql配置\npostgresql: "host=pg-postgresql user=postgres password=ya5qeUWLgb dbname=sailcampus\n    port=5432 sslmode=disable TimeZone=Asia/Shanghai"\n\n# 根据上面安装的redis配置\nredis:\n  address: "redis-master:6379"\n  password: "ctWhKZNi0Y"\n  db: 0\n\nmongodb: ""\n...\n```\n\n安装sailcampus2\n```bash\n$ helm install sailcampus2 sailcampus2 -n sailcampus2\n```\n\n等待sailcampus2就绪后创建超级用户\n```bash\n$ SAILCAMPUS2_POD=$(kubectl get pod -n sailcampus2 | grep sailcampus2 | head -n 1 | awk \'{print $1}\')\n$ kubectl exec $SAILCAMPUS2_POD --tty -i --namespace sailcampus2 -- sh\n/sailcampusui # SailCampus2 createsuperuser admin P@ssw0rd -c sailcampus2.yml\n```\n',l='\n# 使用\n\n## 设计模型与术语\n\n### 用户\n\n用户分为普通用户和超级管理员，普通用户只具有查看各种设备、网关、App的权限，超级管理员可以对各种实体进行增删改查等操作，超级管理员只能通过后台命令行进行添加和删除。\n\n### 设备\n\n设备指代各种物联网智能终端设备，设备归属于某个特定的用户，一个用户可以拥有多个设备。\n\n### 网关\n\n网关指代[海舟物联魔方网关](https://github.com/Hevienz/SailCubeGW2)，其作为物联网的边缘节点，起到汇聚边缘设备的作用，网关归属于某个特定的用户。\n\n### App\n\n用于展示、控制、获取设备状态的应用系统被称为App，App归属于某个特定的用户，用户被授权访问多个设备与网关，其所管理的App具有同这些设备及网关下接入的设备进行交互的权限。\n\n### 客户端\n\n统一将设备、网关和App称为客户端。\n\n### 主题\n\n主题分为设备主题和网关主题。\n\n#### 设备主题\n\n设备主题被划分为二级，例如`b31623f3-ce99-45be-8204-e189e040d916/DATA`，其中`b31623f3-ce99-45be-8204-e189e040d916`为设备的UUID，DATA为通道名。\n\n所有通道名如下：\n* OFFLINE (离线通道)\n* DATA (数据通道)\n* QUERY (查询通道)\n* QREPLY (查询回复通道)\n* CONTROL (控制通道)\n* CREPLY (控制回复通道)\n\n#### 网关主题\n\n网关主题被划分为三级，例如`7a81a235-07c4-4925-a9a3-32692916c734/af34e452-bccc-45b9-8d7f-81a82cdfb44d/DATA`，其中`7a81a235-07c4-4925-a9a3-32692916c734`为网关的UUID， `af34e452-bccc-45b9-8d7f-81a82cdfb44d`为其下接入设备的UUID，DATA为通道名，通道名同设备主题。\n\n### 规则引擎\n\n规则引擎是一个用于校验消息格式的系统模块，后续章节会进行详细介绍。\n\n## 访问控制\n\n### 连接\n\n在MQTT协议中，客户端向服务端发送的第一个报文是CONNECT报文，本系统对此报文中的客户标识符（Client Identifier）、用户名（User Name）、密码（Password）、遗嘱主题（Will Topic）和遗嘱消息（Will Payload）进行校验，在MQTT v5协议的客户端中，如果存在认证方法（Authentication Method），则应将其设置为jwt，并将认证数据（Authentication Data）设置为与密码相同。\n\n下面详细介绍以上字段的配置规则：\n\n* 客户端标识符\n> 应配置为相应客户端的UUID。\n\n* 用户名\n> 根据客户端类型进行配置，当客户端类型为设备，此处应设置为device；当客户端类型为网关，此处应设置为gateway；当客户端类型为App，此处应设置为app。\n\n* 密码\n> 如需获取密码，请打开Web管理页面（默认8787端口），点击右上角的工具图标，打开密码生成器后按照界面提示输入相应参数即可获得密码。\n\n* 遗嘱主题\n> 遗嘱主题的设置根据客户端类型的不同采用不同的设置，如果类型为设备或网关则应设置为`{自身的UUID}/OFFLINE`；如果类型为App则应将其置空。\n\n* 遗嘱消息\n> 遗嘱主题的设置根据客户端类型的不同采用不同的设置，如果类型为App则应将其置空；如果类型为设备或网关，遗嘱消息需通过规则引擎的验证，关于规则引擎请参考后续章节。\n\n### 订阅\n\n订阅根据不同的客户端类型而有所不同：\n\n* 当客户端类型为设备，其可以订阅主题`{自身的UUID}/CONTROL`和`{自身的UUID}/QUERY`。\n* 当客户端类型为网关，其可以订阅主题`{自身的UUID}/+/CONTROL`和`{自身的UUID}/+/QUERY`。\n* 当客户端类型为App，其可以订阅其所属App管理员被授权的设备及网关相关的主题，其中设备相关主题为`{设备UUID}/{通道名}`，网关相关主题为`{网关UUId}/+/{通道名}`，其中的通道名可设置为DATA、CREPLY、QREPLY、OFFLINE或+。\n\n### 发布\n\n发布支持QOS0、1、2。\n\n发布根据不同的客户端类型而有所不同：\n\n* 当客户端类型为设备，其可以发布的主题为`{自身的UUID}/DATA`、`{自身的UUID}/CREPLY`和`{自身的UUID}/QREPLY`。\n* 当客户端类型为网关，其可以发布的主题为`{自身的UUID}/{其下接入设备的UUID}/DATA`、`{自身的UUID}/{其下接入设备的UUID}/CREPLY`和`{自身的UUID}/{其下接入设备的UUID}/QREPLY`。\n* 当客户端类型为App，其可以发布消息到其所属App管理员被授权的设备及网关相关的主题，其中设备相关主题为`{设备UUId}/{通道名}`，网关相关主题为`{网关UUId}/{其下接入设备的UUID}/{通道名}`，其中的通道名可设置为CONTROL或QUERY。\n\n如果以上的发布的访问控制校验通过，那么会进行规则引擎的校验，关于规则引擎请参考后续章节。\n\n## 规则引擎\n\n当消息进入系统时，规则引擎会对其进行校验。\n\n当消息的主题为设备主题时，规则引擎会从设备的属性中找到对应通道的规则名，然后在规则引擎中查找到对应的规则。\n\n当消息的主题为网关主题时，规则引擎会从对应网关的子设备的属性中找到对应通道的规则名，然后在规则引擎中查找到对应的规则。\n\n之后，根据规则对消息内容进行校验。\n\n规则为一段特殊定制的json，下面举例说明：\n\n```json\n{\n    "age": "number",\n    "books": "list",\n    "isStudent": "bool",\n    "name": "string",\n    "other": "object",\n    "score": {\n        "math": "number",\n        "music": "number",\n        "sport": "number"\n    },\n    "tag": "value"\n}\n```\n\n消息若想通过上述规则的校验，必须满足其定义：\n\n* age 应设置为number类型\n* books 应设置为一个列表\n* isStudent 应设置为 true 或 false\n* name 应设置为字符串\n* other 应设置为一个对象，对象的键值对没有要求。\n* score 应设置为一个对象，并且其应该递归满足规则中键值对的要求，递归的层级没有限制\n* tag 应设置为number、bool或string类型的值\n* 消息中不得包含规则中未定义的字段\n',o="\n### 已知支持MQTTv5的库\n\n* paho java\n* paho python\n* paho c\n* paho c++\n* MQTT.js\n",u={name:"SailCampus2",components:{Markdown:p["a"]},data:function(){return{images:r,fetures:i,installdoc:c,usedoc:l,appendix:o}}},m=u,d=(t("eacd"),t("2877")),g=Object(d["a"])(m,s,e,!1,null,"362194b1",null);a["default"]=g.exports},eacd:function(n,a,t){"use strict";t("c4a4")}}]);
//# sourceMappingURL=SailCampus2.1542171d.js.map