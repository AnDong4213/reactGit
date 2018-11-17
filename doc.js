sc create mongodb binPath= "d:\MongoDB\Server\4.0\bin\mongod.exe --service --dbpath d:\MongoDB\data --logpath=d:\MongoDB\log\mongodb.log --logappend --directoryperdb"

services.msc

C:\Program Files (x86)\Yarn\bin\

D:\MongoDB\Server\4.0\bin

安装 MongoDB服务
通过执行mongod.exe，使用--install选项来安装服务，使用--config选项来指定之前创建的配置文件。
D:\MongoDB\Server\4.0\bin\mongod.exe --config "D:\MongoDB\Server\4.0\bin\mongod.cfg" --install

D:\MongoDB\Server\4.0\bin\mongod.exe --config "D:\MongoDB\Server\4.0\bin\mongod.cfg" --service

net start MongoDB

 db.runoob.insert({x:10})
WriteResult({ "nInserted" : 1 })
> db.runoob.find()
{ "_id" : ObjectId("5604ff74a274a611b0c990aa"), "x" : 10 }

reacttraining.cn/web/example/basic


We No Speak Americano





