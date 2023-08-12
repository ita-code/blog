# 设置要替换的地址和新地址
old_address="/Users/ita/code/pic"
new_address="https://iskr.gitee.io/pic"

# 替换指定类型的文件中的地址
find /Users/ita/code/blog -type f -name "*.md" -exec sed -i "s#$old_address#$new_address#g" {} \;

git pull

npm run build

git add .
date=`date "+%Y-%m-%d %H:%M:%S"`
git commit -m "commit: ${date}"

git push origin
git push github

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
