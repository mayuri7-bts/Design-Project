@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist C:\Users\god\Desktop\x\hypersonic\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\server\hsql-sample-database\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\ingres\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\ingres\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\mysql\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\mysql\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\postgresql\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\postgresql\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\apache\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\apache\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\openoffice\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\openoffice\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\apache-tomcat\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\apache-tomcat\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\resin\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\resin\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\jetty\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\jetty\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\subversion\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist C:\Users\god\Desktop\x\lucene\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\lucene\scripts\ctl.bat START)
if exist C:\Users\god\Desktop\x\third_application\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist C:\Users\god\Desktop\x\third_application\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\third_application\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\lucene\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist C:\Users\god\Desktop\x\subversion\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\subversion\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\jetty\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\jetty\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\hypersonic\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\resin\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\resin\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT C:\Users\god\Desktop\x\apache-tomcat\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\openoffice\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\openoffice\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\apache\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\apache\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\ingres\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\ingres\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\mysql\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\mysql\scripts\ctl.bat STOP)
if exist C:\Users\god\Desktop\x\postgresql\scripts\ctl.bat (start /MIN /B C:\Users\god\Desktop\x\postgresql\scripts\ctl.bat STOP)

:end

