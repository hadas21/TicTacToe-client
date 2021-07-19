
curl "https://tic-tac-toe-api-development.herokuapp.com/games/60f4be85f3b029001774a741" \
  --include \
  --request PATCH \
   --header "Authorization: Bearer ${TOKEN}"\
  --header "Content-Type: application/json"
  --data '{
    "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": "'"${OVER}"'"
  }
  }'
echo
