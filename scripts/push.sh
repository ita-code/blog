# 设置要替换的地址和新地址
old_address="/Users/ita/code/Document/pic"
new_address="https://iskr.gitee.io/pic"

# 替换指定类型的文件中的地址
find /Users/ita/code/Document/blog/blogs -type f -name "*.md" -exec sed -i '' "s|$old_address|$new_address|g" {} \;

. /Users/ita/code/Document/pic/push.sh

git pull

npm run build

git add .
date=`date "+%Y-%m-%d %H:%M:%S"`
git commit -m "commit: ${date}"

git push origin
git push github
