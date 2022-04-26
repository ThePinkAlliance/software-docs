---
sidebar_position: 1
---

# Software Intro

Let's setup our programming enviroment for FRC.

## Getting Started

Let's start with installing required tools.

### What you'll need

- [WPILib](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html) latest version is perferred:
  - When installing WPILib, when prompted for the desired install mode select **Everything** and select **Install for this User**.
  - When prompted to install VSCode, select **Download for this computer only**.
- [Git](https://https://git-scm.com/) standalone installer for 64-bit is perferred.
  - Leave all the options default in the installer.
  - If your having issues refer to this guide from [Github](https://github.com/git-guides/install-git).
- Basic understanding of [Java](https://www.w3schools.com/java/java_intro.asp).
- Basic understanding of [WPILib](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/creating-benchtop-test-program-cpp-java.html).
- Basic understanding of [Git Bash](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/creating-benchtop-test-program-cpp-java.html).

## Downloading the robot code

This command will create a folder and download all the 2022 robot code.

```bash
git clone https://github.com/ThePinkAlliance/RapidReact
```

You can type this command into Git Bash to execute it.

:::tip note
Do keep in mind the current file location of where the code has been downloaded so you can access it later.

If you don't know how to get the current directory type `$pwd` in the terminal.

If you want to change the directory that the code is downloaded in here's a guide on using **[change directory](https://stackoverflow.com/a/39593539/11128249)** command.
:::

## Opening the Project in VSCode

We are going to open the project using Wpilib's vscode and then for the most part start programming.

### Open VSCode with windows search

When you open VSCode for the first time it may take longer to start.

![search](/img/screenshots/screenshot-windows-search.png)

### Open the project

The folder we want to open is the one you made note of earlier.

![open folder](/img/screenshots/screenshot-open-folder.png)

Now your in the project and can start programming 🎉.
