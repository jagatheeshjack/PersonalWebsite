param(
  [string]$branch = "main",
  [string]$commitMessage = "Add GitHub Actions workflow for Pages deploy and update homepage"
)

Write-Host "Checking for git..."
$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) {
  Write-Error "Git is not installed or not in PATH. Install Git from https://git-scm.com/downloads and re-run this script."
  exit 1
}

Write-Host "Git found: $(git --version)"

Push-Location -Path $PSScriptRoot

Write-Host "Staging changes..."
git add -A

# Commit (allow non-zero exit if nothing to commit)
Write-Host "Committing..."
$commitOutput = git commit -m "$commitMessage" 2>&1
if ($LASTEXITCODE -ne 0) {
  Write-Host "git commit returned non-zero (possible: nothing to commit). Output:"
  Write-Host $commitOutput
} else {
  Write-Host "Committed changes."
}

Write-Host "Pushing to origin/$branch..."
$pushOutput = git push origin $branch 2>&1
if ($LASTEXITCODE -ne 0) {
  Write-Error "git push failed. Output:`n$pushOutput"
  exit $LASTEXITCODE
}
Write-Host "Pushed to origin/$branch successfully."

Write-Host "Done. Visit: https://github.com/jagatheeshjack/PersonalWebsite/actions to watch the workflow run."