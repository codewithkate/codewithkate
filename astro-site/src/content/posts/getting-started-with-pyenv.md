---
title: getting-started-with-pyenv
date: 2026-05-30
description: Simple guide to install pyenv for managing Python versions in virtual environments.
tags:
  - quick-start
image: "[[attachments/galaxy.png]]"
imageAlt: Galaxy
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: pyenv
draft: false
aliases:
  - manage-multiple-python-versions-with-pyenv-commands
---
# Manage Multiple Python Versions with `pyenv` Commands

Python Managers are command line tools that allow you to keep multiple Python versions on your machine and choose which version to use based on your environment.

There are several reasons you may need a Python Version Manager:

- You’ve started a new role where a project version differs from your system version.

- You need to align your project version with the optimal version for a 3rd party library.

- Or, you want to test the latest Python release.


![Python Release Cycle](https://devguide.python.org/_static/release-cycle.svg)


View Python’s release schedule at [https://www.python.org/downloads/](https://www.python.org/downloads/)
## What 

`pyenv` sets the active Python version for various scopes:

| Order | Command        | Change Item        | Scope                    |
| ----- | -------------- | ------------------ | ------------------------ |
| 1     | `pyenv shell`  | $PYENV_VERSION     | Current Terminal session |
| 2     | `pyenv local`  | .python-version    | Project directory        |
| 3     | `pyenv global` | (~/.pyenv/version) | All Terminal sessions    |

Python’s command resolution order works so that smaller, more focused environments will override wider systems.

1. `shell`: The current terminal session

2. `local`: The value stored in a .python-version file in the project root folder

3. `global`: Any terminal window

Continue reading to learn how to download pyenv, set up a basic configuration for pyenv, and use pyenv with virtual environments.

## Set up pyenv to manage multiple Python versions

Manually install pyenv on windows:

```powershell

Invoke-WebRequest -UseBasicParsing -Uri "[https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1](https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1)" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"

```

Or, install on MacOS with homebrew:

```jsx
brew install pyenv
```

See this guide to install on other operating systems: [https://realpython.com/intro-to-pyenv/#installing-pyenv](https://realpython.com/intro-to-pyenv/#installing-pyenv)

Check that you have the latest version of pyenv: `--version` and `update`

```powershell

pyenv --version

pyenv update

```

List all Python versions installed through pyenv: `versions`

```powershell

pyenv versions

```

Show all versions of Python available for install through pyenv: `--list`

```powershell

pyenv install --list

```

Install multiple versions of Python: `install`

```powershell

pyenv install 3.12.10

```

## Specify versions for Python’s command resolution order

We will use pyenv to set a version in bottom up scoping order to clearly see how each command resolves.
### System version

If you have MacOS or used python before, you may have python already installed on your system. Check on your system version to compare it to what we will be setting up through pyenv:

```powershell

python3 --version

```

### Global version: `global` ****

See which Python executable (.exe) path is seen at the global and local levels: `which`

```powershell
pyenv which python3
```

You may receive a response that “No global/local python version has been set yet”. We’ll use the same version we installed through pyenv earlier and set the global/local version by typing:

```powershell
pyenv global 3.12.10
```

### Local version: `local`

Set the Python version for a specific project directory. This writes a `.python-version` file to the current folder, which pyenv reads whenever you're working in that directory.

See which Python executable is currently set at the local level:

```powershell
cd path/to/project
pyenv which python3
```

Set the local version to an older release to override the global:

```powershell
pyenv local 3.11.9
```

Check that a .python-version file exists in your project directory with the specified version.

### Shell version: `shell`

Set the Python version for the current terminal session only. This sets the `$PYENV_VERSION` environment variable, which takes the highest priority in pyenv's resolution order and overrides both `local` and `global`.

Open a new tab in PowerShell and install the latest version of Python:

```powershell

pyenv install 3.10.14

```

Set the shell version for this session:

```powershell

pyenv shell 3.10.14

```

Open a new terminal tab and you should see your Python version is back to what you set globally.

## Create a virtual environment to install libraries and packages

Python Managers and Virtual Environments are complementary, not alternatives. This means the order matters.

First, set the Python version you want to use for your local project:

```powershell

pyenv local 3.11.9

```

Then, build your virtual environment with the specified Python interpreter.

```powershell

python -m venv .venv

```

Finally, activate the environment and install any dependencies:

```powershell

.\.venv\Scripts\activate

pip install <your-package>

```

IMPORTANT: If you are using Git, be sure to add the venv path to the .gitignore file. Virtual environments hold a lot of information and significantly increase the size of your project. You can still share your environment with future developers by adding two files to the root of your project directory:

```powershell

python -m pip freeze > requirements.txt

```

This captures all installed packages and their exact versions. When a future developer clones your project, pyenv will automatically read the `.python-version` file to set the correct Python interpreter. They can then run:

```powershell

pip install -r requirements.txt

```

Happy coding!

  

---
## Additional Commands
 
- commands
- help
- uninstall
- duplicate
- exec
- export
- latest
- migrate
- rehash
- shims
- vname
- whence