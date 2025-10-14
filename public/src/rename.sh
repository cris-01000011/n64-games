cd ./screenshots

for f in *; do 
  new=$(echo "$f" | sed 's/ *(.*)//g')
  mv "$f" "$new"
done
