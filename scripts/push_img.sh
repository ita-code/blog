# 设置要替换的地址和新地址
old_address="/Users/ita/code/document/pic"
new_address="https://iskr.gitee.io/pic"

# 替换指定类型的文件中的地址
find /Users/ita/code/document/blog/data/blog -type f -name "*.md" -exec sed -i '' "s|$old_address|$new_address|g" {} \;

sh ../../pic/push.sh

git pull origin master

# npm run build

git add .

if [ -z "$1" ]; then
  data=$(date +"commit: %Y-%m-%d %H:%M:%S")
else
  data="$1"
fi

git commit -m "$data"

git push
git push gitee
# gitee   https://gitee.com/iskr/blog.git
# github  https://github.com/ita-code/blog.git 