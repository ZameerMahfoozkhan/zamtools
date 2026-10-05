@echo off
echo ========================================================
echo Starting ZamTools Local Server (http://localhost:8080)
echo ========================================================
echo Opening browser...
start http://localhost:8080/
python -m http.server 8080
pause
