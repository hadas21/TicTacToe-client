
# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh
#!/bin/bash


curl "https://tic-tac-toe-api-development.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
