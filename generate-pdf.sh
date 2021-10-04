#!/usr/bin/env sh

sleep 1
chromium --headless --disable-gpu --print-to-pdf='./dist/cv-nils-layet.pdf' http://localhost:8080
chromium --headless --disable-gpu --print-to-pdf='./dist/en/cv-nils-layet.pdf' http://localhost:8080/en
