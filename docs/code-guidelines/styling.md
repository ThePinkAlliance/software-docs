---
sidebar_position: 1
title: Programming Style
---

:::caution NOTE
This page is a work in progress and is subject to change.
:::

:::caution NOTE
If you don't adhere to this style guide your code won't build.
:::

### Methods

Methods should be using camel case formatting, meaning the first letter of the name is lowercase then for the next word the first letter is captial.

:::warning note
Methods **should not be static** because of **potential issues** with the **WPILib scheduler**, Only do this if its absolutely  necessary.
:::

```javascript title="frc/robot/RobotContainer.java"
public class RobotContainer {
   public void startRobot() {}
}
```

### Public variables

For the most part we don't want to have public variables we want to keep them internal (private) to that specific class if they need to be accessed then making a getter method that returns that value is the best option.

```javascript title="frc/robot/subsystems/Base.java"
public class Base extends SubsystemBase {
   private double currentSpeed = 0;

   public void drive() {
      this.currentSpeed = 100;
   }

   // This is a getter method it returns a double
   public double getCurrentSpeed() {
      return currentSpeed;
   }
}
```

### Static variables

Static variables should be final and using all uppercase letters with underscores in between words.

```javascript title="frc/robot/RobotContainer.java"
public class RobotContainer {
   public static final double MAX_POWER = 0.6;
}
```
