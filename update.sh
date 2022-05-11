info=$1
if ["$info" = ""]; then
  info=":pencil: update content"
fi
export HEXO_ALGOLIA_INDEXING_KEY=fc7ef947951ad1901007b65c3b29a7cd
hexo algolia
git add -A
git commit -m "$info"
git push origin hexo