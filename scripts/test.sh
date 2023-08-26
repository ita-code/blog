if [ -z "$1" ]; then
  data=`date "+%Y-%m-%d %H:%M:%S"`
else
  data="$1"
fi

echo $data
