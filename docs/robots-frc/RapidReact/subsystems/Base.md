--- 
sidebar_position: 1
title: Base
---

The base subsystem is responsible for controlling the drivetrain and configuring the swerve pods.

:::caution
   This page is a work in progress and is not finished.
:::

## Swerve Pods

The swerve pods we will be using in this guide are the [MK4i swerve pods](https://www.swervedrivespecialties.com/products/mk4i-swerve-module) from Swerve Drive Specialties with the L1 gear ratio which is capable of 13 ft/s using [Falcon 500's](https://store.ctr-electronics.com/falcon-500-powered-by-talon-fx/).

### Initializing swerve pods

In order to initialize the swerve pods, Swerve Drive Specialies has provided a helper class called `Mk4iSwerveModuleHelper` however before we can use this helper we need to specify a bunch of information about our swerve pods to the library.

### Defining motor and magnetic encoder id's

So each swerve pod has two falcon 500's on the left and the right, the right one controls the rotation of the wheel and the left motor controls the speed of the wheel however for the most part the right motor does not know the current rotation of the wheel so that's why the swerve pods also have a magnetic encoder called a [CANCoder](https://store.ctr-electronics.com/cancoder/) they are mounted on top of the shaft of the pod were a small magnet is allowing us to read the current rotation of the pod.

So to configure these we need to define some variables for these devices like their CAN id's, motor offsets

### Creating swerve odometry, kinimatics, speed, states classes (NOT DONE)
So in order to use and control and swerve drivetrain you need kinimatics class what that class is in charge of doing is interpeting a x, y and rotation value in the range of -1 -> 1 into an individual swerve pod angle in radians and speed in meters per second. with that setup we need to be able to track our previous positions that is what the [SwerveDriveOdometry](https://docs.wpilib.org/en/stable/docs/software/kinematics-and-odometry/swerve-drive-odometry.html?highlight=SwerveDriveOdometry) class is for, it needs to run in the base subsystem's perodic method to update the pose in realtime most of the time this class won't need to be used unless you are working with auto routines using [SwerveControllerCommand](https://github.com/wpilibsuite/allwpilib/tree/main/wpilibjExamples/src/main/java/edu/wpi/first/wpilibj/examples/swervecontrollercommand). Controlling swerve module states.....
