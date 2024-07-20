# Remove the .git folder if it exists
if [ -d ".git" ]; then
  rm -rf .git
fi

pip3 install -r requirements.txt
python3.9 manage.py collectstatic