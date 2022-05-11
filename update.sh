info=$1
if ["$info" = ""]; then
  info=":pencil: update content"
fi
hexo algolia
git add -A
git commit -m "$info"
git push origin hexo