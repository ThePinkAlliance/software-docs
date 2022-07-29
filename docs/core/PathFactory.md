Path factory handles building pathweaver controllers for swerve drive this makes command specific controller changes easier.

### Creating new Instance

Here we are creating a new Path Factory instance passing it the required parameters like Kinematics, consumer to update the pod states and x,y and theta gains along with maxVelocityMetersPerSecond, maxAccelerationMetersPerSecond.

First let's start with the kinmatics parameter what we are passing is WPIlib's [SwerveDriveKinematics](https://docs.wpilib.org/en/stable/docs/software/kinematics-and-odometry/swerve-drive-kinematics.html?highlight=Swerve%20Kinmatics) class which is responsible for converting [ChassisSpeeds](https://docs.wpilib.org/en/stable/docs/software/kinematics-and-odometry/intro-and-chassis-speeds.html?highlight=ChassisSpeeds#constructing-a-chassisspeeds-object) class which store's velocity values in x, y and theta to a SwerveModuleState array.

```typescript
PathFactory m_pathFactory = new PathFactory(m_kinmatics, 
    (state) -> m_base.setStates(state), x_gains, 
    y_gains, theta_gains, 
    maxVelocityMetersPerSecond, maxAccelerationMetersPerSecond);
```
