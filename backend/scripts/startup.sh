#!/bin/bash

python manage.py migrate --noinput

waitress-serve --port=$PORT bug_bash_hesbon_437.wsgi:application
