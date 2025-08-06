param (
    [string]$ReactDir = ".",

    [string]$DeviceId = ""
)

$AdbCommand = "adb"

if (-not [string]::IsNullOrEmpty($DeviceId)) {
    $AdbCommand = "$AdbCommand -s $DeviceId"
}

# Check for existence of modded file
$ModdedFileCheck = Invoke-Expression "$AdbCommand shell 'test -f /modded && echo exists'"
if (-Not ($ModdedFileCheck -match "exists")) {
    # run the mod script
    Invoke-Expression "$AdbCommand shell 'mount -o remount,rw /'"
    Invoke-Expression "$AdbCommand push `"$PSScriptRoot/mod.sh`" /tmp/mod.sh"
    Invoke-Expression "$AdbCommand push `"$PSScriptRoot/httpserver.conf`" /etc/supervisor.d/"
    Invoke-Expression "$AdbCommand shell 'sh /tmp/mod.sh'"
    Invoke-Expression "$AdbCommand shell 'mount -o remount,ro /'"
}

Push-Location $ReactDir
try {
    npm run build
} finally {
    Pop-Location
}

Invoke-Expression "$AdbCommand shell 'rm -rf /home/superbird/www/'"
Invoke-Expression "$AdbCommand push `"$ReactDir/dist/`" /home/superbird/www"
Invoke-Expression "$AdbCommand shell 'supervisorctl restart superbird chromium'"
Invoke-Expression "$AdbCommand shell 'supervisorctl update'"
