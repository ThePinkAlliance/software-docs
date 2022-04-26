---
title: TargetPackage
---

What is a target package 🤔, its a class that stores data think of it like a save in a video game except this is for our robot shooter.
It stores data like our requested [Feedforward](https://en.wikipedia.org/wiki/Feed_forward_(control)) gain, Proportional gain (kP), RPM and the desired hood position in motor ticks.

So let's create a package, so the core library has a utility called `TargetPackageHelper` it's used to create a target package. The Target Package Helper has a create method which takes four parameters FF [(Feedforward)](https://en.wikipedia.org/wiki/Feed_forward_(control)), kP, RPM, hP (Hood Position), The most common way to determine these parameters is through trial and error.

```javascript title="Here's an example"
public class RobotContainer {
   private double ff = 0.1;
   private double kP = 0.4;
   private double rpm = 2300;
   private double hP = 50000;

   TargetPackage defaultPackage = TargetPackageHelper.create(ff, kP, rpm, hP);
}
```
