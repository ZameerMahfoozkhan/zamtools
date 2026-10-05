@echo off
echo ========================================================
echo Starting ZamTools Local Server (http://localhost:8080)
echo ========================================================
echo Opening browser...
start http://localhost:8080/
where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
  node scripts/serve.js
) else (
  python -m http.server 8080
)
pause
