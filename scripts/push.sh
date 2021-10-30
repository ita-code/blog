npm run build

git add .
date=`date "+%Y-%m-%d %H:%M:%S"`
git commit -m "commit ${date}"

git push 

#sh脚本,一个命令执行多个操作
# yarn build:example

# cd example/public

# git init
# git add -A
# date=`date +%Y-%m-%d_%H:%M:%S`
# git commit -m "deploy ${date}"

# git push -f git@gitee.com:recoluan/reco-example-test.git master

# cd ../../
# rm -rf example/public
