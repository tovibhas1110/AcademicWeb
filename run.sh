npm install
git config --global --unset credential.helper
git add .
git commit -m Update website content
git push origin main
npm run deploy
