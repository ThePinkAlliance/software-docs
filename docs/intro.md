---
sidebar_position: 1
---

# Software Intro

Let's setup our programming enviroment for FRC and download .

## Getting Started

Let's start with installing required tools.

### What you'll need

- [WPILib](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html) latest version is perferred:
  - When installing WPILib, when prompted for the desired install mode select **Everything** and select **Install for this User**.
  - When prompted to install VSCode, select **Download for this computer only**.
- [Git](https://https://git-scm.com/) standalone installer for 64-bit is perferred.
  - Leave all the options default in the installer.
- Basic understanding of [Java](https://www.w3schools.com/java/java_intro.asp).
- Basic understanding of [WPILib](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-4/creating-benchtop-test-program-cpp-java.html).

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
