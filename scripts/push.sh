git pull origin master

# npm run build

git add .

if [ -z "$1" ]; then
  data=$(date +"commit: %Y-%m-%d %H:%M:%S")
else
  data="$1"
fi

git commit -m "$data"

git push origin master
git push gitee master
# gitee   https://gitee.com/iskr/blog.git
# github  https://github.com/ita-code/blog.git 