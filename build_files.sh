# Remove the .git folder if it exists
if [ -d ".git" ]; then
  rm -rf .git
fi

# Remove the node_modules folder if it exists
if [ -d "ghadboungroup/node_modules" ]; then
  rm -rf ghadboungroup/node_modules
fi

pip3 install -r requirements.txt
python3.9 manage.py collectstatic